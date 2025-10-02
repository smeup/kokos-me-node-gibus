import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { SETCOLPLAFRA } from "./SETCOLPLAFRA.js";


//regola dell'imballo fatta in test, quasi sicuramente va cancellata
//dato che l'ambiente di produzione avrà la sua numerazione
export const REG0013734: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    //il calcolo del pacco telo ritorna il totale unghie_dx + unghie_sx
    data['*CF'] = data['§IN_UNG_NR'] / 2 * data['§LARG_TELO'] / 100; 
    data['*CON-A'] =  'P055';

   // await SETCOLPLAFRA(data, false); 

    return await functions.asyncFinalDataObj(data);
};
