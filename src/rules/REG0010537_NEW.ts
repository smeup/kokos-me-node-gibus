import { Rule } from "../types/general.js";
import  {functions} from "./libGibus/functions.js";
import {VE as filterVariables} from "./libGibus/functionVariables.js";

export const REG0010537_NEW: Rule = (data) => {
	    functions.initDataObj(data, filterVariables, '' );
    
    data['*CF'] = data['§N_ANTE'] * 2 ;
    data['*CON-A'] = 'P051';

    return functions.finalDataObj(data);
};
