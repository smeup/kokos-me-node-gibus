/**
 * This rule represents a template implementation of a rule.
 * It takes an input value and performs some operations on it using the Variables class.
 * The result is returned as the output value.
 * 
 * @param iv The input value for the rule.
 * @returns The output value after applying the rule.
 */
import { Rule } from "../types/general.js";
import { Variables } from "../converter/variables.js";

export const REG0005118: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005118
    // REQUEST:
    // """
    // #1
    // COND:
    // §P_POR_CAS_L > #0
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §P_POR_CAS_L
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // ( §P_POR_CAS_L_ACC=#0 )
    // THEN:
    // *SET *CF=#2
    // #3
    // COND:
    // ( §P_POR_CAS_L_ACC>#0 ) AND ( §FS_ACC_PRI_02=§SI )
    // THEN:
    // *SET *CF=#1
    // #4
    // COND:
    // (( §FS_ACC_CEN=§SI ) AND ( §FS_ACC_FRO=§SI ) AND ( §P_POR_CAS_L_ACC>#0 ))
    // THEN:
    // *SET *CF=#0
    // #5
    // COND:
    // ( §FS_ACC_FIN=§SI ) AND ( §FS_ACC_FRO=§SI )
    // THEN:
    // *SET *CF=#1
    // """
    // RESPONSE:
    //#1
    if (vars.get('§P_POR_CAS_L') > 0) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§P_POR_CAS_L'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§P_POR_CAS_L_ACC') == 0) {
        vars.setCF(2);
    }
    
    //#3
    if ((vars.get('§P_POR_CAS_L_ACC') > 0) && (vars.get('§FS_ACC_PRI_02') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#4
    if ((vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§FS_ACC_FRO') == vars.get('§SI') && (vars.get('§P_POR_CAS_L_ACC') > 0))) {
        vars.setCF(0);
    }
    
    //#5
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_FRO') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
