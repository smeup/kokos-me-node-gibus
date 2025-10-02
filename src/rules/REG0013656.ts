import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { dimP90 } from "./libGibus/dimP90.js";

export const REG0013656: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CON-A'] = data.get('§VERN_1_COM');
    
    let guida = dimP90('LANI', data).tagli.guida;

    data['*CON-B'] = guida;

    return await functions.asyncFinalDataObj(data);
};
