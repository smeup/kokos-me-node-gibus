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

export const REG0003221: Rule = (iv) => {

    const vars = new Variables(iv);
    
    // GENERATED
    // RULE: REG0003221
    // REQUEST:
    // """
    // #1
    // COND:
    // (§TRA_TET_ANT1 > #0 )
    // THEN:
    // *SET *CF =[§N_MODULI]
    // *SET *CON-A=§VERN_1_COM
    // #2
    // COND:
    // (§TRA_TET_ANT1 > #0 ) AND ( §FS_TRA_TET_ANA=§SI )
    // THEN:
    // *SET *CF =[§N_MODULI * #2]
    // *SET *CON-A=§VERN_1_COM
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§TRA_TET_ANT1') > 0) {
        vars.setCF(vars.get('§N_MODULI'));
        vars.setCON_A(vars.get('§VERN_1_COM'));
    }
    
    //#2
    if ((vars.get('§TRA_TET_ANT1') > 0) && (vars.get('§FS_TRA_TET_ANA') == vars.get('§SI'))) {
        vars.setCF(vars.get('§N_MODULI') * 2);
        vars.setCON_A(vars.get('§VERN_1_COM'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
