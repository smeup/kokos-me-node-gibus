import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { SETCOLPLAFRA } from "./SETCOLPLAFRA";


//regola dell'imballo fatta in test, quasi sicuramente va cancellata
//dato che l'ambiente di produzione avrà la sua numerazione
export const REG0013733: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CF'] = data['§IN_CHI_NR'] * data['§LARG'] / 100;
    //await SETCOLPLAFRA(data, false);

    data['*CON-A'] = 'P055';
    if (['193859','194274','196172'].includes(data['§TESS_HID'])) data['*CON-A'] = 'P053'; 
    if (['193863','196161','196176'].includes(data['§TESS_HID'])) data['*CON-A'] = 'P065';
    if (['193862','196162','196175'].includes(data['§TESS_HID'])) data['*CON-A'] = 'P072';
    
    if (['193861'].includes(data['§TESS_HID'])) data['*CON-A'] = 'P079';
    if (['193860'].includes(data['§TESS_HID'])) data['*CON-A'] = 'P136';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

    return await functions.asyncFinalDataObj(data);
};
