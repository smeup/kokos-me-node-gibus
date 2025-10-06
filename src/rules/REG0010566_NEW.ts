import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";


export const REG0010566_NEW: Rule = async (data) => {

    let filterVariables = (await import("./libGibus/functionVariables")).VE;

    await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CON-A'] = "0051";

    if (data['§FS_APERTURA_CEN'] == 'SI') {
        data['*CF'] = 2;
    } else {
        data['*CF'] = 1;
    }

    return await functions.asyncFinalDataObj(data);
};
