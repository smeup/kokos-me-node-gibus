import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";


export const REG0010598_NEW: Rule = async (data) => {

    let filterVariables = (await import("./libGibus/functionVariables.js")).VE;

    await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CF'] = 0;
    data['*CON-A'] = '';

    if (data['§SPESS_VETRO_MM'] == '10') {
        if (data['§Q_PANN_LAT'] > 0) {
            if (data['§VE_TIPO_VETRO'] == '1') {
                data['*CON-A'] = 'VT00';
            } else
                if (data['§VE_TIPO_VETRO'] == 'S') {
                    data['*CON-A'] = 'VT01';
                } else
                    if (data['§VE_TIPO_VETRO'] == 'E') {
                        data['*CON-A'] = 'VT02';
                    } else
                        if (data['§VE_TIPO_VETRO'] == 'A') {
                            data['*CON-A'] = 'VT03';
                        }
        }
    }

    if (data['*CON-A']) {
        data['*CON-B'] = data['§VE_LARG_PANNELL'] / 10;
        data['*CF'] = data['§Q_PANN_LAT'];
    }

    return await functions.asyncFinalDataObj(data);
};

