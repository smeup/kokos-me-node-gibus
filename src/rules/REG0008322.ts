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

export const REG0008322: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008322
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_FAM2_VARIA = §SI  ) AND ( §FS_ACC_PRI<>§SI ) AND ( §FS_ACC_PRI_02<>§SI ) AND ( §FS_ACC_CEN<>§SI ) AND                    ( §FS_ACC_FIN<>§SI )
    // THEN:
    // *SET *CF=#16
    // #3
    // COND:
    // ( §FS_FAM2_VARIA = §SI ) AND ( §FS_ACC_PRI=§SI ) AND ( §FS_FAM2_ADDF<>§SI )
    // THEN:
    // *SET *CF=#16
    // #4
    // COND:
    // ( §FS_FAM2_VARIA = §SI ) AND ( §FS_ACC_PRI=§SI ) AND ( §FS_FAM2_ADDF=§SI )
    // THEN:
    // *SET *CF=#12
    // #5
    // COND:
    // ( §FS_FAM2_VARIA=§SI ) AND ( §FS_ACC_PRI_02=§SI ) AND ( §FS_FAM2_ADDL<>§SI )
    // THEN:
    // *SET *CF= #16
    // #6
    // COND:
    // ( §FS_FAM2_VARIA=§SI ) AND ( §FS_ACC_PRI_02=§SI ) AND ( §FS_FAM2_ADDL=§SI )
    // THEN:
    // *SET *CF=#12
    // #7
    // COND:
    // ( §FS_FAM2_VARIA = §SI ) AND ( §FS_ACC_CEN=§SI ) AND ( ( §FS_ACC_LAT<>§SI ) AND ( §FS_FAM2_ADDF<>§SI ) )
    // THEN:
    // *SET *CF=#8
    // #8
    // COND:
    // ( §FS_FAM2_VARIA = §SI ) AND ( §FS_ACC_CEN=§SI ) AND ( ( §FS_ACC_FRO<>§SI ) AND ( §FS_FAM2_ADDL<>§SI ) )
    // THEN:
    // *SET *CF=#8
    // #9
    // COND:
    // ( §FS_FAM2_VARIA = §SI ) AND ( §FS_ACC_CEN=§SI ) AND ( ( §FS_ACC_LAT=§SI ) AND ( §FS_FAM2_ADDF=§SI ) )
    // THEN:
    // *SET *CF=#4
    // #10
    // COND:
    // ( §FS_FAM2_VARIA = §SI ) AND ( §FS_ACC_CEN=§SI ) AND ( ( §FS_ACC_FRO=§SI ) AND ( §FS_FAM2_ADDL=§SI ) )
    // THEN:
    // *SET *CF=#4
    // #11
    // COND:
    // ( §FS_FAM2_VARIA = §SI ) AND ( §FS_ACC_FIN=§SI )
    // THEN:
    // *SET *CF=#8
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§FS_ACC_CEN') != vars.get('§SI')) && (vars.get('§FS_ACC_FIN') != vars.get('§SI'))) {
        vars.setCF(16);
    }
    
    //#3
    if ((vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_FAM2_ADDF') != vars.get('§SI'))) {
        vars.setCF(16);
    }
    
    //#4
    if ((vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_FAM2_ADDF') == vars.get('§SI'))) {
        vars.setCF(12);
    }
    
    //#5
    if ((vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_FAM2_ADDL') != vars.get('§SI'))) {
        vars.setCF(16);
    }
    
    //#6
    if ((vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_FAM2_ADDL') == vars.get('§SI'))) {
        vars.setCF(12);
    }
    
    //#7
    if ((vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && ((vars.get('§FS_ACC_LAT') != vars.get('§SI')) && (vars.get('§FS_FAM2_ADDF') != vars.get('§SI')))) {
        vars.setCF(8);
    }
    
    //#8
    if ((vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && ((vars.get('§FS_ACC_FRO') != vars.get('§SI')) && (vars.get('§FS_FAM2_ADDL') != vars.get('§SI')))) {
        vars.setCF(8);
    }
    
    //#9
    if ((vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && ((vars.get('§FS_ACC_LAT') == vars.get('§SI')) && (vars.get('§FS_FAM2_ADDF') == vars.get('§SI')))) {
        vars.setCF(4);
    }
    
    //#10
    if ((vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && ((vars.get('§FS_ACC_FRO') == vars.get('§SI')) && (vars.get('§FS_FAM2_ADDL') == vars.get('§SI')))) {
        vars.setCF(4);
    }
    
    //#11
    if ((vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) && (vars.get('§FS_ACC_FIN') == vars.get('§SI'))) {
        vars.setCF(8);
    }
    // GENERATED

    return vars.output;
};
