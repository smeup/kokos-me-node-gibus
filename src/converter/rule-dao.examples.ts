import { Condition, IRuleDao, Rule } from './types';
import * as path from 'path'
import * as fs from 'fs'

/**
 * Represents an implementation of the IRuleDao interface.
 * Provides examples of rule data access operations retrieved from CSV.
 */
class RuleDaoExamples implements IRuleDao {

    private logPath;

    /**
     * Creates a new instance of the RuleDaoExamples class.
     * @param logPath The path where will be logged the rules when converted. Default is .work/conversion-result.txt.
     */
    constructor(logPath: string = path.resolve(".work", "conversion-result.txt")) {
        this.logPath = logPath;
        fs.mkdirSync(path.dirname(this.logPath), { recursive: true });
        if (!fs.existsSync(this.logPath)) {
            fs.writeFileSync(this.logPath, '', 'utf-8');
        }
    }

    /**
     * Retrieves unconverted rules. This method verifies the .work/conversion-result.txt file to avoid retrieving already converted rules.
     * The rules are retrieved from the /assets/test/rules.tsv file.
     * Skip the first row.
     */
    getUnconvertedRules(): Rule[] {
        const filePath = path.resolve("assets", "test", "rules.tsv");
        const rules: Rule[] = [];
        const convertedRulesId = this.getConvertedRulesIds();

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
            if (convertedRulesId.indexOf(COMP) >= 0) {
                console.log(`Rule ${COMP} already converted. Skipping...`);
                continue;
            };
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

    /***
     * Marks a rule as converted. The rule is written to the .work/conversion-result.txt file.
     */
    markRuleAsConverted(rule: Rule): void {
        const timestamp = new Date().toISOString();
        const row = `${rule.id}\t${timestamp}\n`;
        fs.appendFileSync(this.logPath, row, 'utf-8');
    }

    private getConvertedRulesIds(): string[] {
        const rulesIds: string[] = [];

        const fileContent = fs.readFileSync(this.logPath, 'utf-8');
        const rows = fileContent.split(/\n|\r\n/);
        let rowCount = 0;
        for (const row of rows) {
            const record = row.split('\t');
            if (record.length != 2) {
                console.log(`Invalid record: ${record}`);
                continue;
            }
            const COMP = record[0];
            rulesIds.push(COMP);
        }
        return rulesIds;
    }

}

export { RuleDaoExamples }

