import { Rule } from "../types/general.js";
import  {functions} from "./libGibus/functions.js";
import {VE as filterVariables} from "./libGibus/functionVariables.js";

export const REG0011075_NEW: Rule = (data) => {

        functions.initDataObj(data, filterVariables, '' );
    
    data['*CF'] = 0;
    data['*CON-A'] = '0325';

    if (data['§FS_VET_SCORR'] == 'SI') {
        data['*CF'] = data['§N_ANTE'] * 2;
    } 

    return functions.finalDataObj(data);
};
