import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";

export const REG0013920: Rule = async (data) => {

  let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

  data = await functions.asyncInitDataObj(data, filterVariables, '');
  
  var pezzi = 0;

  let N_BRACCI = 0;

  pezzi=N_BRACCI*2;

data['*CF'] = pezzi;

  return await functions.asyncFinalDataObj(data);
};
