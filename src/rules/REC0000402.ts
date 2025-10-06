import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { getCategTess4CicliFasi } from "./getCategTess4CicliFasi";

export const REC0000402: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    let time = 0;
    let spegni = 1; //defaylt, spenta

    //se tessuti ACPOH120 e ACPOWT120, allora la fase è attiva
    let categoriaTessuto = '';
    categoriaTessuto = await getCategTess4CicliFasi(data['§TESS_HID']);
    if ((categoriaTessuto === 'ACPOH120') || (categoriaTessuto === 'ACPOWT120')) {
        spegni = 0;
    }
    
    //se cordoli cuciti e tessuto TECSWH177267, allora questa fase si fa: accendi
    if ((data['§FS_TESS_CUCITO'] === 'SI') && (categoriaTessuto === 'TECSWH177267')) {
        spegni = 0;
    }

    //spegni = await readFaseAttivaCFbyConf(data["§_CF"], '60'); 

    if (spegni === 1) {
        data['*LG'] = '';
    }
   
    return await functions.asyncFinalDataObj(data);
};