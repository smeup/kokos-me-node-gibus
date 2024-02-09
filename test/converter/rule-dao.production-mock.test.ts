import { RuleDaoProduction } from '../../src/converter/rule-dao.production';
import { Condition, Rule } from '../../src/converter/types';
import * as consts from '../../src/converter/consts';

const GIBUS_RULES_ROWS = [
  {
    COMP: 'COMP1',
    PRGR: 1,
    REGO: 'IF_TRUE1',
    IF_TRUE: 'IF_FALSE1',
    IF_FALSE: 'IF_FALSE1',
  },
  {
    COMP: 'COMP1',
    PRGR: 2,
    REGO: 'IF_TRUE1_2',
    IF_TRUE: 'IF_FALSE1_2',
    IF_FALSE: 'IF_FALSE1_3',
  },
  {
    COMP: 'COMP2',
    PRGR: 1,
    REGO: 'IF_TRUE2',
    IF_TRUE: 'IF_FALSE2',
    IF_FALSE: 'IF_FALSE2',
  }
];

const GR = GIBUS_RULES_ROWS;


const RULES: Rule[] = [
  new Rule(GR[0].COMP, [
    new Condition(GR[0].REGO, GR[0].IF_TRUE, GR[0].IF_FALSE),
    new Condition(GR[1].REGO, GR[1].IF_TRUE, GR[1].IF_FALSE)
  ]),
  new Rule(GR[2].COMP, [new Condition(GR[2].REGO, GR[2].IF_TRUE, GR[2].IF_FALSE)]),
];


const POOL = createPool();

describe('RuleDaoProduction - Mock', () => {
  let ruleDao: RuleDaoProduction;



  beforeEach(() => {
    // Initialize RuleDaoProduction with test configuration
    ruleDao = new RuleDaoProduction('test-host', 'test-user', 'test-password');
  });

  afterEach(() => {
    // Clean up any resources used by RuleDaoProduction
    // (e.g., close database connections)
  });

  describe('getUnconvertedRules', () => {
    it('should retrieve unconverted rules from the database', async () => {

      let expected: Rule[] = RULES;

      // Call the method under test
      const unconvertedRules = await ruleDao.getUnconvertedRules();

      // Assert the result
      expect(unconvertedRules).toEqual(expected);
    });
  });

  describe('markRuleAsConverted', () => {
    it('should mark a rule as converted in the database', async () => {

      // Create a test rule
      const rule = RULES[0];

      // Call the method under test
      await ruleDao.markRuleAsConverted(rule);

      // Assert that the database update method was called with the correct query
      expect(POOL.update).toHaveBeenCalledWith(expect.stringContaining(`UPDATE W_SMMB.GIBUS_CONV_STATUS SET STATUS = 'P'`));
    });
  });

  describe('markRuleAsNotConverted', () => {

    it('should mark a rule as not converted in the database', async () => {

      // Create a test rule and error message
      const rule = RULES[0];
      const error = 'Test error message';

      // Call the method under test
      await ruleDao.markRuleAsNotConverted(rule, error);

      // Assert that the database update method was called with the correct query
      expect(POOL.update).toHaveBeenCalledWith(expect.stringContaining(`UPDATE W_SMMB.GIBUS_CONV_STATUS SET STATUS = 'E'`));
    });
  });
});


function createPool() {
  jest.mock('node-jt400', () => ({
    pool: jest.fn().mockReturnValue({
      query: jest.fn().mockResolvedValue(GIBUS_RULES_ROWS),
      update: jest.fn(),
      close: jest.fn(),
    }),
  }));

  return require('node-jt400').pool();
}
