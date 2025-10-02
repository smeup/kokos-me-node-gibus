import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";

import { readFaseAttivaCFbyConf } from "./readFaseAttivaCFbyConf.js";


export const REC0000398: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    let time = 0;

    //la fase 90 IMBALLO è sempre attiva per i teli delle tende da sole
    let spegni = 0;
    
    //imposto la fase per "normalmente spento", e poi attivo fase in base al verificarsi delle condizioni
    //let spegni = 1;
    //spegni = await readFaseAttivaCFbyConf(data["§_CF"], '90');
    
        
    if (spegni === 1) {
        data['*LG'] = '';
    }
    
    return await functions.asyncFinalDataObj(data);
};