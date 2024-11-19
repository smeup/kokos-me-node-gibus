import { Rule } from "../types/general.js";
import  {functions} from "./libGibus/functions.js";
import {VE as filterVariables} from "./libGibus/functionVariables.js";

export const REG0010493_NEW: Rule = (data) => {

	    functions.initDataObj(data, filterVariables, '' );

    data['*CF'] = 0;
    if (data['§VE_RISC_LATERAL'] > 0 && data['§FS_VET_SCORR'] === 'SI') {
        data['*CON-A'] = data['§VERN_1_COM'];
        data['*CON-B'] = data['§VE_RISC_LATERAL'];
        data['*CF'] = 2;
    } 

    return functions.finalDataObj(data);
};
