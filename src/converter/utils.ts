import * as fs from "fs";
import * as path from "path";
import { RuleConverterAppExamples } from "./app.examples";
import { Rule, ExecuteRulePayload, RuleVariableMap } from "../types/general";
import { getRule } from "../services/RULE";
import { Fun } from "@sme.up/kokos-sdk-node";
import { DbAccessConfig, ITypeProvider } from "./types";
import { TypeProviderConst } from "./type-provider.const";
import * as consts from "./consts";

let typeProvider: ITypeProvider | null = new TypeProviderConst();

/**
 * Removes unnecessary whitespace characters and js comments from a given code string.
 * @param code The code string to remove whitespace from.
 * @returns The code string with whitespace characters replaced by a single space.
 */
function removeUnnecessaryChars(code: string) {
  code = removeJavascriptLineComment(code);
  return code.replace(/\s+/g, " ").trim();
}

function removeJavascriptLineComment(jsCode: string) {
  return jsCode.replace(/\s*\/\/.*/g, "");
}

function printTargetVariable() {
  const filePath = path.resolve("assets", "test", "rules.tsv");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const lines = fileContent.split("\n");

  let vars: string[] = [];
  for (const line of lines) {
    if (line.includes("*SET")) {
      const targetMatch = line.match(/.+\*SET\s+(.+)=.+/);
      if (targetMatch) {
        const target = targetMatch[1].trim();
        if (!vars.includes(target)) {
          vars.push(target);
        }
      }
    }
  }
  console.log(vars);
}

/**
 * Convert a rule defined in the assets/test/rules.tsv and return the converted rule.
 * @param ruleId The ID of the rule to convert.
 */
async function convertExampleRule(ruleId: string): Promise<Rule> {
  const allow = (myRuleId: string) => myRuleId === ruleId;
  const app = new RuleConverterAppExamples({ allow: allow });
  await app.convertRules();
  const rule = getRule(ruleId);
  return rule;
}

/**
 * Run a function if the OPENAI_API_KEY environment variable is set.
 * @param func The function to run.
 * @param onOpenAIKeyNotSet The function to run if the OPENAI_API_KEY environment variable is not set.
 * @returns The result of the function else nothing.
 */
async function runFunctionIfOpenAIKeySet(
  func: () => any,
  onOpenAIKeyNotSet: () => void = () => {
    console.warn("OPENAI_API_KEY environment variable is not set.");
  }
): Promise<any> {
  const openAIKey = process.env.OPENAI_API_KEY;
  if (!openAIKey) {
    onOpenAIKeyNotSet();
  } else {
    return func();
  }
}

/**
 * Checks if the OPENAI_API_KEY environment variable is set.
 * @returns {boolean} True if the OPENAI_API_KEY is set, false otherwise.
 */
function isOpenAIKeySet(): boolean {
  return process.env.OPENAI_API_KEY !== undefined;
}

/**
 * Retrieves the database access configuration.
 * The configuration is retrieved from the consts module.
 * @see {@link consts}
 *
 * @returns The database access configuration object or null if the configuration is not set.
 */
function getDbAccessConfig(): DbAccessConfig | null {
  if (
    consts.host !== "setme" &&
    consts.user !== "setme" &&
    consts.password !== "setme"
  ) {
    return {
      host: consts.host,
      user: consts.user,
      password: consts.password,
    };
  } else {
    return null;
  }
}

/**
 * Load variables from a function payload.
 * @param funPayload The function payload.
 * @param onlyVariablesSet This function is called with the variables that are set, it can be used to speed up the tests.
 * @returns The variables.
 */
function loadVariables(
  funPayload: string,
  onlyVariablesSet: (onlyVariablesSet: RuleVariableMap) => void = () => {}
): RuleVariableMap {
  if (funPayload === "") {
    return {};
  }
  const fun: Fun = JSON.parse(funPayload).fun;
  let variables: RuleVariableMap = {};
  if (fun.INPUT && fun.INPUT !== "") {
    const jsonInput = JSON.parse(
      fun.INPUT ? fun.INPUT : ""
    ) as ExecuteRulePayload;
    variables = jsonInput.variables ? jsonInput.variables : {};
  }
  const filteredVariables: RuleVariableMap = {};
  Object.entries(variables).forEach(([key, value]) => {
    if (value !== "" && value !== 0) {
      filteredVariables[key] = value;
    }
  });
  onlyVariablesSet(filteredVariables);
  return variables;
}

/**
 * Sets the type provider for the converter.
 * Default is TypeProviderConst.
 *
 * @param typeProvider - The type provider to be set.
 * @see {@link TypeProviderConst}
 */
function setTypeProvider(newTypeProvider: ITypeProvider | null) {
  typeProvider = newTypeProvider;
}

/***
 * Check if a variable is a numeric type.
 * @param name The name of the variable.
 * @returns True if the variable is a numeric type, false otherwise.
 */
function isNumericType(name: string): boolean {
  if (typeProvider === null) {
    throw new Error("Type provider not set");
  }
  return typeProvider.isNumericType(name);
}

export {
  removeUnnecessaryChars,
  convertExampleRule,
  runFunctionIfOpenAIKeySet,
  isOpenAIKeySet,
  loadVariables,
  isNumericType,
  setTypeProvider,
  getDbAccessConfig,
};
