import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
//import { getCategTess4CicliFasi } from "./getCategTess4CicliFasi";
//import { readFaseAttivaCF } from "./readFaseAttivaCF";

//questa regola riguarda il telo da fare a Saccolongo relativo a un pacco telo da fare a veggiano
//fase 90 IMBALLO sempre attiva in questo caso

export const REC0000397: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    let time = 0;
    
    //sempre attivo
    let spegni = 0;

   
    if (spegni === 1) {
        data['*LG'] = '';
    }
   
    return await functions.asyncFinalDataObj(data);
};