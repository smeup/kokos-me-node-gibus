import { Rule } from "../types/general.js";
import  {functions} from "./libGibus/functions.js";
import {VE as filterVariables} from "./libGibus/functionVariables.js";

export const REG0010505_NEW: Rule = (data) => {

	    functions.initDataObj(data, filterVariables, '' );

    return functions.finalDataObj(data);
};
