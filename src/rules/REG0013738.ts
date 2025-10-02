import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";



export const REG0013738: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CF'] = 4 + 2 * data['§NR_FRANGI'];
    if(data['§TI_FRO_T01'] == '02') data['*CF'] -= 2; //frontale luce, levo 2 piastre

    return await functions.asyncFinalDataObj(data);
};
