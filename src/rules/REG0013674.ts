import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { getColStr } from "./getColStr";
import { dimP90 } from "./libGibus/dimP90";

//regola dell'imballo fatta in test, quasi sicuramente va cancellata
//dato che l'ambiente di produzione avrà la sua numerazione
export const REG0013674: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CON-A'] = await getColStr(data);
    let larg = dimP90('LANI', data).interassi.larghezza;
    data['*CON-B'] = larg - 6.5 - 6.5;
    
    return await functions.asyncFinalDataObj(data);
};
