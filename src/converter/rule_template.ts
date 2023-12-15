import { Rule } from "../types/general";
import { Variables } from "./variables";


export const RULE_ID: Rule = (iv) => {

    const vars = new Variables(iv);
    
    //REPL_WITH_GEN_CODE

    return vars.output;
};
