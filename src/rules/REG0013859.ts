import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { SETCOLFRANGI } from "./SETCOLFRANGI.js";


//regola dell'imballo fatta in test, quasi sicuramente va cancellata
//dato che l'ambiente di produzione avrà la sua numerazione
export const REG0013859: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    await SETCOLFRANGI(data, false);

    let larg = data['§LARG'];
    
    let teorico = larg - 9;
    let effettivo = 0, dedendum = 0;
    //https://gibus.atlassian.net/browse/CON-834
    if(teorico <= 150) dedendum = 0.3
    else if(teorico <= 175) dedendum = 0.4
    else if(teorico <= 225) dedendum = 0.5
    else if(teorico <= 275) dedendum = 0.6
    else if(teorico <= 325) dedendum = 0.7
    else if(teorico <= 375) dedendum = 0.8
    else if(teorico <= 400) dedendum = 0.9
    else if(teorico <= 450) dedendum = 1
    else if(teorico <= 500) dedendum = 1.1
    else if(teorico <= 550) dedendum = 1.2
    
    effettivo = teorico - dedendum;

    data['*CON-B'] = effettivo;
    
    data['*CF'] = 0;
    //Solo per il pacco telo arcuato lani, non plana teso
    if(data["§TI_PTEL_T01"] === '01')data['*CF'] = data['§NR_FRANGI'];

    return await functions.asyncFinalDataObj(data);
};
