import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";


//regola dell'imballo fatta in test, quasi sicuramente va cancellata
//dato che l'ambiente di produzione avrà la sua numerazione
export const REG0013662: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CF'] = 0;
    ['§FS_FAM2_AZIMUT', '§FS_FAM2_ZENIT'].forEach(elem =>
        data[elem] == 'SI' ? data['*CF'] = 1 : null);

    if (data['§FS_SEMILAV'] === '1') data['*LG'] = '';
    if (!data['§TIPO_TELECOM']) data['*LG'] = '';

    data['*D_L'] = 220;
    data['*D_H'] = 120;
    data['*D_P5'] = 10;
    data['*P_L'] = 11;

    data['*CF'] = 4;

    return await functions.asyncFinalDataObj(data);
};
