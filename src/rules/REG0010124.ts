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

export const REG0010124: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010124
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FRANGITRATTA2 > #0 ) AND ( §FS_TIPO_LED='03' )
    // THEN:
    // *SET *CF=§NR_FRANGI_LED
    // #3
    // COND:
    // ( §FRANGITRATTA3 > #0 ) AND ( §FS_TIPO_LED='03' )
    // THEN:
    // *SET *CF=[ §NR_FRANGI_LED * #2 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if ((vars.get('§FRANGITRATTA2') > 0) && (vars.get('§FS_TIPO_LED') == '03')) {
        vars.setCF(vars.get('§NR_FRANGI_LED'));
    }
    //#3
    if ((vars.get('§FRANGITRATTA3') > 0) && (vars.get('§FS_TIPO_LED') == '03')) {
        vars.setCF(vars.get('§NR_FRANGI_LED') * 2);
    }
    // GENERATED

    return vars.output;
};
