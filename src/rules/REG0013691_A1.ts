import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { getColPlaStr } from "./getColPlaStr";
import { getColStr } from "./getColStr";

export const REG0013691_A1: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CF'] = 0;
    if(data['§OPT_GAM_A1'] == '1')data['*CF'] = 1;

    let vrStr = await getColStr(data);
    data['*CON-A'] = await getColPlaStr(vrStr, data);
    
    return await functions.asyncFinalDataObj(data);
};
