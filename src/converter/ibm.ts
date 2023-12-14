import { RuleDao } from './types';
import { Rule } from './types';
import * as ibm_db from 'ibm_db';

class RuleDaoIBM implements RuleDao {

    private connectionString: string;

    constructor(connectionString: string) {
        this.connectionString = connectionString;
    }

    getUnconvertedRules(): Rule[] {
        const rules: Rule[] = [];
        const conn = ibm_db.openSync(this.connectionString);
        try {
            const query = 'SELECT ID, RULE FROM RULES';
            const result = conn.querySync(query);

            for (const row of result) {
                const rule: Rule = {
                    id: row.ID,
                    script: row.RULE
                };
                rules.push(rule);
            }
            return rules;
        } finally {
            conn.closeSync();
        }
    };

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
