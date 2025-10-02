import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";

//piastra alu 130875
export const REG0013726: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

 
    data['*CF'] = 2 + 2 * data ['§NR_FRANGI'];
    if (data['§TI_FRO_T01'] === '01') data['*CF'] += 2;//col frontale normale aggiungo 2
    data['*CON-A'] = '0000';

    return await functions.asyncFinalDataObj(data);
};
