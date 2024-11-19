import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import {VE as filterVariables} from "./libGibus/functionVariables.js";


export const REG0010581_NEW: Rule = (data) => {

        functions.initDataObj(data, filterVariables, '' );

    data['§DUMMYN1'] = 0;

    if (data['§FS_APERTURA_CEN'] == 'SI' && data['§VE_BL_CE'] == 'B1' || data['§VE_BL_CE'] == 'B2') {
        data['§DUMMYN1'] = 1;
    }

    data['§DUMMYN2'] = 2 - data['§VE_PANN_SCROC'];

    if (data['§FS_APERTURA_CEN'] == 'SI') {
        data['§DUMMYN2'] = 4 - data['§VE_PANN_SCROC'] - data['§DUMMYN1'];
    }

    data['*CF'] = 0;
    data['*CON-A'] = data['§VERN_1_COM'];


    if (data['§FS_VET_SCORR'] == 'SI' && data['§DUMMYN2'] > 0) {
        data['*CF'] = data['§DUMMYN2'];
    } 

    return functions.finalDataObj(data);
};
