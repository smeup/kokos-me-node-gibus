import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { getColStr } from "./getColStr";

export const REG0013991: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

   let DISTANZIATORE_18 = 0;

    //RULLO DIVISO IN DUE - CORTO -
  
    var pezzi = 0;

    pezzi=DISTANZIATORE_18;  

    data['*CF'] = pezzi;
    data['*CON-A'] = await getColStr(data);

    return await functions.asyncFinalDataObj(data);
};
