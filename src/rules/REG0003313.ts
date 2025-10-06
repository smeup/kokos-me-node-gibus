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

export const REG0003313: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003313
    // REQUEST:
    // """
    // #1
    // COND:
    // §TRA_TET_ANT3 > #0
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CON-B=§TRA_TET_ANT3
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // ( §FS_TRA_TET_ANA=§SI )
    // THEN:
    // *SET *CF=#2
    // ELSE:
    // *SET *CF=#1
    // """
    // RESPONSE:
    //#1
    if (vars.get('§TRA_TET_ANT3') > 0) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§TRA_TET_ANT3'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_TRA_TET_ANA') == vars.get('§SI')) {
        vars.setCF(2);
    } else {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
