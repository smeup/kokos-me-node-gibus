import { RuleConverterApp } from "./app";
import { ConversionResultDaoFileSystem } from "./convertion-result-dao.file";
import { OpenAIRuleConverter } from "./rule-converter.openai";
import { RuleDaoExamples } from "./rule-dao.examples";
import { IConversionResultDao, IRuleConverterService, IRuleDao } from "./types";
import * as path from 'path';
import * as fs from 'fs';

const defaultAllow = () => true;
const defaultRootPath = path.resolve("src", "rules");

/**
 * Represents an example usage of the RuleConverterApp class.
 * This class is used to convert rules from the asset/test/rules.tsv file.
 */
class RuleConverterAppExamples {

    private readonly app: RuleConverterApp;

    /**
     * Constructs a new instance of the AppExamples class.
     * 
     * @param allow - A function that determines whether a rule is allowed based on its ID. Defaults to always true.
     * @param rootPath - The destinaton root path where the converted rules will be saved. Defaults to src/rules.
     */
    constructor(allow: (ruleId: string) => boolean = defaultAllow, rootPath: string = defaultRootPath) {
        const ruleDao: RuleDaoExamples = new RuleDaoExamples({ allow: allow });
        fs.rmSync(ruleDao.logPath, { force: true });
        fs.rmSync(ruleDao.errPath, { force: true });
        const ruleConverterService: IRuleConverterService = new OpenAIRuleConverter();
        if (!fs.existsSync(rootPath)) {
            fs.mkdirSync(rootPath);
        }
        const conversionResultDao: IConversionResultDao = new ConversionResultDaoFileSystem(rootPath);
        this.app = new RuleConverterApp(ruleDao, ruleConverterService, conversionResultDao);
    }

    /**
     * Converts rules from the asset/test/rules.tsv file.
     */
    convertRules(): Promise<void> {
        return this.app.convertRules();
    }

}

export { RuleConverterAppExamples }