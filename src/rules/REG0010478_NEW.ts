
import { Rule } from "../types/general.js";
import  {functions} from "./libGibus/functions.js";

export const REG0010478_NEW: Rule = async (data) => {

    let filterVariables = (await import("./libGibus/functionVariables.js")).VE;


    await functions.asyncInitDataObj(data, filterVariables, '10478' );

    data['*CF'] = 0;

    if (data['§FS_VET_SCORR'] == 'SI') {
        data['*CF'] = 1;
    }

    return await functions.asyncFinalDataObj(data);
};
