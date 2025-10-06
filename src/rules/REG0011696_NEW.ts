import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";

export const REG0011696_NEW: Rule = async (data) => {

    let filterVariables = (await import("./libGibus/functionVariables")).VE;

    await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CF'] = 0;
    data['*CON-A'] = 'P072';

    if (data['§N_VIE'] == 2) {
        data['*CF'] = 1;
        if (data['§N_ANTE'] == 4) {
            data['*CF'] = 2;
        }
    }

    return await functions.asyncFinalDataObj(data);

};
