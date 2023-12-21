
import { RuleConverterApp } from '../../src/converter/app';
import { IRuleDao, IRuleConverterService, IConversionResultDao, ConversionResult } from '../../src/converter/types';
import { removeUnnecessaryChars } from "../../src/converter/utils";

describe('RuleConverterApp', () => {
  let ruleDao: IRuleDao;
  let ruleConverterService: IRuleConverterService;
  let conversionResultDao: IConversionResultDao;
  let ruleConverterApp: RuleConverterApp;
  let conversionResult: ConversionResult

  beforeEach(() => {
    ruleDao = {
      getUnconvertedRules: jest.fn(),
      markRuleAsConverted: jest.fn(),
      markRuleAsNotConverted: jest.fn(),
    };
    ruleConverterService = {
      convertRule: jest.fn(),
    };
    conversionResultDao = {
      saveConversionResult(myConversionResult: ConversionResult) {
        conversionResult = myConversionResult;
      },
    };
    ruleConverterApp = new RuleConverterApp(ruleDao, ruleConverterService, conversionResultDao);
  });

  describe('convertRules', () => {
    it('should convert all unconverted rules', async () => {
      // Arrange
      const mockRule = { id: "MYRULE" };
      const mockResult = { javaScript: 'converted code' };

      (ruleDao.getUnconvertedRules as jest.Mock).mockReturnValue([mockRule]);
      (ruleConverterService.convertRule as jest.Mock).mockResolvedValue(mockResult);

      // Act
      await ruleConverterApp.convertRules();

      // Assert
      expect(ruleDao.getUnconvertedRules).toHaveBeenCalled();
      expect(ruleConverterService.convertRule).toHaveBeenCalledWith(mockRule);
      expect(ruleDao.markRuleAsConverted).toHaveBeenCalledWith(mockRule);
      const expectedJavaScript = `
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

      export const ${mockRule.id}: Rule = (iv) => {

          const vars = new Variables(iv);
          
          // GENERATED
          converted code
          // GENERATED

          return vars.output;
      };
      `;
      expect(removeUnnecessaryChars(conversionResult.javaScript)).toBe(removeUnnecessaryChars(expectedJavaScript));
    });
  });
});


