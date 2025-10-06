import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";

export const REG0011275_NEW: Rule = async (data) => {

    let filterVariables = (await import("./libGibus/functionVariables")).VE;

    await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CF'] = 0;
    data['*CON-A'] = 'P000';
    data['*CON-B'] = 315;

    if (data['§FS_VET_SCORR'] === 'SI' &&
        data['§FS_APERTURA_CEN'] === 'SI' &&
        data['§SPESS_VETRO_MM'] === '10') {
        data['*CF'] = 1;
    }

    return await functions.asyncFinalDataObj(data);
};
