import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { SETCOLSTR } from "./SETCOLSTR";


//regola dell'imballo fatta in test, quasi sicuramente va cancellata
//dato che l'ambiente di produzione avrà la sua numerazione
export const REG0013717: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CF'] = 0;
    if (data['§FS_FAM2_ISOLA'] == 'SI') data['*CF'] += 1;
    
    await SETCOLSTR(data, false);

    return await functions.asyncFinalDataObj(data);
};
