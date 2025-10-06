import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";

export const REG0013997: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    let SPORGENZA = 0, RINFORZO_BQ = 0

    var pezzi, taglio;
    // SPEZZONE 2 RINFORZO BARRA QUADRA  
    var tmp = 0;
    var tmp1 = 0;

    if (SPORGENZA > 300) tmp1 = 1;

    if (RINFORZO_BQ > 600) tmp = Math.floor(RINFORZO_BQ / 2) - 50;
    if (RINFORZO_BQ > 1100) tmp = Math.floor(RINFORZO_BQ / 3) - 100;

    if (tmp > 0)
        pezzi = tmp1;
    else
        pezzi = 0;

    taglio = tmp;

    data['*CF'] = pezzi;
    data['*CON-A'] = '0000';

    return await functions.asyncFinalDataObj(data);
};
