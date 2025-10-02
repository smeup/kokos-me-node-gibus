import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";

export const REG0013995: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    let TENDA_DIVISA, N_RULLO, RULLO_78 = 0;

    var tmp=0, pezzi;

    if((TENDA_DIVISA=='Yes')||(N_RULLO==2))
    tmp=1;
    else
    tmp=0;
     
    pezzi=tmp*RULLO_78;    

    data['*CF'] = pezzi;
    data['*CON-A'] = '0080';

    return await functions.asyncFinalDataObj(data);
};
