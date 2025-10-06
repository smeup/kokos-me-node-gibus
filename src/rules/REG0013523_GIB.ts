/**
 * This rule represents a template implementation of a rule.
 * It takes an input value and performs some operations on it using the Variables class.
 * The result is returned as the output value.
 * 
 * @param iv The input value for the rule.
 * @returns The output value after applying the rule.
 */
import { Rule } from "../types/general";
import { Variables } from "../converter/variables";

export const REG0013523_GIB: Rule = (iv) => {

    const vars = new Variables(iv);

let config = '';
if(vars.get('§VERN_1_COM')){
    config = vars.get('§VERN_1_COM');
} 

if(vars.get('§VR_PROF_TET')){
    config = vars.get('§VR_PROF_TET');
} 

if(vars.get('§VR_TRA_TET')){
    config = vars.get('§VR_TRA_TET');
} 
vars.setCON_A(config);

    return vars.output;
};
