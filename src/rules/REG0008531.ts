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

export const REG0008531: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008531
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // #2
    // COND:
    // §FS_NODO = §SI  OR §FS_PRO_PAR_T01 = §SI
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = [§LARG - #28,9]
    // #3
    // COND:
    // §FS_CHI_PAR = §NO
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#2
    if (vars.get('§FS_NODO') == vars.get('§SI') || vars.get('§FS_PRO_PAR_T01') == vars.get('§SI')) {
        vars.setCF(1);
        vars.setCON_B(vars.get('§LARG') - 28.9);
    }
    
    //#3
    if (vars.get('§FS_CHI_PAR') == vars.get('§NO')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
