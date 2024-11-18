
import { Rule } from "../types/general.js";
import  {functions} from "./libGibus/functions.js";
import {SETSL as filterVariables} from "./libGibus/functionVariables.js";


import {altImpT01} from "./libGibus/altImp.js";


export const SETSL01: Rule = async (data) => {

    data = functions.initDataObj(data, filterVariables, 'SETSL01');

    data['*CON-A'] = data.get('*COL');
    data['*CON-B'] = data.get('*LUNG');

   await altImpT01(data);
    
    data = functions.finalDataObj(data);

    return data;
};


