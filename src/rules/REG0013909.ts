import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { SETCOLFRANGI } from "./SETCOLFRANGI";


//regola dell'imballo fatta in test, quasi sicuramente va cancellata
//dato che l'ambiente di produzione avrà la sua numerazione
export const REG0013909: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    var tmp=0;
    var tmp1=0;
    var tmp2=0;
    var pezzi = 0;
    
    let VOLANT, LED_BRACCI, LED_FRONTALE;
    
    if(VOLANT=='Yes') tmp=3;
    if(LED_BRACCI=='Yes') tmp1=1;
    if(LED_FRONTALE=='Yes') tmp2=1;
    
    pezzi=tmp+tmp1+tmp2;

    data['*CF'] = pezzi;

    return await functions.asyncFinalDataObj(data);
};
