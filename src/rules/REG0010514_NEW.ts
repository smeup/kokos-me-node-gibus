
import { Rule } from "../types/general.js";
import  {functions} from "./libGibus/functions.js";
import {VE as filterVariables} from "./libGibus/functionVariables.js";

export const REG0010514_NEW: Rule = (data) => {

        functions.initDataObj(data, filterVariables, '' );

    data['*CF'] = 0;

    if (data['§FS_VET_SCORR'] == 'SI') {
        data['*CF'] = 1;
    }

    return functions.finalDataObj(data);
};
