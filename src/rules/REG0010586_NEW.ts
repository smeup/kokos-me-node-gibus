import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";

export const REG0010586_NEW: Rule = async (data) => {

    let filterVariables = (await import("./libGibus/functionVariables.js")).VE;

    await functions.asyncInitDataObj(data, filterVariables, '');

    data['§DUMMYN1'] = 0;

    if (data['§VE_PESO_PAN_LAT'] < 70) {
        data['§DUMMYN1'] = data['§Q_PANN_LAT'] * 2;
    }

    data['§DUMMYN2'] = 0;

    if (data['§VE_PESO_PAN_CEN'] < 70) {
        data['§DUMMYN2'] = data['§Q_PANN_CENTR'] * 2;
    }

    data['*CF'] = 0;
    data['*CON-A'] = '0000';

    if (data['§FS_VET_SCORR'] == 'SI') {
        data['*CF'] = data['§DUMMYN1'] + data['§DUMMYN2'];
    }

    return await functions.asyncFinalDataObj(data);
};
