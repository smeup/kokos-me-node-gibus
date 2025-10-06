import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";

export const REG0013990: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    let TAGLIO_SFALSATO = 0, TAGLIO_RULLO = 0, RULLO_85 = 0;

    //RULLO DIVISO IN DUE - CORTO -
    var tmp = 0;
    var tmp1 = 0;
    var pezzi = 0, taglio = 0;

    if (TAGLIO_SFALSATO > 0)
        tmp = 1;
    else
        tmp = 0;

    if (TAGLIO_SFALSATO > 0)
        tmp1 = Math.ceil(TAGLIO_RULLO / 2) + 35;
    else
        tmp1 = 0;

    pezzi = RULLO_85 * tmp;
    taglio = TAGLIO_RULLO - tmp1;

    data['*CF'] = pezzi;
    data['*CON-A'] = '0000';
    data['*CON-B'] = taglio;

    return await functions.asyncFinalDataObj(data);
};
