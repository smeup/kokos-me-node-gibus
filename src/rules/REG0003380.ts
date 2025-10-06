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

export const REG0003380: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003380
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A=*COL
    // *SET *CON-B=*LUNG
    // *SET *S2=*LUNG
    // #2
    // COND:
    // ( §FS_FAM2_JEANS=§SI ) OR ( §FS_FAM2_165=§SI )
    // THEN:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.getCOL());
    vars.setCON_B(vars.getLUNG());
    vars.setS2(vars.getLUNG());
    
    //#2
    if ((vars.get('§FS_FAM2_JEANS') == vars.get('§SI')) || (vars.get('§FS_FAM2_165') == vars.get('§SI'))) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
