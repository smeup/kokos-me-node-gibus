import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { getColPlaStr } from "./getColPlaStr.js";
import { getColStr } from "./getColStr.js";

export const REG0013691_A1: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CF'] = 0;
    if(data['§OPT_GAM_A1'] == '1')data['*CF'] = 1;

    let vrStr = await getColStr(data);
    data['*CON-A'] = await getColPlaStr(vrStr, data);
    
    return await functions.asyncFinalDataObj(data);
};
