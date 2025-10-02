import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";


//regola dell'imballo fatta in test, quasi sicuramente va cancellata
//dato che l'ambiente di produzione avrà la sua numerazione
export const REG0013663: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    let time = 0;

    if ([data['§FS_SPA_60'], data['§FS_SPA_75']].includes('SI')) {
        if (data['§FS_LED_FRO'] === 'SI') time += 45;
        if (data['§FS_LED_BRA'] === 'SI') time += 45;
    }
    if (time) {
       data['*TELA'] = time * 60;

    } else {
        data['*LG'] = ''
    }
    
    return await functions.asyncFinalDataObj(data);
};
