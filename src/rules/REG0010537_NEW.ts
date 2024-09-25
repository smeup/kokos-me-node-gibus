import { Rule } from "../types/general.js";
import  {functions} from "./libGibus/functions.js";

export const REG0010537_NEW: Rule = (data) => {
	functions.setInternalVal(data);
    
    data['*CF'] = data['§N_ANTE'] * 2 ;
    data['*CON-A'] = 'P051';

    return functions.setExternalVal(data);
};
