import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { getColStr } from "./getColStr";



export const REG0013984: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    let SPORGENZA, LARGHEZZA = 0, TENDA_DIVISA;
   
    var tmp=0;
    var tmp1=0;
    var tmp2=0;
    var pezzi = 0;
    
    if(SPORGENZA=='300')
    tmp=1;
    else
    tmp=0;
    
    if(LARGHEZZA>540) tmp1=1;
    if(LARGHEZZA>710) tmp1=2;
    if(LARGHEZZA>1070) tmp1=4;
    
    if((TENDA_DIVISA=='Yes')&&(540>=LARGHEZZA)&&(SPORGENZA==300))
    tmp2=1;
    
    pezzi=tmp*tmp1+tmp2;      

    data['*CF'] = pezzi;
    data['*CON-A'] = await getColStr(data);

    return await functions.asyncFinalDataObj(data);
};
