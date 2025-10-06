import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { SETCOLPLASTR } from "./SETCOLPLASTR";

export const REG0014026: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');
    
    await SETCOLPLASTR(data, false);

    if(data['*CON-A'] == 'P073') data['*CON-A'] = 'P072';
    //https://gibus.atlassian.net/browse/CON-1044
    //110210 è l'unico che usa questa regola
    if(data['*CON-A'] == 'P069') data['*CON-A'] = 'P072';


    return await functions.asyncFinalDataObj(data);
};
