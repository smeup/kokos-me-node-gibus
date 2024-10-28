import { Rule } from "../types/general.js";
import  {functions} from "./libGibus/functions.js";

export const REG0010483_NEW: Rule = (data) => {

	functions.setInternalVal(data);

    data['*CF'] = 0;
    
    if(data['§VE_GUIINF_2VIE'] > 0){
        if(data['§FS_VET_SCORR'] == 'SI'){
            data['*CON-A'] = '0051';
            data['*CON-B'] = data['§VE_GUIINF_2VIE'];
            data['*CF'] = data['§VE_QGUIINF_2VIE'];
        }
    }

    return functions.setExternalVal(data);
};

