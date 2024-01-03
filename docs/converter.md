# Converter

## Modules
- [types](../src/converter/types.ts) - Contains all definitions
- [variables](../src/converter/variables.ts) - RuleVariableMap helper used to simplify the LLM prompt definition
- [prompts](../src/converter/prompts.ts) - Instruction used for the dsl to javascript conversion
- [app](../src/converter/app.ts) - The definition of RuleConverterApp that implements all steps needed for the conversion pipeline
- [rule-dao.examples](../src/converter/rule-dao.examples.ts) - The IRuleDao implementation that retrieves the rules from [rules.tsv](../assets/test/rules.tsv)
- [rule-dao.production](../src/converter/rule-dao.production.ts) - The IRuleDao implementation that retrieves the rules from GIBUS_RULES table
- [rule-converter.openai](../src/converter/rule-converter.openai.ts) - The IRuleConverterService that use OpenAI to convert the rules
- [conversion-result-validator](../src/converter/conversion-result-validator.ts) - The IConversionResultValidator implementation, that validates the syntax of the converted rules
- [conversion-result-dao.file](../src/converter/convertion-result-dao.file.ts) - The IConversionResultDao that save the rule converted in a file


![Image](converter_diagram.png)

