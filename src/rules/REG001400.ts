import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { SETCOLPLASTR } from "./SETCOLPLASTR";

export const REG0014001: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    let SUPPORTI = 0;


    var pezzi = 0;
    
    pezzi=SUPPORTI;

    data['*CF'] = pezzi;
    
    await SETCOLPLASTR(data, true);

    return await functions.asyncFinalDataObj(data);
};
