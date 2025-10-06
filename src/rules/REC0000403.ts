import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { getCategTess4CicliFasi } from "./getCategTess4CicliFasi";

//questa regola riguarda il telo da fare a Saccolongo relativo a un pacco telo da fare a veggiano
//fase 20 SALDATURA attiva solo per categorie tessuto ACPOH120 e ACPOWT120

export const REC0000403: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    let time = 0;
    let categoriaTessuto = '';
    

    //fase attiva solo per categorie tessuto ACPOH120 e ACPOWT120
    //di default spegni, accendi se rientra in tali categorie
    let spegni = 1;
    categoriaTessuto = await getCategTess4CicliFasi(data['§TESS_HID']);

    if (categoriaTessuto === 'ACPOH120') spegni = 0;
    if (categoriaTessuto === 'ACPOWT120') spegni = 0;

    if (spegni === 1) {
        data['*LG'] = '';
    }
   
    return await functions.asyncFinalDataObj(data);
};