import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { getCategTess4CicliFasi } from "./getCategTess4CicliFasi";

//questa regola riguarda il telo da fare a Saccolongo relativo a un pacco telo da fare a veggiano
//fase 47 MACCHINA 1 TESTA SACCOLONGO sempre attiva tranne nei casi seguenti (per i quali va spenta):
// tessuto ACPOH120
// tessuto ACPOWT120
// tessuto TECSWH177267 + cordoli cuciti, ovvero tessuto cucito

export const REC0000392: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');
    
    //normalmente spento
    let spegni = 1
    let time = 0;
    
    let categoriaTessuto = '';
    categoriaTessuto = await getCategTess4CicliFasi(data['§TESS_HID']);

    
    //attiva per queste categorie
    if (categoriaTessuto === 'TECSW') spegni = 0;                                                    
    if (categoriaTessuto === 'TECSWH177267') spegni = 0;                                                          
    if (categoriaTessuto === 'PRECO302') spegni = 0;                                                              
    if (categoriaTessuto === 'OPATEXH300') spegni = 0;                                                            
    if (categoriaTessuto === 'BLOCKOUTH267') spegni = 0; 

    //se tessuto TECSWH177267 e CUCITO, spegni
    if ((categoriaTessuto === 'TECSWH177267') && (data['§FS_TESS_CUCITO'] === 'SI')) spegni = 1;                                                             
                                                                
                                                            

    if (spegni === 1) {
        data['*LG'] = '';
    }
   
    return await functions.asyncFinalDataObj(data);
};