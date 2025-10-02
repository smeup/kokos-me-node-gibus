import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";



export const REG0010483_NEW: Rule = async (data) => {
    let filterVariables = (await import("./libGibus/functionVariables.js")).VE;

    data = await functions.asyncInitDataObj(data, filterVariables, 'REG0010483_NEW');

    if (data['§VE_GUIINF_2VIE'] > 0) {
        if (data['§FS_VET_SCORR'] == 'SI') {
            data['*CON-A'] = '0051';
            //data['*CON-B'] = data['§VE_GUIINF_2VIE'];
            data['*CON-B'] = data.get('§VE_GUIINF_2VIE');
            data['*CF'] = data.get['§VE_QGUIINF_2VIE'];
            // data.get('pippo');
        }
    }


    data = await functions.asyncFinalDataObj(data);

    return data;
};

