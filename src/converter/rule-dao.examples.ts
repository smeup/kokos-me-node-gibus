import { Condition, IRuleDao, Rule } from './types';
import * as path from 'path'
import * as fs from 'fs'

/**
 * Represents an implementation of the IRuleDao interface.
 * Provides examples of rule data access operations retrieved from CSV.
 */
class RuleDaoExamples implements IRuleDao {

    readonly logPath: string;
    readonly errPath: string;
    readonly allow: (ruleId: string) => boolean;
    readonly rulesFileName: string;

    /**
     * Creates a new instance of the RuleDaoExamples class.
     * @param workDir The dir where will be logged the rules when converted. Default is .work.
     * @param allow A function that returns true if the rule can be converted, otherwise false. Default is a function that always returns true.
     * @param rulesFileName - The name of the file containing the rules to be converted. Defaults to rules.tsv. The
     * file is expected to be located in the assets/test folder.
     */
    constructor({ workDir = ".work", errDir = ".work", allow = () => true, rulesFileName = "rules.tsv" }:
        { workDir?: string, errDir?: string, allow?: (ruleId: string) => boolean, rulesFileName?: string } = {}) {
        this.logPath = path.resolve(workDir, rulesFileName + ".txt");
        this.errPath = path.resolve(workDir, rulesFileName + ".err");;
        this.allow = allow;
        this.rulesFileName = rulesFileName;
        fs.mkdirSync(path.dirname(this.logPath), { recursive: true });
    }


    /**
     * Retrieves unconverted rules. This method verifies the .work/conversion-result.txt file to avoid retrieving already converted rules.
     * The rules are retrieved from the /assets/test/rules.tsv file.
     * Skip the first row.
     */
    async getUnconvertedRules(): Promise<Rule[]> {
        const filePath = path.resolve("assets", "test", this.rulesFileName);
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
                console.warn(`Invalid record: ${record}`);
                continue;
            }
            const COMP: string = record[0];
            if (convertedRulesId.indexOf(COMP) >= 0) {
                console.log(`Rule ${COMP} already converted. Skipping...`);
                continue;
            };
            if (this.allow(COMP)) {
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
            } else {
                console.debug(`Rule ${COMP} not allowed. Skipping...`);
            }
        }
        return rules;
    }

    /***
     * Marks a rule as converted. The rule is written to the this.logPath file.
     */
    async markRuleAsConverted(rule: Rule): Promise<void> {
        if (!fs.existsSync(this.logPath)) {
            fs.writeFileSync(this.logPath, '', 'utf-8');
        }
        const timestamp = new Date().toISOString();
        const row = `${rule.id}\t${timestamp}\n`;
        fs.appendFileSync(this.logPath, row, 'utf-8');
    }

    /***
    * Marks a rule as not converted. The rule is written to the this.errPath file.
    */
    async markRuleAsNotConverted(rule: Rule, error: string): Promise<void> {
        if (!fs.existsSync(this.errPath)) {
            fs.writeFileSync(this.errPath, '', 'utf-8');
        }
        const timestamp = new Date().toISOString();
        const row = `${rule.id}\t${error}\t${timestamp}\n`;
        fs.appendFileSync(this.errPath, row, 'utf-8');
    }

    private getConvertedRulesIds(): string[] {
        if (!fs.existsSync(this.logPath)) {
            fs.writeFileSync(this.logPath, '', 'utf-8');
        }
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