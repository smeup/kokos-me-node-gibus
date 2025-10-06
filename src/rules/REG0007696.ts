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

export const REG0007696: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007696
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §_LIN<>'IT') AND ( §_LIN<>'FR') AND ( §_LIN<>'DE') AND ( §FS_SP_0=§SI OR §FS_SP_00=§SI OR §FS_SP_1=§SI OR §FS_SP_0_GC=§SI )
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( §_LIN<>'IT') AND ( §_LIN<>'FR') AND ( §_LIN<>'DE') AND ( §FS_SP_0_GCT=§SI )
    // THEN:
    // *SET *CF=#1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if ((vars.get('§_LIN') != 'IT') && (vars.get('§_LIN') != 'FR') && (vars.get('§_LIN') != 'DE') && (vars.get('§FS_SP_0') == vars.get('§SI') || vars.get('§FS_SP_00') == vars.get('§SI') || vars.get('§FS_SP_1') == vars.get('§SI') || vars.get('§FS_SP_0_GC') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    //#3
    if ((vars.get('§_LIN') != 'IT') && (vars.get('§_LIN') != 'FR') && (vars.get('§_LIN') != 'DE') && (vars.get('§FS_SP_0_GCT') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
