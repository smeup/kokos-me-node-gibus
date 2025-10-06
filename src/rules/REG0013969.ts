import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";



export const REG0013969: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    //data['*CON-A'] = '0000';
    data['*CF'] = 4 + 2 * data['§NR_FRANGI'];
    //if(data['§TI_FRO_T01'] == '02') data['*CF'] -= 2; //frontale luce, levo 2 piastre

    return await functions.asyncFinalDataObj(data);
};
