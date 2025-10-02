import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { SETCOLSTR } from "./SETCOLSTR.js";

export const REG0013939: Rule = async (data) => {

  let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

  data = await functions.asyncInitDataObj(data, filterVariables, '');

  var pezzi, taglio;

  var tmp=0;
var tmp1=0;

let VOLANT, FRONTALE_VOLANT = 0, LARGHEZZA = 0, TAGLIO_RULLO = 0;

if(VOLANT=='Yes') tmp=FRONTALE_VOLANT;
if(540>=LARGHEZZA) tmp1=3;
if(LARGHEZZA>540) tmp1=2.5;

pezzi=tmp;
taglio=TAGLIO_RULLO+tmp1;

  data['*CF'] = pezzi;
  data['*CON-A'] = await SETCOLSTR(data, true);
  data['*CON-B'] = taglio;

  return await functions.asyncFinalDataObj(data);
};
