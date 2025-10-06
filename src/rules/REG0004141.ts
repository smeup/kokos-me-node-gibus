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

export const REG0004141: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004141
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_MED_ACCOPP<> §SI )
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CF= [§N_MODULI + #1]
    // #3
    // COND:
    // ( §FS_MED_ACCOPP=§SI ) AND ( §FS_ACC_CEN<>§SI )
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CF=[ §N_MODULI ]
    // #4
    // COND:
    // ( §FS_MED_ACCOPP=§SI ) AND ( §FS_ACC_CEN=§SI )
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CF=[ §N_MODULI - #1 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_MED_ACCOPP') != vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCF(vars.get('§N_MODULI') + 1);
    }
    
    //#3
    if (vars.get('§FS_MED_ACCOPP') == vars.get('§SI') && vars.get('§FS_ACC_CEN') != vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCF(vars.get('§N_MODULI'));
    }
    
    //#4
    if (vars.get('§FS_MED_ACCOPP') == vars.get('§SI') && vars.get('§FS_ACC_CEN') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCF(vars.get('§N_MODULI') - 1);
    }
    
    // GENERATED

    return vars.output;
};
