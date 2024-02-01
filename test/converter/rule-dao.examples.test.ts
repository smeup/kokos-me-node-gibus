import { RuleDaoExamples } from '../../src/converter/rule-dao.examples';
import { Condition, Rule } from '../../src/converter/types';
import * as path from 'path';
import * as fs from 'fs';


const LOG_PATH = path.resolve(".work", "conversion-result-test.txt");
const ERR_PATH = path.resolve(".work", "conversion-result-test.err");

describe('RuleDaoExamples', () => {
    let ruleDao: RuleDaoExamples;

    beforeEach(() => {
        fs.rmSync(ERR_PATH, { force: true });
        fs.rmSync(LOG_PATH, { force: true });
        ruleDao = new RuleDaoExamples({logPath: LOG_PATH, errPath: ERR_PATH});
    });

    describe('getUnconvertedRules', () => {
        it('should retrieve unconverted rules from the /assets/test/rules.tsv file', async() => {
            const unconvertedRules = await ruleDao.getUnconvertedRules();

            // Assert
            expect(unconvertedRules.length).toBe(38);

            // Get first 2 rules
            const result = unconvertedRules.slice(0, 2);

            // Assert
            expect(result).toEqual([
                new Rule(`REG0003124`, [
                    new Condition(`§L_PORTANTE2 > #0`, ``, `*SET *LG=''`),
                ]),
                new Rule(`REG0003127`, [
                    new Condition(``, `*SET *CF= #0`, ``),
                    new Condition(`(§L_PORTANTE2> #0 ) AND (§L_PORTANTE3 = #0 )  AND (§FS_FAM2_WALL=§SI)`, `*SET *CF=#1`, ``),
                    new Condition(`(§L_PORTANTE2 > #0 ) AND (§L_PORTANTE3 > #0 ) AND (§FS_FAM2_WALL=§SI)`, `*SET *CF=#2`, ``),
                ]),
            ]);
        });
    });

    describe('markRuleAsConverted', () => {
        it(`should write the rule to the ${LOG_PATH} file`, async() => {
            // Arrange
            const mockRule: Rule = { id: 'REG0003124', conditions: [] };

            // Act
            await ruleDao.markRuleAsConverted(mockRule);

            // Assert

            const fileContent = fs.readFileSync(ruleDao.logPath, 'utf-8');
            expect(fileContent).toContain(`${mockRule.id}\t`);
            (await ruleDao.getUnconvertedRules())[0]
        });
        it(`REG0003124 is converted and than does not be in unconvertedRules`, async() => {
            // Arrange
            const mockRule: Rule = { id: 'REG0003124', conditions: [] };

            // Act
            await ruleDao.markRuleAsConverted(mockRule);

            // Assert
            const firsRuleId = (await ruleDao.getUnconvertedRules())[0].id;
            expect(firsRuleId).not.toBe('REG0003124');
        });
    });


});