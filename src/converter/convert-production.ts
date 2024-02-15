import { RuleConverterApp } from "./app";
import { SyntaxErrorValidator } from "./conversion-result-validator";
import { ConversionResultDaoFileSystem } from "./convertion-result-dao.file";
import { OpenAIRuleConverter } from "./rule-converter.openai";
import { RuleDaoProduction } from "./rule-dao.production";
import * as consts from "./consts";
import * as fs from 'fs';

function getInClauseForAssiemi(assiemi: string[]): string {
    let where = '';
    if (assiemi.length > 0) {
        where = `ASSI IN (${assiemi.map(assieme => `'${assieme}'`).join(',')})`;
    }
    return where;
}

function getInClauseForRules(rules: string[]): string {
    let where = '';
    if (rules.length > 0) {
        where = `COMP IN (${rules.map(rule => `'${rule}'`).join(',')})`;
    }
    return where;
}

const options = process.argv.filter(arg => arg.startsWith('--')).map(arg => arg.substring(2));
if (!options.includes('all') && !options.includes('assiemi') && !options.includes('rules') && !options.includes('rulesPath') ) {
    console.log(
        'The --all --rules or --rulesPath or --assiemi options are required:\n' +
        'Usage:\n' +
        '--all to convert all unconverted rules\n' +
        '--rules RULE1,RULE2 to convert only the specified rules RULE1 and RULE2\n' +
        '--rulesPath a path of file containing the rules to convert, one rule per lineì\n' +
        '--assiemi ASSI1,ASSI2 to convert only the specified assiemi ASSI1 and ASSI2\n' +
        '--force to convert all rules, even if they are already converted\n'
    );
    process.exit(1);
}

let filter = "";
if (options.includes('assiemi')) {
    const assiemi: string = process.argv[process.argv.indexOf('--assiemi') + 1];
    if (!assiemi) {
        console.error('The --assiemi option requires at least one assiemi');
        process.exit(1);
    } else {
        filter = getInClauseForAssiemi(assiemi.split(','));
    }
} else if (options.includes('rules')) {
    const rules: string = process.argv[process.argv.indexOf('--rules') + 1];
    if (!rules) {
        console.error('The --rules option requires at least one rule');
        process.exit(1);
    } else {
        filter = getInClauseForRules(rules.split(','));
    }
} else if (options.includes('rulesPath')) {
    const rulesPath: string = process.argv[process.argv.indexOf('--rulesPath') + 1];
    if (!rulesPath) {
        console.error('The --rulesPath option requires a file path containing the rules to convert, one rule per line');
        process.exit(1);
    } else {
        const rulesPath: string = process.argv[process.argv.indexOf('--rulesPath') + 1];
        if (!rulesPath) {
            console.error('The --rulesPath option requires a file path containing the rules to convert, one rule per line');
            process.exit(1);
        } else {
            const fileContent: string = fs.readFileSync(rulesPath, 'utf-8');
            filter = getInClauseForRules(fileContent.split(/\r?\n/));
        }
    }
}
let forceConversion = false;
if (options.includes('force')) {
    forceConversion = true;
}

const ruleDao = new RuleDaoProduction(consts.host, consts.user, consts.password, filter, forceConversion);
const ruleConverterService = new OpenAIRuleConverter();
const conversionResultValidator = new SyntaxErrorValidator();
const conversionResultDao = new ConversionResultDaoFileSystem("src/rules");

const app = new RuleConverterApp(ruleDao, ruleConverterService, conversionResultValidator, conversionResultDao);

try {
    await app.convertRules();
    process.exit();
} catch (error: any) {
    console.error(error.stack);
    process.exit(2);
} finally {
    ruleDao.close();
}