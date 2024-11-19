
import { Rule } from "../types/general.js";
import  {functions} from "./libGibus/functions.js";
import {VE as filterVariables} from "./libGibus/functionVariables.js";

export const REG0011424_NEW: Rule = (data) => {

	    functions.initDataObj(data, filterVariables, '' );

    data["*CF"] = 2;
    data["*CON-A"] = 'P000';
    data["*CON-B"] = '300';

    return functions.finalDataObj(data);
};
