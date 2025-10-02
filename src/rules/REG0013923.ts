import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { SETCOLSTR } from "./SETCOLSTR.js";

export const REG0013923: Rule = async (data) => {

  let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

  data = await functions.asyncInitDataObj(data, filterVariables, '');
  
var pezzi, taglio;

let TAGLIO_RULLO_VOLANT = 0, VOLANT;

  if(TAGLIO_RULLO_VOLANT>590 && VOLANT=='Yes')
    pezzi=1;
    else
    pezzi=0;
    
    taglio=40;

data['*CON-A'] = await SETCOLSTR(data, true);

    data['*CF'] = pezzi;
    data['*CON-B'] = taglio;

  return await functions.asyncFinalDataObj(data);
};
