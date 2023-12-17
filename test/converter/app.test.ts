
import { RuleConverterApp, completeRules, readRuleTemplateFile } from '../../src/converter/app';
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

  describe('completeRules', () => {
    it('should replace "// AI_GENERATED" with the provided body function implementation', () => {
      // Arrange
      const ruleTemplate = readRuleTemplateFile();
      const bodyFunctionImpl = 'console.log("Hello, World!");';
      const expected = `
/**
 * This rule represents a template implementation of a rule.
 * It takes an input value and performs some operations on it using the Variables class.
 * The result is returned as the output value.
 * 
 * @param iv The input value for the rule.
 * @returns The output value after applying the rule.
 */
import { Rule } from "../types/general";
import { Variables } from "../converter/variables";

export const SCAFFOLD: Rule = (iv) => {

    const vars = new Variables(iv);
    
    // GENERATED
    console.log("Hello, World!");
    // GENERATED

    return vars.output;
};            
      `.replace(/\r/g, '').trim();


      // Act
      const result = completeRules(bodyFunctionImpl).replace(/\r/g, '').trim();

      // Assert
      expect(result).toEqual(expected);
    });
  });
});