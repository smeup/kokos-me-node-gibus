import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { SETCOLSTR } from "./SETCOLSTR.js";



export const REG0013976: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');
    var pezzi;

    let SPORGENZA = 0, N_BRACCI;

    if (SPORGENZA >= 300)
        pezzi = N_BRACCI;
    else
        pezzi = 0;

    data['*CF'] = pezzi;
    data['*CON-A'] = await SETCOLSTR(data, true);

    return await functions.asyncFinalDataObj(data);
};
