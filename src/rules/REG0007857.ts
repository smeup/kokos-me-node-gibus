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

export const REG0007857: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007857
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // THEN:
    // *SET *CF = [ §N_MODULI + #1 ]
    // #3
    // COND:
    // ( §FS_ACC_ANT_SX=§SI )
    // THEN:
    // *SET §DUMMYN1 = [*CF - #1]
    // #4
    // COND:
    // ( §FS_ACC_ANT_SX=§SI )
    // THEN:
    // *SET *CF = §DUMMYN1
    // #5
    // COND:
    // ( §FS_ACC_ANT_DX=§SI )
    // THEN:
    // *SET §DUMMYN1 = [*CF - #1]
    // #6
    // COND:
    // ( §FS_ACC_ANT_DX=§SI )
    // THEN:
    // *SET *CF = §DUMMYN1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    vars.setCF(vars.get('§N_MODULI') + 1);
    
    //#3
    if (vars.get('§FS_ACC_ANT_SX') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.getCF() - 1);
    }
    
    //#4
    if (vars.get('§FS_ACC_ANT_SX') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    
    //#5
    if (vars.get('§FS_ACC_ANT_DX') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.getCF() - 1);
    }
    
    //#6
    if (vars.get('§FS_ACC_ANT_DX') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    
    // GENERATED

    return vars.output;
};
