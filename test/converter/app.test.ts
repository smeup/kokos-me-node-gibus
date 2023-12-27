import { RuleConverterApp } from '../../src/converter/app';
import { Rule, IRuleDao, IConversionResultValidator, IConversionResultDao, IRuleConverterService } from '../../src/converter/types';


describe('RuleConverterApp', () => {
  let ruleDao: IRuleDao;
  let ruleConverterService: IRuleConverterService;
  let conversionResultValidator: IConversionResultValidator;
  let conversionResultDao: IConversionResultDao;
  let ruleConverterApp: RuleConverterApp;

  beforeEach(() => {
    ruleDao = {} as IRuleDao;
    ruleConverterService = {} as IRuleConverterService;
    conversionResultValidator = {} as IConversionResultValidator;
    conversionResultDao = {} as IConversionResultDao;
    ruleConverterApp = new RuleConverterApp(ruleDao, ruleConverterService, conversionResultValidator, conversionResultDao);
  });

  describe('convertRules', () => {
    it('should convert all unconverted rules', async () => {
      // Mock unconverted rules
      const rules: Rule[] = [new Rule("rule1", []), new Rule("rule2", [])];
      ruleDao.getUnconvertedRules = jest.fn().mockReturnValue(rules);

      // Mock ruleConverterService
      const convertedRule1 = { javaScript: 'convertedRule1' };
      const convertedRule2 = { javaScript: 'convertedRule2' };
      ruleConverterService.convertRule = jest.fn()
        .mockResolvedValueOnce(convertedRule1)
        .mockResolvedValueOnce(convertedRule2);

      // Mock conversionResultValidator
      conversionResultValidator.validateConversionResult = jest.fn();

      // Mock conversionResultDao
      conversionResultDao.saveConversionResult = jest.fn();

      // Mock ruleDao
      ruleDao.markRuleAsConverted = jest.fn();

      await ruleConverterApp.convertRules();

      expect(ruleDao.getUnconvertedRules).toHaveBeenCalled();
      expect(ruleConverterService.convertRule).toHaveBeenCalledTimes(2);
      expect(ruleConverterService.convertRule).toHaveBeenCalledWith(rules[0]);
      expect(ruleConverterService.convertRule).toHaveBeenCalledWith(rules[1]);
      expect(conversionResultValidator.validateConversionResult).toHaveBeenCalledTimes(2);
      expect(conversionResultDao.saveConversionResult).toHaveBeenCalledTimes(2);
      expect(ruleDao.markRuleAsConverted).toHaveBeenCalledTimes(2);
    });

    it('should handle errors during conversion', async () => {
      // Mock unconverted rules
      const rules: Rule[] = [new Rule("rule1", []), new Rule("rule2", [])];
      ruleDao.getUnconvertedRules = jest.fn().mockReturnValue(rules);

      // Mock ruleConverterService
      const error = new Error('Conversion error');
      ruleConverterService.convertRule = jest.fn()
        .mockResolvedValueOnce({ javaScript: 'convertedRule1' })
        .mockRejectedValueOnce(error);

      // Mock ruleDao
      ruleDao.markRuleAsConverted = jest.fn();
      ruleDao.markRuleAsNotConverted = jest.fn();

      // Mock conversionResultValidator
      conversionResultValidator.validateConversionResult = jest.fn();

      // Mock conversionResultDao
      conversionResultDao.saveConversionResult = jest.fn();

      await ruleConverterApp.convertRules();

      expect(ruleDao.getUnconvertedRules).toHaveBeenCalled();
      expect(ruleConverterService.convertRule).toHaveBeenCalledTimes(2);
      expect(ruleConverterService.convertRule).toHaveBeenCalledWith(rules[0]);
      expect(ruleConverterService.convertRule).toHaveBeenCalledWith(rules[1]);
      expect(ruleDao.markRuleAsConverted).toHaveBeenCalledTimes(1);
      expect(ruleDao.markRuleAsNotConverted).toHaveBeenCalledTimes(1);
      expect(ruleDao.markRuleAsNotConverted).toHaveBeenCalledWith(rules[1], error.toString());
    });
  });
});