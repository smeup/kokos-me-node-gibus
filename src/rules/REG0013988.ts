import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";

export const REG0013988: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    let TAGLIO_SFALSATO = 0, N_RULLO = 0, RULLO_85 = 0, TAGLIO_RULLO = 0;

    var tmp=0, pezzi, taglio;

    if(TAGLIO_SFALSATO>0)
    tmp=0; //spegne rullo
    else
    tmp=N_RULLO; //1 o 2 rispetto larghezza
    
    pezzi=tmp*RULLO_85;
    taglio=TAGLIO_RULLO/(N_RULLO);        
                
    data['*CF'] = pezzi;
    data['*CON-A'] = '0000';
    data['*CON-B'] = taglio;

    return await functions.asyncFinalDataObj(data);
};
