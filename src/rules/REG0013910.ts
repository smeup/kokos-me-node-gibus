import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { SETCOLFRANGI } from "./SETCOLFRANGI";



export const REG0013910: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    var pezzi = 0;

    let VOLANT, LED_BRACCI, LED_FRONTALE;

    if((LED_BRACCI=='Yes')||(LED_FRONTALE=='Yes')||(VOLANT=='Yes'))
        pezzi=3;
        else
        pezzi=0; 

    data['*CF'] = pezzi;

    return await functions.asyncFinalDataObj(data);
};
