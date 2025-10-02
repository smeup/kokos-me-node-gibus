import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";

export const REG0013998: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    let SPORGENZA = 0, RINFORZO_BQ = 0

    var pezzi, taglio;

    // SPEZZONE 3 RINFORZO BARRA QUADRA  
    var tmp = 0;
    var tmp1 = 0;

    if (SPORGENZA > 300) tmp1 = 1;

    if (RINFORZO_BQ > 1100) tmp = Math.floor(RINFORZO_BQ / 3) + 50;

    if (tmp > 0)
        pezzi = tmp1;
    else
        pezzi = 0;

    taglio = tmp;
    
    data['*CF'] = pezzi;
    data['*CON-A'] = '0000';

    return await functions.asyncFinalDataObj(data);
};
