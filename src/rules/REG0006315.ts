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

export const REG0006315: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006315
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §NR_MON_ANG_MAN >#0 ) AND ( §FS_ACC_PRI<>§SI ) AND ( §FS_ACC_PRI_02<>§SI ) AND ( §FS_ACC_CEN<>§SI ) AND ( §FS_ACC_FIN<>§SI)
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // §FS_ACC_CEN=§SI
    // THEN:
    // *SET *CF=#0
    // #4
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND ( §FS_MON_ANT2<>§SI ) AND ( §FS_ACC_INI=§SI )  AND ( §LA_ADD_LAT='SX') AND ( §FS_ACC_SX_DX=§SI )
    // THEN:
    // *SET *CF=#0
    // #5
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND ( §FS_MON_POS_2<>§SI ) AND ( §LA_ADD_LAT='SX') AND ( §FS_ACC_INI=§SI ) AND (§FS_ACC_SX_DX=§SI)
    // THEN:
    // *SET *CF=#1
    // #6
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND ( §FS_MON_ANT1<>§SI ) AND ( ( §FS_ACC_CEN=§SI ) OR ( §FS_ACC_INI=§SI ) ) AND ( §LA_ADD_LAT='DX')   AND ( §FS_ACC_SX_DX=§SI )
    // THEN:
    // *SET *CF=#0
    // #7
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND ( §FS_MON_POS_1<>§SI ) AND ( §LA_ADD_LAT='DX') AND ( §FS_ACC_INI=§SI ) AND (§FS_ACC_SX_DX=§SI)
    // THEN:
    // *SET *CF=#1
    // #8
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND ( §FS_MON_ANT2<>§SI ) AND ( ( §FS_ACC_CEN=§SI ) OR ( §FS_ACC_INI=§SI ) ) AND ( §LA_ADD_LAT='SX')   AND ( §FS_ACC_DX_SX=§SI )
    // THEN:
    // *SET *CF=#0
    // #9
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND ( §FS_MON_POS_2<>§SI ) AND ( §LA_ADD_LAT='DX') AND ( §FS_ACC_INI=§SI ) AND (§FS_ACC_DX_SX=§SI)
    // THEN:
    // *SET *CF=#1
    // #10
    // COND:
    // ( §FS_ACC_FIN = §SI ) AND ( ( §TI_ACC_TWI='01' ) OR ( §TI_ACC_TWI='02' ) )
    // THEN:
    // *SET *CF=#1
    // """
    // RESPONSE:
    
    //#1
    vars.setCF(0);
    //#2
    if ((vars.get('§NR_MON_ANG_MAN') > 0) && (vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§FS_ACC_CEN') != vars.get('§SI')) && (vars.get('§FS_ACC_FIN') != vars.get('§SI'))) {
        vars.setCF(1);
    }
    //#3
    if (vars.get('§FS_ACC_CEN') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#4
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_MON_ANT2') != vars.get('§SI')) && (vars.get('§FS_ACC_INI') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'SX') && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#5
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_MON_POS_2') != vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'SX') && (vars.get('§FS_ACC_INI') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    //#6
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_MON_ANT1') != vars.get('§SI')) && ((vars.get('§FS_ACC_CEN') == vars.get('§SI')) || (vars.get('§FS_ACC_INI') == vars.get('§SI'))) && (vars.get('§LA_ADD_LAT') == 'DX') && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#7
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_MON_POS_1') != vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'DX') && (vars.get('§FS_ACC_INI') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    //#8
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_MON_ANT2') != vars.get('§SI')) && ((vars.get('§FS_ACC_CEN') == vars.get('§SI')) || (vars.get('§FS_ACC_INI') == vars.get('§SI'))) && (vars.get('§LA_ADD_LAT') == 'SX') && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#9
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_MON_POS_2') != vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'DX') && (vars.get('§FS_ACC_INI') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    //#10
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && ((vars.get('§TI_ACC_TWI') == '01') || (vars.get('§TI_ACC_TWI') == '02'))) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
