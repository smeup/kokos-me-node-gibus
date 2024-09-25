import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";

export const REG0011108_NEW: Rule = (data) => {

    functions.setInternalVal(data);

    data['*CF'] = 0;
    data['*CON_A'] = '0466';

    if (data['§N_VIE'] == 2) {
        data['*CF'] = 1;
        if (data['§N_ANTE'] == 4) {
            data['*CF'] = 2;
        }
    }

    return functions.setExternalVal(data);
};
