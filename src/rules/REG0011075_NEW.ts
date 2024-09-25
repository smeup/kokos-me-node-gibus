import { Rule } from "../types/general.js";
import  {functions} from "./libGibus/functions.js";

export const REG0011075_NEW: Rule = (data) => {

    functions.setInternalVal(data);
    
    data['*CF'] = 0;
    data['*CON-A'] = '0325';

    if (data['§FS_VET_SCORR'] == 'SI') {
        data['*CF'] = data['§N_ANTE'] * 2;
    } 

    return functions.setExternalVal(data);
};
