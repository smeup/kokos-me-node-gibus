import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";



export const REG0013986: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    let TENDA_DIVISA, N_RULLO, RULLO_85 = 0;
    var pezzi;
    var taglio;

    var tmp = 0;
    var tmp1 = 0;

    if ((TENDA_DIVISA == 'Yes') || (N_RULLO == 2))
        tmp = 1;
    else
        tmp = 0;

    pezzi = tmp * RULLO_85;
    taglio = 50;

    pezzi = tmp * tmp1;
    data['*CF'] = pezzi;
    data['*CON-A'] = '0080';
    data['*CON-B'] = taglio;

    return await functions.asyncFinalDataObj(data);
};
