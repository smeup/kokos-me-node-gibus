
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";

export const REG0010508_NEW: Rule = (data) => {

    functions.setInternalVal(data);

    data['*CF'] = 0;

    if (data['§SPESS_VETRO_MM'] == '10'){
        if (data['§VE_REG_VET_LAT'] > 0) {
            data['*CON-A'] = data['§VERN_1_COM'];
            data['*CON-B'] = data['§VE_REG_VET_LAT'];
            data['*CF'] = data['§VE_QREG_VET_LAT'];
    } 

        return functions.setExternalVal(data);
    };
}
