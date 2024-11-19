import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import {VE as filterVariables} from "./libGibus/functionVariables.js";


export const REG0011275_NEW: Rule = (data) => {

        functions.initDataObj(data, filterVariables, '' );

    data['*CF'] = 0;
    data['*CON-A'] = 'P000';
    data['*CON-B'] = 315;

    if( data['§FS_VET_SCORR'] === 'SI' &&
    data['§FS_APERTURA_CEN'] === 'SI' &&
    data['§SPESS_VETRO_MM'] === '10'){
        data['*CF'] = 1;
    }

    return functions.finalDataObj(data);
};
