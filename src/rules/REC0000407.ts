import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
//import { readFaseAttivaCFbyConf } from "./readFaseAttivaCFbyConf.js";

//regola dell'imballo fatta in test, quasi sicuramente va cancellata
//dato che l'ambiente di produzione avrà la sua numerazione
export const REC0000407: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    let time = 0;
    
    
    //imposto per "normalmente spento", e poi attivo fase in base al verificarsi delle condizioni
    let spegni = 1;
    //spegni = await readFaseAttivaCFbyConf(data["§_CF"], '40'); //SQUADRATURA/SAGOMATURA

    //-----------------------------------------------------------------------------------------
    //ACCENDI SOLO IN PRESENZA DI ELEMENTI GRAFICI SU TELO DA FARE ALL'ESTERNO
    if (data["§FS_SCRITTA_M"] === 'SI') {
        spegni = 0;
    }
    if (data["§FS_SCRITTA_T"] === 'SI') {
        spegni = 0;
    }
    if (data["§TS_T_DECORO"] != '') {
        spegni = 0;
    }
    //-----------------------------------------------------------------------------------------

    if (spegni === 1) {
        data['*LG'] = '';
    }
   
    return await functions.asyncFinalDataObj(data);
};