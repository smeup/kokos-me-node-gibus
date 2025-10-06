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

export const REG0000432: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000432
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_ZERO_PIU = §SI
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_SLIDE =  §SI
    // THEN:
    // *SET *CON-B = [§INT_GUIDE_SLIDE - #2,8]
    // ELSE:
    // *SET *CON-B = [§LARG - #9,6]
    // #3
    // COND:
    // §FS_ACC_INI = §SI
    // THEN:
    // *SET *CON-B = [§LARG - #6,4]
    // #4
    // COND:
    // §FS_ACC_FIN = §SI
    // THEN:
    // *SET *CON-B = [§LARG - #6,4]
    // #5
    // COND:
    // §FS_ACC_CEN = §SI
    // THEN:
    // *SET *CON-B = [§LARG - #3,2]
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_ZERO_PIU') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_SLIDE') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§INT_GUIDE_SLIDE') - 2.8);
    } else {
        vars.setCON_B(vars.get('§LARG') - 9.6);
    }
    
    //#3
    if (vars.get('§FS_ACC_INI') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§LARG') - 6.4);
    }
    
    //#4
    if (vars.get('§FS_ACC_FIN') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§LARG') - 6.4);
    }
    
    //#5
    if (vars.get('§FS_ACC_CEN') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§LARG') - 3.2);
    }
    // GENERATED

    return vars.output;
};
