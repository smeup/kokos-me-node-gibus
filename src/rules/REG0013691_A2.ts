import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { getColStr } from "./getColStr";
import { getColPlaStr } from "./getColPlaStr";



//regola dell'imballo fatta in test, quasi sicuramente va cancellata
//dato che l'ambiente di produzione avrà la sua numerazione
export const REG0013691_A2: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CF'] = 0;
    if(data['§OPT_GAM_A2'] == '1')data['*CF'] = 1;
    
    let vrStr = await getColStr(data);
    data['*CON-A'] = await getColPlaStr(vrStr, data);

    return await functions.asyncFinalDataObj(data);
};
