
import { Rule } from "../types/general.js";
import  {functions} from "./libGibus/functions.js";

export const REG0011424_NEW: Rule = (data) => {

	functions.setInternalVal(data);

    data["*CF"] = 2;
    data["*CON-A"] = 'P000';
    data["*CON-B"] = '300';

    return functions.setExternalVal(data);
};
