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

export const REG0000282: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000282
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_FRONTALE
    // #2
    // COND:
    // §FS_OPT_ROL = §SI
    // THEN:
    // *SET *LG = ''
    // #3
    // COND:
    // §L_FRONTALE_TG  > #0
    // THEN:
    // *SET *CF = §NR_PZ_FRONTALE
    // *SET *CON-B = §L_FRONTALE_TG
    // #4
    // COND:
    // §FS_NODO = §SI
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = [§LARG - #10,3]
    // #5
    // COND:
    // §FS_TXT = §SI
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = [§LARG - #9,9]
    // #6
    // COND:
    // §FS_TXT = §SI AND §FS_OPT_VOL = §SI
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = [§LARG - #11,7]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_FRONTALE'));
    
    //#2
    if (vars.get('§FS_OPT_ROL') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#3
    if (vars.get('§L_FRONTALE_TG') > 0) {
        vars.setCF(vars.get('§NR_PZ_FRONTALE'));
        vars.setCON_B(vars.get('§L_FRONTALE_TG'));
    }
    
    //#4
    if (vars.get('§FS_NODO') == vars.get('§SI')) {
        vars.setCF(1);
        vars.setCON_B(vars.get('§LARG') - 10.3);
    }
    
    //#5
    if (vars.get('§FS_TXT') == vars.get('§SI')) {
        vars.setCF(1);
        vars.setCON_B(vars.get('§LARG') - 9.9);
    }
    
    //#6
    if (vars.get('§FS_TXT') == vars.get('§SI') && vars.get('§FS_OPT_VOL') == vars.get('§SI')) {
        vars.setCF(1);
        vars.setCON_B(vars.get('§LARG') - 11.7);
    }
    
    // GENERATED

    return vars.output;
};
