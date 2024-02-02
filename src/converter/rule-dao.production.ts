import { Condition, IRuleDao } from './types';
import { Rule } from './types';

type Config = {
    host: string;
    user: string;
    password: string;
};

/**
 * Represents a RuleDao implementation for AS400 database.
 */
class RuleDaoProduction implements IRuleDao {

    private config: Config;

    private exludeConverted = "STATUS is null or STATUS = 'E'";

    private query: string;

    // todo when I have understand hot to use pool in the right way, I will remove this any
    readonly pool: any;

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
        this.pool = require('node-jt400').pool(this.config);
        this.query = `
            select COMP, PRGR, REGO, IF_TRUE, IF_FALSE from GIBUS_RULES
            WHERE (${this.exludeConverted})
            ${filter === '' ? "" : ` and (${filter})`}
            order by PRGR
        `;
    }


    /**
     * Retrieves unconverted rules from the IBM database.
     * @returns An array of unconverted rules.
     */
    async getUnconvertedRules(): Promise<Rule[]> {
        const rules: Rule[] = [];
        const results = await this.pool.query(this.query);
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
    };

    /**
     * Marks a rule as converted in the IBM database.
     * @param rule The rule to mark as converted.
     */
    async markRuleAsConverted(rule: Rule): Promise<void> {
        const tstamp = this.formatDate(new Date());
        const query = `
                UPDATE GIBUS_CONV_STATUS SET STATUS = 'P', TSTAMP_START = '${tstamp}',  TSTAMP_END = '${tstamp}', MESSAGE = 'OK'
                WHERE COMP = '${rule.id}'
            `;
        await this.pool.update(query);
    };

    async markRuleAsNotConverted(rule: Rule, error: string): Promise<void> {
        const tstamp = this.formatDate(new Date());
        const query = `
            UPDATE GIBUS_CONV_STATUS SET STATUS = 'E', TSTAMP_START = '${tstamp}',  TSTAMP_END = '${tstamp}', MESSAGE = '${error.slice(0, 500)}'
            WHERE COMP = '${rule.id}'
        `;
        await this.pool.update(query);
    };

    async close(): Promise<void> {
        this.pool.close();
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

export { RuleDaoProduction, Config };
