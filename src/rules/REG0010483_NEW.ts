import { Rule } from "../types/general.js";
import  {functions} from "./libGibus/functions.js";
import {VE as filterVariables} from "./libGibus/functionVariables.js";


export const REG0010483_NEW: Rule = async (data) => {;


	data = functions.initDataObj(data, filterVariables, 'REG0010483_NEW');

    if(data['§VE_GUIINF_2VIE'] > 0){
        if(data['§FS_VET_SCORR'] == 'SI'){
            data['*CON-A'] = '0051';
            //data['*CON-B'] = data['§VE_GUIINF_2VIE'];
            data['*CON-B'] = data.get('§VE_GUIINF_2VIE');
            data['*CF'] = data.get['§VE_QGUIINF_2VIE'];
            data.get('pippo');
        }
    }


    data =  functions.finalDataObj(data);

    return data;
};

