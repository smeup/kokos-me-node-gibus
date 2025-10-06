import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";



export const REG0013975: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');
    var pezzi, taglio;

    let TAGLIO_RULLO_VOLANT = 0, VOLANT;

    //  RULLO Ø49
    var tmp = 0;
    if (590 >= TAGLIO_RULLO_VOLANT) tmp = TAGLIO_RULLO_VOLANT;
    if ((620 >= TAGLIO_RULLO_VOLANT) && (TAGLIO_RULLO_VOLANT > 590)) tmp = TAGLIO_RULLO_VOLANT-30;
    if (TAGLIO_RULLO_VOLANT > 620) tmp = 590;
    taglio = tmp;
    if (VOLANT == 'Yes') pezzi = 1;
    else pezzi = 0;  
    
    data['*CF'] = pezzi;
    data['*CON-A'] = '0000';
    data['*CON-B'] = taglio;


    return await functions.asyncFinalDataObj(data);
};
