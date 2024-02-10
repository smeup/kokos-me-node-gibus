import { Condition, IRuleDao } from './types';
import { Rule } from './types';
import { Connection, pool } from 'node-jt400';

type Config = {
    host: string;
    user: string;
    password: string;
};

type Row = {
    COMP: string;
    PRGR: number;
    REGO: string;
    IF_TRUE: string;
    IF_FALSE: string;
};

/**
 * Represents a RuleDao implementation for AS400 database.
 */
class RuleDaoProduction implements IRuleDao {

    private readonly config: Config;
    private exludeConverted = "STATUS is null or STATUS = 'E'";
    readonly pool: Connection;
    private readonly filter: string;
    private readonly SCHEMA = "W_SMMB";

    /**
     * Creates an instance of RuleDaoIBM.
     * @param host The host name of the IBM database.
     * @param user The user name of the IBM database.
     * @param password The password of the IBM database.
     * @param filter The filter clause. Default is empty string that it means no filter.
     * If you pass a not empty string, you don't must pass the keyword WHERE.
     */
    constructor(host: string, user: string, password: string, filter: string = "") {
        this.config = {
            host: host,
            user: user,
            password: password
        };
        if (filter.toLowerCase().indexOf("where") >= 0) {
            throw new Error("filter cannot be contain WHERE keyword");
        }
        this.filter = filter;
        // this is a trick because to mock jest require "require"
        // but if I use this class not in test environment "require" does not work
        // to me js is a totaly mess
        if (process.env.NODE_ENV === 'test') {
            this.pool = require("node-jt400").pool(this.config);
        } else {
            this.pool = pool(this.config);
        }
    }


    /**
     * Retrieves unconverted rules from the IBM database.
     * @returns An array of unconverted rules.
     */
    async getUnconvertedRules(): Promise<Rule[]> {
        const rules: Rule[] = [];
        const query = `
        select COMP, PRGR, REGO, IF_TRUE, IF_FALSE from ${this.SCHEMA}.GIBUS_RULES
        WHERE (${this.exludeConverted})
        ${this.filter === '' ? "" : ` and (${this.filter})`}
        order by COMP, PRGR
        `;
        let results: Row[] = await this.pool.query(query);
        let currRuleId = null;
        let currRule = null;
        for (let row of results) {
            const condition = new Condition(row.REGO, row.IF_TRUE, row.IF_FALSE);
            if (currRuleId != row.COMP) {
                currRuleId = row.COMP;
                currRule = new Rule(row.COMP, [condition]);
                rules.push(currRule);
            } else {
                currRule?.conditions.push(condition);
            }
        }
        return rules
    }

    /**
     * Marks a rule as converted in the IBM database.
     * @param rule The rule to mark as converted.
     */
    async markRuleAsConverted(rule: Rule): Promise<void> {
        await this.changeConversionStatus(rule, 'P', 'OK');
    }

    async markRuleAsNotConverted(rule: Rule, error: string): Promise<void> {
        await this.changeConversionStatus(rule, 'E', error.replace(/'/g, "''"));
    };

    async close(): Promise<void> {
        if (this.pool != null) {
            return this.pool.close();
        }
    }

    private async changeConversionStatus(rule: Rule, status: string, msg: string): Promise<void> {
        const tstamp = this.formatDate(new Date());
        const query = `
            UPDATE ${this.SCHEMA}.GIBUS_CONV_STATUS SET STATUS = '${status}', TSTAMP_START = '${tstamp}',  TSTAMP_END = '${tstamp}', MSG = '${msg.slice(0, 500)}'
            WHERE COMP = '${rule.id}'
        `;
        const updated = await this.pool.update(query);
        if (updated == 0) {
            const insert = `
                INSERT INTO ${this.SCHEMA}.GIBUS_CONV_STATUS (COMP, STATUS, TSTAMP_START, TSTAMP_END, MSG) VALUES
                ('${rule.id}', '${status}', '${tstamp}',  '${tstamp}', '${msg.slice(0, 500)}')
            `;
            await this.pool.update(insert);
        }
    }

    private formatDate(date: Date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JavaScript
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${year}${month}${day}${hours}${minutes}${seconds}`;
    }

}

export { RuleDaoProduction, Config, Row };
