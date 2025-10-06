import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";

export const REG0013655: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CF'] = data['§NR_FRANGI'];
    if (data['§TI_FRO_T01'] == '02') data['*CF'] = data['§NR_FRANGI'] + 1 ;

    return await functions.asyncFinalDataObj(data);
};
