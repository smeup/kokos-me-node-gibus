import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
//import { getCategTess4CicliFasi } from "./getCategTess4CicliFasi";

//questa regola riguarda il telo da fare a Saccolongo relativo a un pacco telo da fare a veggiano
//fase 10 TAGLIO TELO sempre attiva in questo caso
//sembra il tutto indipendente dal tessuto

export const REC0000390: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    let time = 0;
    let categoriaTessuto = '';
    
    //questa fase la terrei sempre attiva: il taglio telo ci sta sempre (caso telo med da fare a saccolongo)
    let spegni = 0;

    /*
    //default spegni
    let spegni = 1;
    categoriaTessuto = await getCategTess4CicliFasi(data['§TESS_HID']);

    //attiva per queste categorie
    if (categoriaTessuto === 'ACPOH120') spegni = 0;
    if (categoriaTessuto === 'ACPOWT120') spegni = 0;
    if (categoriaTessuto === 'TECSW') spegni = 0;                                                    
    if (categoriaTessuto === 'TECSWH177267') spegni = 0;                                                          
    if (categoriaTessuto === 'PRECO302') spegni = 0;                                                              
    if (categoriaTessuto === 'OPATEXH300') spegni = 0;                                                            
    if (categoriaTessuto === 'BLOCKOUTH267') spegni = 0;                                                          
    */

    if (spegni === 1) {
        data['*LG'] = '';
    }
   
    return await functions.asyncFinalDataObj(data);
};