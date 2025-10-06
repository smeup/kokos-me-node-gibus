import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";


export const REG0013949: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CF'] = 0;
    if((data['§FS_OPT_TET'] == 'SI') &&(data['§TI_PRO_TET_OAV'] == '01')){
        data['*CF'] = 1;
        data['*CON-A'] = data['§VR_PROF_TET'];
    } 

    return await functions.asyncFinalDataObj(data);
};
