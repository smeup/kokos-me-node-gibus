import {
  ExecutionContext,
  Fun,
  KokosService,
  SmeupDataStructureWriter,
} from "@sme.up/kokos-sdk-node";
import { ExecuteRulePayload } from "../types/general.js";
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
    if (RULE_MAPPING[ruleName]) {
      // get and parse variables from fun input
      const jsonInput = JSON.parse(
        fun.INPUT ? fun.INPUT : ""
      ) as ExecuteRulePayload;
      // call rule
      const outputVariables = RULE_MAPPING[ruleName](
        jsonInput.variables ? jsonInput.variables : {}
      );
      // return smeup table
      writer.writeColumn({
        code: "NAME",
        text: "Variable Name",
      });
      writer.writeColumn({
        code: "VALUE",
        text: "Variable Value",
      });
      for (let variableName in outputVariables) {
        writer.writeRow({
          fields: {
            NAME: {
              name: "NAME",
              smeupObject: {
                codice: variableName,
              },
            },
            VALUE: {
              name: "VALUE",
              smeupObject: {
                codice: outputVariables[variableName],
              },
            },
          },
        });
      }
    } else {
      throw new Error("Non-existent or unregistered rule");
    }
  } else {
    throw new Error("Rule not defined");
  }
}

export default RULE;
