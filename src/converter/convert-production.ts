import { RuleConverterApp } from "./app";
import { SyntaxErrorValidator } from "./conversion-result-validator";
import { ConversionResultDaoFileSystem } from "./convertion-result-dao.file";
import { OpenAIRuleConverter } from "./rule-converter.openai";
import { RuleDaoProduction } from "./rule-dao.production";
import * as consts from "./consts" ;

const ruleDao = new RuleDaoProduction(consts.host, consts.user, consts.password);
const ruleConverterService = new OpenAIRuleConverter();
const conversionResultValidator = new SyntaxErrorValidator();
const conversionResultDao = new ConversionResultDaoFileSystem("src/rules");

const app = new RuleConverterApp(ruleDao, ruleConverterService, conversionResultValidator, conversionResultDao);
await app.convertRules().finally(() => ruleDao.close());