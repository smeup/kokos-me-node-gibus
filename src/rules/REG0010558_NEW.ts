import { Rule } from "../types/general.js";
import  {functions} from "./libGibus/functions.js";

export const REG0010558: Rule = (data) => {

    functions.setInternalVal(data);
    
    data['*CF'] = 0;
    data['*CON-A'] = '0000';

    if (data['§FS_VET_SCORR'] == '§SI') {
        data['*CF'] = 1;
    } 
    
    return functions.setExternalVal(data);
    
};
