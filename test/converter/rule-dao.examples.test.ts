import { RuleDaoExamples } from '../../src/converter/rule-dao.examples';
import { Condition, Rule } from '../../src/converter/types';

describe('RuleDaoExamples', () => {
    let ruleDao: RuleDaoExamples;

    beforeEach(() => {
        ruleDao = new RuleDaoExamples();
    });

    describe('getUnconvertedRules', () => {
        it('should retrieve unconverted rules from the /assets/test/rules.tsv file', () => {
            // Get first 2 rules
            const result = ruleDao.getUnconvertedRules().slice(0, 2);

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
        it('should throw an error as the method is not implemented', () => {
            // Arrange
            const mockRule: Rule = { id: 'COMP1', conditions: [] };

            // Act & Assert
            expect(() => ruleDao.markRuleAsConverted(mockRule)).toThrow('Method not implemented.');
        });
    });
});