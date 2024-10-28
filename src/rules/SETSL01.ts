
import { Rule } from "../types/general.js";
import  {functions} from "./libGibus/functions.js";

export const SETSL01: Rule = (data) => {

    functions.setInternalVal(data);

    data['CON-A'] = data ['*COL'];
    data['CON-B'] = data ['*LUNG'];

    return functions.setExternalVal(data);
};


