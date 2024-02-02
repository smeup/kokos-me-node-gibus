import { RuleDaoExamples } from '../../src/converter/rule-dao.examples';
import { Condition, Rule } from '../../src/converter/types';
import * as path from 'path';
import * as fs from 'fs';

const RULES_FILE_NAME = "onerule.tsv";

const LOG_PATH = path.resolve(".work", `${RULES_FILE_NAME}.txt`);
const ERR_PATH = path.resolve(".work", `${RULES_FILE_NAME}.err`);


describe('RuleDaoExamples', () => {
    let ruleDao: RuleDaoExamples;

    beforeEach(() => {
        fs.rmSync(ERR_PATH, { force: true });
        fs.rmSync(LOG_PATH, { force: true });
        ruleDao = new RuleDaoExamples({ rulesFileName: RULES_FILE_NAME });
    });

    describe('getUnconvertedRules', () => {
        it(`should retrieve unconverted rules from the /assets/test/${RULES_FILE_NAME} file`, async () => {
            const unconvertedRules = await ruleDao.getUnconvertedRules();

            // Assert
            expect(unconvertedRules.length).toBe(1);

            // Get first rule
            const result = unconvertedRules;

            // Assert
            expect(result).toEqual([
                new Rule(`REG0003124`, [
                    new Condition(`§L_PORTANTE2 > #0`, ``, `*SET *LG=''`),
                ]),
            ]);
        });
    });

    describe('markRuleAsConverted', () => {
        it(`should write the rule to the ${LOG_PATH} file`, async () => {
            // Arrange
            const mockRule: Rule = { id: 'REG0003124', conditions: [] };

            // Act
            await ruleDao.markRuleAsConverted(mockRule);

            // Assert

            const fileContent = fs.readFileSync(ruleDao.logPath, 'utf-8');
            expect(fileContent).toContain(`${mockRule.id}\t`);
            (await ruleDao.getUnconvertedRules())[0]
        });
        it(`REG0003124 is converted and than does not be in unconvertedRules`, async () => {
            // Arrange
            const mockRule: Rule = { id: 'REG0003124', conditions: [] };

            // Act
            await ruleDao.markRuleAsConverted(mockRule);

            // Assert
            const unconvertedRulesCount = ((await ruleDao.getUnconvertedRules()).length);
            expect(unconvertedRulesCount).toBe(0);
        });
    });


});