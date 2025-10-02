import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";

export const REG0013964: Rule = async (data) => {

  let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

  data = await functions.asyncInitDataObj(data, filterVariables, '');

let  TETTUCCIO, TIPO_TETTUCCIO, VOLANT;

  var pezzi;

  if(TETTUCCIO=='Yes'&& TIPO_TETTUCCIO=='Plate' && VOLANT=='Yes')
    pezzi=1;
    else
    pezzi=0;
      
      

  data['*CF'] = pezzi;

  return await functions.asyncFinalDataObj(data);
};
