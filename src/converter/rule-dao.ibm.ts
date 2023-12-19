import { Condition, IRuleDao } from './types';
import { Rule } from './types';
import * as ibm_db from 'ibm_db';

/**
 * Represents a RuleDao implementation for IBM database.
 */
class RuleDaoIBM implements IRuleDao {

    private connectionString: string;

    private exludeConverted = "STATUS is null or STATUS = 'E'";

    private query: string;

    /**
     * Creates an instance of RuleDaoIBM.
     * @param connectionString The connection string for the IBM database, the format is: 
     * DATABASE=database;HOSTNAME=hostname;PORT=port;PROTOCOL=TCPIP;UID=username;PWD=password;
     * @param filter The filter clause. Default is empty string that it means no filter.
     * If you pass a not empty string, you don't must pass the keyword WHERE.
     */
    constructor(connectionString: string, filter: string = "") {
        this.connectionString = connectionString;
        if (filter.toLowerCase().indexOf("where") >= 0) {
            throw new Error("filter cannot be contain WHERE keyword");
        }

        this.query = `
            select COMP, PRGR, REGO, IF_TRUE, IF_FALSE from GIBUS_RULES
            WHERE (${this.exludeConverted})
            ${filter === '' ? "" : ` and (${filter})`}
            order by J§PRGR
        `;
    }


    /**
     * Retrieves unconverted rules from the IBM database.
     * @returns An array of unconverted rules.
     */
    getUnconvertedRules(): Rule[] {
        const rules: Rule[] = [];
        const conn = ibm_db.openSync(this.connectionString);
        try {
            const result = conn.querySync(this.query);
            let currProgr = -1
            let currRule = null;
            for (const row of result) {
                const condition = new Condition(row.REGO, row.IF_TRUE, row.IF_FALSE);
                if (row.JPRGR != currProgr) {
                    currRule = new Rule(row.COMP, [condition]);
                } else {
                    currRule?.conditions.push(new Condition(row.REGO, row.IF_TRUE, row.IF_FALSE));
                }
            }
            return rules;

        } finally {
            conn.closeSync();
        }
    };

    /**
     * Marks a rule as converted in the IBM database.
     * @param rule The rule to mark as converted.
     */
    markRuleAsConverted(rule: Rule) {
        const conn = ibm_db.openSync(this.connectionString);
        try {
            const tstamp = this.formatDate(new Date());
            const query = `
                UPDATE GIBUS_CONV_STATUS SET STATUS = 'P', TSTAMP_START = '${tstamp}',  TSTAMP_END = '${tstamp}'
                WHERE COMP = '${rule.id}'
            `;
            conn.querySync(query);
        } finally {
            conn.closeSync();
        }
    };

    formatDate(date: Date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JavaScript
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${year}${month}${day}${hours}${minutes}${seconds}`;
    }

}

export { RuleDaoIBM };
