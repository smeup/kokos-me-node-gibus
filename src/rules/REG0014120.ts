import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";


//regola dell'imballo fatta in test, quasi sicuramente va cancellata
//dato che l'ambiente di produzione avrà la sua numerazione
export const REG0014120: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    //data['D§DISE'] = 'ABCD0400XXXXXXRSTUV';
   // data['*CON-A'] = 'ABCD';
    //data['*CON-B'] = 400;
    data['*CON-C'] = 'JKLFM';
    
    return await functions.asyncFinalDataObj(data) ;
};
