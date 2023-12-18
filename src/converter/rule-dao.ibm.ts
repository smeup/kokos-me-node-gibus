import { IRuleDao } from './types';
import { Rule } from './types';
import * as ibm_db from 'ibm_db';

/**
 * Represents a RuleDao implementation for IBM database.
 */
class RuleDaoIBM implements IRuleDao {

    private connectionString: string;

    /**
     * Creates an instance of RuleDaoIBM.
     * @param connectionString The connection string for the IBM database, the format is: 
     * DATABASE=database;HOSTNAME=hostname;PORT=port;PROTOCOL=TCPIP;UID=username;PWD=password;
     */
    constructor(connectionString: string) {
        this.connectionString = connectionString;
    }

    /**
     * Retrieves unconverted rules from the IBM database.
     * @returns An array of unconverted rules.
     */
    getUnconvertedRules(): Rule[] {
        const rules: Rule[] = [];
        const conn = ibm_db.openSync(this.connectionString);
        try {
            const query = 'SELECT ID, RULE FROM RULES';
            const result = conn.querySync(query);

            for (const row of result) {
                // TODO implement
                // const rule: Rule = {
                //     id: row.ID,
                //     script: row.RULE
                // };
                // rules.push(rule);
                throw "TODO"
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
    async markRuleAsConverted(rule: Rule) {
        const conn = ibm_db.openSync(this.connectionString);
        try {
            const query = `UPDATE RULES SET CONVERTED = 1 WHERE ID = ${rule.id}`;
            conn.querySync(query);
        } finally {
            conn.closeSync();
        }
    };
}

export { RuleDaoIBM };
