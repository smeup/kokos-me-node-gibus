import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";

export const REG0013638: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CF'] = 0;
    if (data['§ATTACCO'] == '02') {
        data['*CF'] = 1;
        data['*CON-A'] = data.get('§VERN_1_COM')
    };

    return await functions.asyncFinalDataObj(data);
};
