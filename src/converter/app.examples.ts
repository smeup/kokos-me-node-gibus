import { RuleConverterApp } from "./app";
import { ConversionResultDaoFileSystem } from "./convertion-result-dao.file";
import { OpenAIRuleConverter } from "./rule-converter.openai";
import { RuleDaoExamples } from "./rule-dao.examples";
import { IConversionResultDao, IRuleConverterService, IRuleDao } from "./types";
import * as path from 'path';
import * as fs from 'fs';

const allow = (ruleId: string) => ["REG0003124", "REG0003127"].includes(ruleId);

const ruleDao: RuleDaoExamples = new RuleDaoExamples({ allow: allow });
fs.rmSync(ruleDao.logPath, { force: true });
fs.rmSync(ruleDao.errPath, { force: true });
const ruleConverterService: IRuleConverterService = new OpenAIRuleConverter();
const rootPath = path.resolve(".work", "rules");
if (!fs.existsSync(rootPath)) {
    fs.mkdirSync(rootPath);
}
const conversionResultDao: IConversionResultDao = new ConversionResultDaoFileSystem(rootPath);
const app = new RuleConverterApp(ruleDao, ruleConverterService, conversionResultDao);
app.convertRules();