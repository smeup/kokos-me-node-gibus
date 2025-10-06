import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";

export const REG0013921: Rule = async (data) => {

  let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

  data = await functions.asyncInitDataObj(data, filterVariables, '');
  
  var tmp = 0, pezzi = 0;

  let TETTUCCIO, TIPO_TETTUCCIO, LARGHEZZA = 0, VOLANT;

  if(TETTUCCIO=='Yes') tmp=1;
  
  if(TIPO_TETTUCCIO=='Plate'&& LARGHEZZA>590 && VOLANT=='Yes')
  pezzi=tmp;
  else
  pezzi=0;
           
  data['*CF'] = pezzi;

  return await functions.asyncFinalDataObj(data);
};
