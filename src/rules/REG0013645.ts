import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";

export const REG0013645: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CF'] = 0;
    if (data['§ATTACCO'] == '01') {
        data['*CF'] = 1;
        data['*CON-A'] = data.get('§VERN_1_COM');
        data['*CON-B'] = 16;
    };

    return await functions.asyncFinalDataObj(data);
};
