import { Rule } from "../types/general.js";
import  {functions} from "./libGibus/functions.js";
import {VE as filterVariables} from "./libGibus/functionVariables.js";

export const REG0011696_NEW: Rule = (data) => {

        functions.initDataObj(data, filterVariables, '' );

    data['*CF'] = 0;
    data['*CON-A'] = 'P072';

    if (data['§N_VIE'] == 2) {
        data['*CF'] = 1;
        if(data['§N_ANTE'] == 4){
            data['*CF'] = 2;
        }
    }
    
    return functions.finalDataObj(data);

};
