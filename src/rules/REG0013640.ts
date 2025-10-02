import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { dimP90 } from "./libGibus/dimP90.js";

export const REG0013640: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    let guida = dimP90('LANI', data).tagli.guida;

    data['*CF'] = guida / 100;
    data['*CON-A'] = 'P072';
    if(data.get('§VR_ABB') === '01')data['*CON-A'] = 'P055';
    else if(data.get('§VR_ABB') === '02')data['*CON-A'] = 'P055';

    return await functions.asyncFinalDataObj(data);
};
