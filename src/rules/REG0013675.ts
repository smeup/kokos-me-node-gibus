import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";


//regola dell'imballo fatta in test, quasi sicuramente va cancellata
//dato che l'ambiente di produzione avrà la sua numerazione
export const REG0013675: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CF'] = 0;
    if(data['§TYP_A1'] == '1')data['*CF'] = 1;
    
    return await functions.asyncFinalDataObj(data);
};
