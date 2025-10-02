import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { dimP90 } from "./libGibus/dimP90.js";


export const REG0013755: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CON-A'] = data['§VERN_1_COM'];
    data['*CON-B'] = dimP90('LANI', data).nominali.larghezza - 14.2;

    if(data['§FS_OPT_TET'] === 'SI') data['*CF'] = 0;
    
    return await functions.asyncFinalDataObj(data);
};
