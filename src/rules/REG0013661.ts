import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";


//regola dell'imballo fatta in test, quasi sicuramente va cancellata
//dato che l'ambiente di produzione avrà la sua numerazione
export const REG0013661: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    if (data['§FS_SEMILAV'] === '1') data['*LG'] = '';

    data['*D_L'] = 410;
    data['*D_H'] = 410;
    data['*D_P5'] = 450;
    data['*P_L'] = 10;

    data['*CF'] = 2;

    return await functions.asyncFinalDataObj(data);
};
