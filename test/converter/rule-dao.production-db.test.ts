import { RuleDaoProduction, Row } from '../../src/converter/rule-dao.production';
import { Condition, Rule } from '../../src/converter/types';
import * as consts from '../../src/converter/consts';

const GIBUS_RULES_ROWS: Row[] = [
  {
    COMP: 'REG0003124',
    PRGR: 1,
    REGO: '§L_PORTANTE2 > #0',
    IF_TRUE: '',
    IF_FALSE: `*SET *LG=''`,
  }
];

const GR = GIBUS_RULES_ROWS;


const RULES: Rule[] = [
  new Rule(GR[0].COMP, [
    new Condition(GR[0].REGO, GR[0].IF_TRUE, GR[0].IF_FALSE)
  ])
];



describe('RuleDaoProduction - db', () => {
  let ruleDao: RuleDaoProduction;

  beforeEach(async () => {
    if (!isEnvSetProperly()) {
      return;
    }
    // Initialize RuleDaoProduction with test configuration
    ruleDao = new RuleDaoProduction(consts.host, consts.user, consts.password, "COMP in ('REG0003124')");
    await ruleDao.markRuleAsNotConverted(RULES[0], 'Test error message');
  });

  afterEach(async () => {
    if (!isEnvSetProperly()) {
      return;
    }
    // Clean up any resources used by RuleDaoProduction
    await ruleDao.close();
  });

  describe('getUnconvertedRules', () => {
    it('should retrieve unconverted rules from the database', async() => {
      
      if (!isEnvSetProperly()) {
        return;
      }
      
      let expected: Rule[] = RULES;

      // Call the method under test
      let unconvertedRules = await ruleDao.getUnconvertedRules();
      
      // Assert the result
      expect(unconvertedRules).toEqual(expected);

    });
  });

  describe('markRuleAsConverted', () => {
    it('should mark a rule as converted in the database',  async () => {
      
      if (!isEnvSetProperly()) {
        return;
      }
      
      // Create a test rule
      const rule = RULES[0];

      // Call the method under test
      await ruleDao.markRuleAsConverted(rule);

      let unconvertedRules = await ruleDao.getUnconvertedRules();
      expect(unconvertedRules).toEqual([]);
      
    });
  });

  describe('markRuleAsNotConverted', () => {

    it('should mark a rule as not converted in the database', async () => {

      if (!isEnvSetProperly()) {
        return;
      }

      // Create a test rule and error message
      const rule = RULES[0];
      const error = 'Test error message';

      // Call the method under test
      await ruleDao.markRuleAsNotConverted(rule, error);

      let unconvertedRules = await ruleDao.getUnconvertedRules();
      expect(unconvertedRules).toEqual([rule]);
    });
  });
});


function isEnvSetProperly(): boolean {
  return consts.host !== 'setme' && consts.user !== 'setme' && consts.password !== 'setme';
}

