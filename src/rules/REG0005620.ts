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

export const REG0005620: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005620
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §FS_ACC_PRI<>§SI ) OR ( §FS_ACC_PRI_02 <> §SI ) OR ( §FS_ACC_CEN<>§SI ) OR (§FS_ACC_FIN <>§SI )
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND ( §FS_ACC_DX_SX=§SI ) AND ( §FS_ACC_CEN<>§SI ) AND ( §FS_ACC_FIN<>§SI )
    // THEN:
    // *SET *CF=#2
    // #3
    // COND:
    // ( §FS_ACC_CEN=§SI ) AND ( §FS_ACC_FRO=§SI )
    // THEN:
    // *SET *CF=#2
    // #4
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND ( §FS_ACC_SX_DX=§SI ) AND ( §FS_ACC_CEN<>§SI ) AND ( §FS_ACC_FIN<>§SI )
    // THEN:
    // *SET *CF=#2
    // #5
    // COND:
    // (( §FS_ADDL_DX=§SI ) OR ( §FS_ADDL_SX=§SI )) AND (§FS_ACC_FRO=§SI ) AND (( §FS_ACC_PRI<>§SI ) OR (§FS_ACC_PRI_02<>§SI ))     AND (( §FS_ACC_SX_DX=§SI ) OR (§FS_ACC_DX_SX=§SI )) AND (§FS_ACC_CEN<>§SI ) AND (§FS_ACC_FIN<>§SI )
    // THEN:
    // *SET *CF=#0
    // #6
    // COND:
    // ( (§FS_ADDL_SX=§SI ) OR ( §FS_ADDL_DX=§SI ) ) AND (§FS_ACC_PRI_02=§SI ) AND ( §FS_ACC_FRO=§SI )
    // THEN:
    // *SET *CF=#1
    // #7
    // COND:
    // ((§FS_ADDL_SX=§SI ) OR (§FS_ADDL_DX=§SI )) AND (§FS_ACC_CEN=§SI ) AND (§FS_ACC_FRO=§SI )
    // THEN:
    // *SET *CF=#1
    // #8
    // COND:
    // §FS_FAM2_AZIMUT=§SI
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    
    //#1
    if ((vars.get('§FS_ACC_PRI') != vars.get('§SI')) || (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) || (vars.get('§FS_ACC_CEN') != vars.get('§SI')) || (vars.get('§FS_ACC_FIN') != vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#2
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') != vars.get('§SI')) && (vars.get('§FS_ACC_FIN') != vars.get('§SI'))) {
        vars.setCF(2);
    }
    //#3
    if ((vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§FS_ACC_FRO') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    //#4
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') != vars.get('§SI')) && (vars.get('§FS_ACC_FIN') != vars.get('§SI'))) {
        vars.setCF(2);
    }
    //#5
    if (((vars.get('§FS_ADDL_DX') == vars.get('§SI')) || (vars.get('§FS_ADDL_SX') == vars.get('§SI'))) && (vars.get('§FS_ACC_FRO') == vars.get('§SI')) && ((vars.get('§FS_ACC_PRI') != vars.get('§SI')) || (vars.get('§FS_ACC_PRI_02') != vars.get('§SI'))) && ((vars.get('§FS_ACC_SX_DX') == vars.get('§SI')) || (vars.get('§FS_ACC_DX_SX') == vars.get('§SI'))) && (vars.get('§FS_ACC_CEN') != vars.get('§SI')) && (vars.get('§FS_ACC_FIN') != vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#6
    if (((vars.get('§FS_ADDL_SX') == vars.get('§SI')) || (vars.get('§FS_ADDL_DX') == vars.get('§SI'))) && (vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_ACC_FRO') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    //#7
    if (((vars.get('§FS_ADDL_SX') == vars.get('§SI')) || (vars.get('§FS_ADDL_DX') == vars.get('§SI'))) && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§FS_ACC_FRO') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    //#8
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
