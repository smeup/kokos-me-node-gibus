import {
  ExecutionContext,
  Fun,
  KokosService,
  SmeupDataColumn,
  SmeupDataRow,
  SmeupDataStructureWriter,
} from "@sme.up/kokos-sdk-node";
import { ExecuteRulePayload, Rule, RuleVariableMap } from "../types/general.js";
import { RULE_MAPPING } from "../types/rule.js";
import { AsyncLocalStorage } from 'async_hooks'
import { Variables } from "../converter/variables.js";
import { afterRuleApplied, beforeRuleApplied, defaultRuleImplementation } from "./RULES_callback.js";

const RULE: KokosService = {
  methods: {
    "EXE.RUL": executeRule,
  },
};

const asyncLocalStorage = new AsyncLocalStorage<Map<string, any>>();

function setContext(key: string, value: any) {
  const store = asyncLocalStorage.getStore();
  if (store) {
    store.set(key, value);
  }
}

function getContext(key: string): any {
  const store = asyncLocalStorage.getStore();
  return store ? store.get(key) : undefined;
}

function setVars(vars: Variables) {
  setContext("_vars", vars);
}

function getVars(): Variables {
  return getContext("_vars");
}

function setRuleNotFound(ruleNotFound: boolean) {
  setContext("_ruleNotFound", ruleNotFound);
}

function getRuleNotFound(): boolean {
  return getContext("_ruleNotFound") || false;
}


/**
 * F(EXB;RULE;EXE.RUL) 1(;;[NOME_REGOLA]) INPUT([JSON_VARIABLES])
 * [JSON_VARIABLES] = { "variables": { "V00001": "VAL01", "V00002": "VAL02", "V00003": "VAL03", "V00004": "VAL04" } }
 */
async function executeRule(
  fun: Fun,
  _context: ExecutionContext,
  writer: SmeupDataStructureWriter
) {
  const store = new Map<string, any>();
  asyncLocalStorage.run(store, async () => {
    // get rule name
    const ruleName = fun.obj1?.k;
    if (ruleName && ruleName != "") {
      // check rule existence
      const rule = await getRule(ruleName);
      if (rule != null) {
        // get and parse variables from fun input
        const jsonInput = JSON.parse(
          fun.INPUT ? fun.INPUT : ""
        ) as ExecuteRulePayload;
        // get input variables
        const input = jsonInput.variables ? jsonInput.variables : {};
        // process rule
        const outputVariables = processRule(ruleName, rule, input);
        const columscolumns: SmeupDataColumn[] = [];
        columscolumns.push({
          name: "NAME",
          title: "Variable Name",
          visible: true,
        });
        columscolumns.push({
          name: "VALUE",
          title: "Variable Value",
          visible: true,
        });
        for (let variableName in outputVariables) {
          const row: SmeupDataRow = {
            cells: {
              "NAME": {
                value: variableName,
              },
              "VALUE": {
                value: `${outputVariables[variableName]}`,
              },
            },
          };
          writer.writeDataRow(row);
        }
      } else {
        throw new Error("Non-existent or unregistered rule");
      }
    } else {
      throw new Error("Empty ruleName is not allowed");
    }
  });
}

/**
 * Process a rule.
 * Before apply the rule and after the afterRuleApplied function is called.
 * @param ruleName The name of the rule.
 * @param rule The rule to process.
 * @param input The input variables.
 * @returns The output variables.
 */
function processRule(ruleName: string, rule: Rule, input: RuleVariableMap): RuleVariableMap {
  beforeRuleApplied(ruleName, input);
  const output = rule(input);
  afterRuleApplied(ruleName, getVars());
  return getVars().output;
}


/**
 * Get rule.
 * If an environment variable is set to "development" or "test", the rule is always loaded from the local filesystem.
 * Otherwise, the rule is loaded from the compiled code, and served from the RULE_MAPPING or from the ./rules folder.
 * @param name The name of the rule.
 * @returns The rule.
 */
async function getRule(name: string): Promise<Rule> {
  try {
    if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
      const module = await import(`../rules/${name}.ts`);
      return module[name] as Rule;
    } else {
      if (RULE_MAPPING[name]) {
        return RULE_MAPPING[name];
      } else {
        const module = await import(`../rules/${name}.js`);
        return module[name] as Rule;
      }
    }
  } catch (error) {
    console.info(`Rule ${name} not found, return empty rule implementation`);
    setRuleNotFound(true);
    return (input) => {
      const vars = new Variables(input);
      defaultRuleImplementation(name, vars);
      return vars.output;
    };
  }
}



export default RULE;
export { getRule, executeRule, setVars, processRule, asyncLocalStorage };
