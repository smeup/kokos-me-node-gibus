import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { getColStr } from "./getColStr.js";



export const REG0013983: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');
    var pezzi;
    var tmp = 0;
    var tmp1 = 0;

    let SPORGENZA, LARGHEZZA = 0;

    if (SPORGENZA == '200' || SPORGENZA == '250')
        tmp = 1;
    else
        tmp = 0;

    if (LARGHEZZA > 540) tmp1 = 1;
    if (LARGHEZZA > 710) tmp1 = 2;
    if (LARGHEZZA > 1070) tmp1 = 4;

    pezzi = tmp * tmp1;

    data['*CF'] = pezzi;
    data['*CON-A'] = await getColStr(data);

    return await functions.asyncFinalDataObj(data);
};
