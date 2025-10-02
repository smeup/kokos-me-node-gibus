import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { SETCOLPLASTR } from "./SETCOLPLASTR.js";

export const REG0014001: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    let SUPPORTI = 0;


    var pezzi = 0;
    
    pezzi=SUPPORTI;

    data['*CF'] = pezzi;
    
    await SETCOLPLASTR(data, true);

    return await functions.asyncFinalDataObj(data);
};
