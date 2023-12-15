
import { RuleConverterApp } from '../../src/converter/app';
import { IRuleDao, IRuleConverterService, IConversionResultDao } from '../../src/converter/types';

describe('RuleConverterApp', () => {
  let ruleDao: IRuleDao;
  let ruleConverterService: IRuleConverterService;
  let conversionResultDao: IConversionResultDao;
  let ruleConverterApp: RuleConverterApp;

  beforeEach(() => {
    ruleDao = {
      getUnconvertedRules: jest.fn(),
      markRuleAsConverted: jest.fn()
    };
    ruleConverterService = {
      convertRule: jest.fn(),
    };
    conversionResultDao = {
      saveConversionResult: jest.fn(),
    };
    ruleConverterApp = new RuleConverterApp(ruleDao, ruleConverterService, conversionResultDao);
  });

  describe('convertRules', () => {
    it('should convert all unconverted rules', () => {
      const mockRule = { id: 1 };
      const mockResult = { javaScript: 'converted code' };

      (ruleDao.getUnconvertedRules as jest.Mock).mockReturnValue([mockRule]);
      (ruleConverterService.convertRule as jest.Mock).mockReturnValue(mockResult);

      ruleConverterApp.convertRules();

      expect(ruleDao.getUnconvertedRules).toHaveBeenCalled();
      expect(ruleConverterService.convertRule).toHaveBeenCalledWith(mockRule);
      expect(conversionResultDao.saveConversionResult).toHaveBeenCalledWith(mockResult);
      expect(ruleDao.markRuleAsConverted).toHaveBeenCalledWith(mockRule);
    });
  });
});