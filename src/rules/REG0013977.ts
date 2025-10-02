import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { SETCOLASTA } from "./SETCOLASTA.js";



export const REG0013977: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');
    var pezzi, taglio;

    let ARGANELLO = 0, ALTEZZA_ASTA = '';

    pezzi=ARGANELLO;
    taglio=parseFloat(ALTEZZA_ASTA); 
            
    data['*CF'] = pezzi;
    data['*CON-A'] = await SETCOLASTA(data, true);

    return await functions.asyncFinalDataObj(data);
};
