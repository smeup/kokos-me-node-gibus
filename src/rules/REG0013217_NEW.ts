import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";

export const REG0013217_NEW: Rule = async (data) => {

    let filterVariables = (await import("./libGibus/functionVariables")).VE;

    await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CF'] = 0;

    if (data['§FS_VET_SCORR'] == 'SI' && data['§FS_PR_CH_SPAZI'] == 'SI' && data['§QPR_CH_SPAZI'] > 0) {
        data['*CON-A'] = data['§VERN_1_COM'];
        data['*CON-B'] = 600;
        data['*CF'] = data['§QPR_CH_SPAZI'];
    }

    return await functions.asyncFinalDataObj(data);
};
