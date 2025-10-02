import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { SETCOLSTR } from "./SETCOLSTR.js";

export const REG0013941: Rule = async (data) => {

  let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

  data = await functions.asyncInitDataObj(data, filterVariables, '');

  var pezzi, taglio;

  var tmp=0;
var tmp1=0;

let VOLANT, N_BRACCI;

if(VOLANT=='Yes')
pezzi=N_BRACCI;
else
pezzi=0;

  data['*CF'] = pezzi;
  data['*CON-A'] = await SETCOLSTR(data, true);
  data['*CON-B'] = taglio;

  return await functions.asyncFinalDataObj(data);
};
