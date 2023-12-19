import { RuleDaoIBM } from '../../src/converter/rule-dao.ibm';
import { Rule } from '../../src/converter/types';

describe('RuleDaoIBM', () => {
    let ruleDao: RuleDaoIBM;

    beforeEach(() => {
        ruleDao = new RuleDaoIBM('connectionString');
    });

    describe('getUnconvertedRules', () => {
        it('should retrieve unconverted rules from the IBM database', () => {
            // Arrange
            const mockRule1: Rule = { id: 'COMP1', conditions: [] };
            const mockRule2: Rule = { id: 'COMP2', conditions: [] };
            const mockResult = [mockRule1, mockRule2];

            // Mock the ibm_db module
            jest.mock('ibm_db', () => ({
                openSync: jest.fn().mockReturnValue({
                    querySync: jest.fn().mockReturnValue(mockResult),
                    closeSync: jest.fn(),
                }),
            }));

            // Act
            const result = ruleDao.getUnconvertedRules();

            // Assert
            expect(result).toEqual(mockResult);
        });
    });

    describe('markRuleAsConverted', () => {
        it('should mark a rule as converted in the IBM database', () => {
            // Arrange
            const mockRule: Rule = { id: 'COMP1', conditions: [] };

            // Mock the ibm_db module
            jest.mock('ibm_db', () => ({
                openSync: jest.fn().mockReturnValue({
                    querySync: jest.fn(),
                    closeSync: jest.fn(),
                }),
            }));

            // Act
            ruleDao.markRuleAsConverted(mockRule);

            // Assert
            // Expect the querySync method to have been called with the correct query
            expect((ruleDao as any).conn.querySync).toHaveBeenCalledWith(expect.stringContaining(`COMP = '${mockRule.id}'`));
        });
    });
});