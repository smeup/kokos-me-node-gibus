import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { getColStr } from "./getColStr.js";


//regola dell'imballo fatta in test, quasi sicuramente va cancellata
//dato che l'ambiente di produzione avrà la sua numerazione
export const REG0013697_A1: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CON-A'] = await getColStr(data);

    let base = data['§H_CALC'];
    let suffix = 'ANT1';
    let difference = data['§L_DI_MON_' + suffix];
    if (data['§TI_DIS_MON_' + suffix] == 'D') base += difference;
    if (data['§TI_DIS_MON_' + suffix] == 'M') base -= difference;
    data['*CON-B'] = base - 0.8;

    return await functions.asyncFinalDataObj(data);
};
