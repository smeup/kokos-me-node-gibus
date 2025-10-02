import {
  ExecutionContext,
  Fun,
  funToString,
  KokosService,
  SmeupDataColumn,
  SmeupDataRow,
  SmeupDataStructureWriter,
} from "@sme.up/kokos-sdk-node";
import { ExecuteRulePayload, Rule } from "../types/general.js";
import { RULE_MAPPING } from "../types/rule.js";

const RULE: KokosService = {
  methods: {
    "EXE.RUL": executeRule,
  },
};

/**
 * F(EXB;RULE;EXE.RUL) 1(;;[NOME_REGOLA]) INPUT([JSON_VARIABLES])
 * [JSON_VARIABLES] = { "variables": { "V00001": "VAL01", "V00002": "VAL02", "V00003": "VAL03", "V00004": "VAL04" } }
 */
async function executeRule(
  fun: Fun,
  _context: ExecutionContext,
  writer: SmeupDataStructureWriter
) {
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
      // call rule
      const outputVariables = await rule(
        jsonInput.variables ? jsonInput.variables : {}, true//le regole che arrivano da smeup sono sempre finalizzate...
      );
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
    throw new Error("Rule not defined");
  }
}

/**
 * Get rule.
 * If an environment variable is set to "development" or "test", the rule is always loaded from the local filesystem.
 * Otherwise, the rule is loaded from the compiled code, and served from the RULE_MAPPING or from the ./rules folder.
 * @param name The name of the rule.
 * @returns The rule.
 */
async function getRule(name: string): Promise<Rule> {
  if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {

    var module: any = '';
    let fileName: string;

    fileName = `../rules/${name}.ts`;

    try {
      module = await import(fileName);
    } catch (error) {
      console.dir('unable to load: ' + fileName);
      console.dir(error);
    }
    
     

    //module = await import(fileName);


    return module[name] as Rule;

  } else {

    if (RULE_MAPPING[name]) {

      return RULE_MAPPING[name];
    } else {
      const module = await import(`../rules/${name}.js`);

      return module[name] as Rule;
    }
  }

}



export default RULE;
export { getRule, executeRule };
