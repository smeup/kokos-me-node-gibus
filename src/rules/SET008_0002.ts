import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";


//regola dell'imballo fatta in test, quasi sicuramente va cancellata
//dato che l'ambiente di produzione avrà la sua numerazione
export const SET008_0002: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    //data['D§DISE'] = 'ABCD0400XXXXXXRSTUV';
    //data['*CON-A'] = '    '; non serve, format : empty
    //data['*CON-B'] = '     ';
    data['XCFAL'] = '0002';
    data['*CON-C'] = data['D§PAS2'];
    
    return await functions.asyncFinalDataObj(data) ;
};
