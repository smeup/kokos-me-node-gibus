import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";

export const REG0010489_NEW: Rule = async (data) => {

    let filterVariables = (await import("./libGibus/functionVariables.js")).VE;

    await functions.asyncInitDataObj(data, filterVariables, '' );

    data['*CF'] = 0;

    if (data['§VE_GUISUP_2VIE'] > 0) {
        if (data['§FS_VET_SCORR'] == 'SI') {
            data['*CON-A'] = data['§VERN_1_COM'];
            data['*CON-B'] = data['§VE_GUISUP_2VIE'];
            data['*CF'] = data['§VE_QGUISUP_2VIE'];
        }
    }

    return await functions.asyncFinalDataObj(data);
};
