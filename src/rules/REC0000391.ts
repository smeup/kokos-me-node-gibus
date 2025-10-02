import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { getCategTess4CicliFasi } from "./getCategTess4CicliFasi.js";

//questa regola riguarda il telo da fare a Saccolongo relativo a un pacco telo da fare a veggiano
//fase 40 SQUADRDATURA/SAGOMATURA sempre attiva in questo caso

export const REC0000391: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');
    
    let time = 0;
    
    //normalmente spento
    let spegni = 1;

    let categoriaTessuto = '';
    categoriaTessuto = await getCategTess4CicliFasi(data['§TESS_HID']);

    //attiva per queste categorie
    if (categoriaTessuto === 'TECSW') spegni = 0;                                                    
    if (categoriaTessuto === 'TECSWH177267') spegni = 0;                                                          
    if (categoriaTessuto === 'PRECO302') spegni = 0;                                                              
    if (categoriaTessuto === 'OPATEXH300') spegni = 0;                                                            
    if (categoriaTessuto === 'BLOCKOUTH267') spegni = 0; 
    
    if (spegni === 1) {
       data['*LG'] = '';
    }
   
    return await functions.asyncFinalDataObj(data);
};