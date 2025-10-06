
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";

export const REG0010508_NEW: Rule = async (data) => {

    let filterVariables = (await import("./libGibus/functionVariables")).VE;

    await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CF'] = 0;

    if (data['§SPESS_VETRO_MM'] == '10') {
        if (data['§VE_REG_VET_LAT'] > 0) {
            data['*CON-A'] = data['§VERN_1_COM'];
            data['*CON-B'] = data['§VE_REG_VET_LAT'];
            data['*CF'] = data['§VE_QREG_VET_LAT'];
        }

        return await functions.asyncFinalDataObj(data);
    };
}
