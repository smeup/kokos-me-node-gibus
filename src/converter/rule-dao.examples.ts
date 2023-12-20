import { Condition, IRuleDao, Rule } from './types';
import * as path from 'path'
import * as fs from 'fs'

/**
 * Represents an implementation of the IRuleDao interface.
 * Provides examples of rule data access operations retrieved from CSV.
 */
class RuleDaoExamples implements IRuleDao {

    /**
     * Retrieves unconverted rules.
     * The rules are retrieved from the /assets/test/rules.tsv file.
     * Skip the first row.
     */
    getUnconvertedRules(): Rule[] {
        const filePath = path.resolve("assets", "test", "rules.tsv");
        const rules: Rule[] = [];

        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const rows = fileContent.split(/\n|\r\n/);
        let currentRule: Rule | undefined = undefined;
        let currentRuleId = '';
        let rowCount = 0;
        for (const row of rows) {
            if (rowCount++ == 0 || row.length === 0) continue;
            const record = row.split('\t');
            if (record.length != 5) {
                console.log(`Invalid record: ${record}`);
                continue;
            }
            const COMP = record[0];
            // const PRGR = parseInt(record[1]);
            const REGO = record[2].replace(/^""$/g, '');
            const IF_TRUE = record[3].replace(/^""$/g, '');
            const IF_FALSE = record[4].replace(/^""$/g, '');
            const condition = new Condition(REGO, IF_TRUE, IF_FALSE);
            if (currentRuleId !== COMP) {
                currentRule = new Rule(COMP, []);
                rules.push(currentRule);
                currentRuleId = COMP
            }
            currentRule?.conditions.push(condition);
        }

        return rules;
    }
    markRuleAsConverted(rule: Rule): void {
        throw new Error('Method not implemented.');
    }

}

export { RuleDaoExamples }

