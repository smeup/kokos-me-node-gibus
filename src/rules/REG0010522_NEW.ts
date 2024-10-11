
import { Rule } from "../types/general.js";
import  {functions} from "./libGibus/functions.js";

export const REG0010522_NEW: Rule = (data) => {

    functions.setInternalVal(data);

    data['*CF'] = 0;

    if (data['§FS_VET_SCORR'] == 'SI' && data['§FS_VETRO_PRESEN'] == 'SI' ) {
        data['*CF'] = 1;
    }

    return functions.setExternalVal(data);
};
