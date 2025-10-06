import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";

export const REG0011075_NEW: Rule = async (data) => {

    let filterVariables = (await import("./libGibus/functionVariables")).VE;

    await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CF'] = 0;
    data['*CON-A'] = '0325';

    if (data['§FS_VET_SCORR'] == 'SI') {
        data['*CF'] = data['§N_ANTE'] * 2;
    }

    return await functions.asyncFinalDataObj(data);
};
