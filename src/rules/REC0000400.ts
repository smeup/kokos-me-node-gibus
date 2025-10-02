import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { getCategTess4CicliFasi } from "./getCategTess4CicliFasi.js";
import { readFaseAttivaCF } from "./readFaseAttivaCF.js";

//questa regola riguarda il telo da fare a VEGGIANO relativo a un pacco telo da fare a veggiano
//fase 90 IMBALLO sempre attiva in questo caso

export const REC0000400: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    let time = 0;
    
    
    //sempre attivo
    let spegni = 0;

    //imposto per "normalmente spento", e poi attivo fase in base al verificarsi delle condizioni
    //let spegni = 1;
    //spegni = await readFaseAttivaCF(whereVariable, '90'); //imballo finale

    
    if (spegni === 1) {
        data['*LG'] = '';
    }
   
    return await functions.asyncFinalDataObj(data);
};