import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";

export const REG0011275_GIB: Rule = (data) => {

    functions.setInternalVal(data);

    data['*CF'] = 0;
    data['*CON-A'] = 'P000';
    data['*CON-B'] = 315;

    if( data['§FS_VET_SCORR'] === 'SI' &&
    data['§FS_APERTURA_CEN'] === 'SI' &&
    data['§SPESS_VETRO_MM'] === '10'){
        data['*CF'] = 1;
    }

    return functions.setExternalVal(data);
};
