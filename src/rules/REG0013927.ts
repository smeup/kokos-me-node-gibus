import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";

export const REG0013927: Rule = async (data) => {

  let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

  data = await functions.asyncInitDataObj(data, filterVariables, '');

  var pezzi;
  
    let VOLANT, FRONTALE_VOLANT = 0;

  if(VOLANT=='Yes')
    pezzi=FRONTALE_VOLANT*4;     
    else
    pezzi=0;
      

  data['*CF'] = pezzi;

  return await functions.asyncFinalDataObj(data);
};
