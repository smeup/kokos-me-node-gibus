import { RuleConverterApp } from "./app";
import { ConversionResultDaoFileSystem } from "./convertion-result-dao.file";
import { OpenAIRuleConverter } from "./rule-converter.openai";
import { RuleDaoExamples } from "./rule-dao.examples";
import { SyntaxErrorValidator } from "./conversion-result-validator";
import { IConversionResultDao, IRuleConverterService, IRuleDao } from "./types";
import * as path from 'path';
import * as fs from 'fs';

const defaultAllow = () => true;
const defaultRootPath = path.resolve("src", "rules");

/**
 * Represents an example usage of the RuleConverterApp class.
 * Default behavior is converting rules from the asset/test/rules.tsv file and save them to the src/rules folder.
 * If you want to convert rules from a different source or save them to a different destination, you can use this class as a starting point.
 * Remember to set OPENAI_API_KEY environment variable before running this app.
 */
class RuleConverterAppExamples {

    private readonly app: RuleConverterApp;
    private readonly ruleDao: IRuleDao;

    /**
     * Constructs a new instance of the AppExamples class.
     * During construction, the following actions are performed:
     * - The log and error files are deleted based on deleteLogFiles params.
     * - The rule converter service is initialized.
     * - The destination root path is created if it does not exist.
     * Log and error files are located in the .work folder.
     * @param allow - A function that determines whether a rule is allowed based on its ID. Defaults to always true.
     * @param rootPath - The destinaton root path where the converted rules will be saved. Defaults to src/rules.
     * @param deleteLogFiles - Indicates whether the log and error files should be deleted. Defaults to true. 
     * @param rulesFileName - The name of the file containing the rules to be converted. Defaults to rules.tsv. The
     * file is expected to be located in the assets/test folder.
     * If you want to avoid to reconvert already converted rules, set this parameter to false.
     * @see convertRules
     * @see RuleDaoExamples
     * @see OpenAIRuleConverter
     */
    constructor({ allow = defaultAllow, rootPath = defaultRootPath, deleteLogFiles = true, rulesFileName = "rules.tsv" }: { allow?: (ruleId: string) => boolean, rootPath?: string, deleteLogFiles?: boolean, rulesFileName?: string } = {}) {
        const ruleDao: RuleDaoExamples = new RuleDaoExamples({ allow: allow, rulesFileName: rulesFileName });
        this.ruleDao = ruleDao;
        if (deleteLogFiles) {
            fs.rmSync(ruleDao.logPath, { force: true });
            fs.rmSync(ruleDao.errPath, { force: true });
        }
        const ruleConverterService: IRuleConverterService = new OpenAIRuleConverter();
        if (!fs.existsSync(rootPath)) {
            fs.mkdirSync(rootPath);
        }
        const conversionResultValidator: SyntaxErrorValidator = new SyntaxErrorValidator();
        const conversionResultDao: IConversionResultDao = new ConversionResultDaoFileSystem(rootPath);
        this.app = new RuleConverterApp(ruleDao, ruleConverterService, conversionResultValidator, conversionResultDao);
    }

    /**
     * Converts rules from the rulesFileName file and saves them to the rootPath folder.
     * @see RuleConverterApp
     */
    async convertRules(): Promise<void> {
        try {
            await this.app.convertRules();
        }
        finally {
            this.ruleDao.close();
        }
    }

}

export { RuleConverterAppExamples }