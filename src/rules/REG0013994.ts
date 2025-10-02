import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { getColStr } from "./getColStr.js";

export const REG0013994: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

   let TENDA_DIVISA, LIMITE_LARGHEZZA = 0;

    //RULLO DIVISO IN DUE - CORTO -
  
    var pezzi = 0;

    if((TENDA_DIVISA=='Yes')||(LIMITE_LARGHEZZA==2))
      pezzi=1;
      else
      pezzi=0;  

    data['*CF'] = pezzi;
    data['*CON-A'] = await getColStr(data);

    return await functions.asyncFinalDataObj(data);
};
