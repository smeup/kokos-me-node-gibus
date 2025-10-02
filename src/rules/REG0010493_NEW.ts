import { Rule } from "../types/general.js";
import  {functions} from "./libGibus/functions.js";

export const REG0010493_NEW: Rule = async (data) => {

    let filterVariables = (await import("./libGibus/functionVariables.js")).VE;


	    await functions.asyncInitDataObj(data, filterVariables, '' );

    data['*CF'] = 0;
    if (data['§VE_RISC_LATERAL'] > 0 && data['§FS_VET_SCORR'] === 'SI') {
        data['*CON-A'] = data['§VERN_1_COM'];
        data['*CON-B'] = data['§VE_RISC_LATERAL'];
        data['*CF'] = 2;
    } 

    return await functions.asyncFinalDataObj(data);
};
