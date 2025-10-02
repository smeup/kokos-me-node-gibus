import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";

import { readFaseAttivaCFbyConf } from "./readFaseAttivaCFbyConf.js";

//regola dell'imballo fatta in test, quasi sicuramente va cancellata
//dato che l'ambiente di produzione avrà la sua numerazione
export const REC0000383: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    let time = 0;

    //imposto la fase per "normalmente spento", e poi attivo fase in base al verificarsi delle condizioni
    let spegni = 1;
    spegni = await readFaseAttivaCFbyConf(data["§_CF"], '20');
    
        
    if (spegni === 1) {
        data['*LG'] = '';
    }
    
    return await functions.asyncFinalDataObj(data);
};