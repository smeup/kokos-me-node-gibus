import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import {VE as filterVariables} from "./libGibus/functionVariables.js";


export const REG0010489_NEW: Rule = (data) => {

        functions.initDataObj(data, filterVariables, '' );

    data['*CF'] = 0;

    if (data['§VE_GUISUP_2VIE'] > 0) {
        if (data['§FS_VET_SCORR'] == 'SI') {
            data['*CON-A'] = data['§VERN_1_COM'];
            data['*CON-B'] = data['§VE_GUISUP_2VIE'];
            data['*CF'] = data['§VE_QGUISUP_2VIE'];
        }
    }

    return functions.finalDataObj(data);
};
