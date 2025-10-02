import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";



export const REG0013974: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    var pezzi;
    let TENDA_DIVISA, LIMITE_LARGHEZZA;

    if ((TENDA_DIVISA == 'Yes') || (LIMITE_LARGHEZZA == 2))
        pezzi = 1;
    else
        pezzi = 0;

    data['*CF'] = pezzi;
    data['*CON-A'] = '0000';


    return await functions.asyncFinalDataObj(data);
};
