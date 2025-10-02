import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { dimP90 } from "./libGibus/dimP90.js";

//regola dell'imballo fatta in test, quasi sicuramente va cancellata
//dato che l'ambiente di produzione avrà la sua numerazione
export const REG0013671: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    let dimObj = dimP90('LANI', data);
    let larg = dimObj.interassi.larghezza;
    
    data['*CON-B'] = larg - 6.75 - 6.75;
    
    return await functions.asyncFinalDataObj(data);
};
