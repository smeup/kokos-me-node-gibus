import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";


//regola dell'imballo fatta in test, quasi sicuramente va cancellata
//dato che l'ambiente di produzione avrà la sua numerazione
export const REG0013715: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    let larg = data['§LARG']

    data['*CF'] = 0;
    if(data['§TI_JOL_T01'] ===	'01') data['*CF'] = Math.ceil(larg / 100);

    return await functions.asyncFinalDataObj(data);
};
