import { Rule } from "../types/general.js";
import  {functions} from "./libGibus/functions.js";

export const REG0011219_NEW: Rule = (data) => {

	functions.setInternalVal(data);

    return functions.setExternalVal(data);
};
