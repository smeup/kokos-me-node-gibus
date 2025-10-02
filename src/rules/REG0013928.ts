import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";

export const REG0013928: Rule = async (data) => {

  let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

  data = await functions.asyncInitDataObj(data, filterVariables, '');

  var pezzi, taglio;

  let VOLANT, FRONTALE_VOLANT = 0;

  if(VOLANT=='Yes')
    pezzi=FRONTALE_VOLANT*8;   
    else
    pezzi=0;


  data['*CF'] = pezzi;

  return await functions.asyncFinalDataObj(data);
};
