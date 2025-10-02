import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";


//regola dell'imballo fatta in test, quasi sicuramente va cancellata
//dato che l'ambiente di produzione avrà la sua numerazione
export const REG0013732: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CF'] = 0;
    if (data['§FS_SCA_LAT_T01'] == 'SI') {
        data['*CON-A'] = '0187';
        data['*CON-B'] = '7.7';
        data['*CF'] = data['§NR_FRANGI'];
    }

    return await functions.asyncFinalDataObj(data);
};
