import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";

import { readFaseAttivaCFbyConf } from "./readFaseAttivaCFbyConf";


//regola dell'imballo fatta in test, quasi sicuramente va cancellata
//dato che l'ambiente di produzione avrà la sua numerazione
export const REC0000384: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    let time = 0;
    
    
    //imposto per "normalmente spento", e poi attivo fase in base al verificarsi delle condizioni
    let spegni = 1;
    spegni = await readFaseAttivaCFbyConf(data["§_CF"], '30'); //UNIONE C/CUCITURA


    if (spegni === 1) {
        data['*LG'] = '';
    }
   
    return await functions.asyncFinalDataObj(data);
};