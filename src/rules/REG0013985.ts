import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { getColStr } from "./getColStr";



export const REG0013985: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    let SPORGENZA, LARGHEZZA = 0;
   
    var tmp=0;
    var tmp1=0;
    var pezzi = 0;
    
    var tmp=0;
    var tmp1=0;
    
    if((SPORGENZA=='400')||(SPORGENZA=='350'))
    tmp=1;
    else
    tmp=0;
    
    if(LARGHEZZA>540) tmp1=1;
    if(LARGHEZZA>950) tmp1=2;
    if(LARGHEZZA>1070) tmp1=4;
    
    pezzi=tmp*tmp1;
    data['*CF'] = pezzi;
    data['*CON-A'] = await getColStr(data);

    return await functions.asyncFinalDataObj(data);
};
