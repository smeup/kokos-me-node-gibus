import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { dimP90 } from "./libGibus/dimP90.js";

//regola dell'imballo fatta in test, quasi sicuramente va cancellata
//dato che l'ambiente di produzione avrà la sua numerazione
export const REG0013736: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    let larg = dimP90('LANI', data).interassi.larghezza;
    larg = data['§LARG_TELO'];

    data['*CF'] = data['§IN_NO_UNG_NR'] * larg / 100;
    data['*CON-A'] =  'P055';
    //await SETCOLPLAFRA(data, false);

    return await functions.asyncFinalDataObj(data);
};
