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

export const REG0004714: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004714
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §FS_FAM2_ADDF=§SI ) AND ( §FS_ACC_DX_SX=§SI ) AND (§FS_ACC_PRI<>§SI ) AND ( §FS_ACC_PRI_02<>§SI ) AND (§FS_ACC_CEN<>§SI )
    // THEN:
    // *SET *CON-A=*COL
    // *SET *CON-B=*LUNG
    // *SET *S2=*LUNG
    // #2
    // COND:
    // §FS_FAM2_ISOLA=§SI
    // THEN:
    // *SET *CF=#0
    // #3
    // COND:
    // ( §FS_FAM2_ADDF=§SI ) AND ( §FS_ACC_DX_SX=§SI ) AND ((§FS_ACC_PRI=§SI ) OR (§FS_ACC_PRI_02=§SI ))
    // THEN:
    // *SET *CON-A=*COL
    // *SET *CON-B=*LUNG
    // *SET *S2=*LUNG
    // #4
    // COND:
    // ( §FS_FAM2_ADDL=§SI ) AND (§LA_ADD_LAT='SX') AND (§FS_ACC_PRI<>§SI ) AND (§FS_ACC_PRI_02<>§SI ) AND (§FS_ACC_CEN<>§SI )      AND (§FS_ACC_FIN<>§SI )
    // THEN:
    // *SET *CF=#0
    // #5
    // COND:
    // ( §FS_FAM2_ADDL=§SI ) AND (§LA_ADD_LAT='DX') AND (§FS_ACC_PRI<>§SI ) AND (§FS_ACC_PRI_02<>§SI ) AND (§FS_ACC_CEN<>§SI )      AND (§FS_ACC_FIN<>§SI )
    // THEN:
    // *SET *CON-A=*COL
    // *SET *CON-B=*LUNG
    // *SET *S2=*LUNG
    // #6
    // COND:
    // ( §FS_FAM2_ADDL=§SI ) AND (§TI_ACC_TWI='01') AND (( §FS_ACC_CEN=§SI ) OR ( §FS_ACC_FIN=§SI )) AND ( §LA_ADD_LAT='SX' )
    // THEN:
    // *SET *CF=#0
    // #7
    // COND:
    // (§FS_FAM2_ADDL=§SI ) AND (§TI_ACC_TWI='02') AND ((§FS_ACC_CEN=§SI ) OR ( §FS_ACC_FIN=§SI )) AND (§LA_ADD_LAT='SX')
    // THEN:
    // *SET *CF=#0
    // #8
    // COND:
    // ( §FS_FAM2_ADDL=§SI ) AND (§TI_ACC_TWI='02') AND (§FS_ACC_FIN=§SI ) AND (§LA_ADD_LAT='DX')
    // THEN:
    // *SET *CON-A=*COL
    // *SET *CON-B=*LUNG
    // *SET *S2=*LUNG
    // #9
    // COND:
    // ( §FS_FAM2_ADDL=§SI ) AND (§LA_ADD_LAT='SX') AND ((§FS_ACC_PRI=§SI ) OR ( §FS_ACC_PRI_02=§SI ))
    // THEN:
    // *SET *CF=#0
    // #10
    // COND:
    // ( §FS_FAM2_ADDL=§SI ) AND (§LA_ADD_LAT='DX') AND (( §FS_ACC_PRI=§SI ) OR (§FS_ACC_PRI_02=§SI ))
    // THEN:
    // *SET *CON-A=*COL
    // *SET *CON-B=*LUNG
    // *SET *S2=*LUNG
    // #11
    // COND:
    // §FS_FAM2_WALL=§SI
    // THEN:
    // *SET *CON-A=*COL
    // *SET *CON-B=*LUNG
    // *SET *S2=*LUNG
    // #12
    // COND:
    // (§FS_FAM2_ISOLA=§SI ) AND (§FS_ACC_PRI<>§SI ) AND (§FS_ACC_PRI_02<>§SI ) AND (§FS_ACC_CEN<>§SI ) AND (§FS_ACC_FIN<>§SI )
    // THEN:
    // *SET *CF=#0
    // #13
    // COND:
    // ( §FS_FAM2_ISOLA=§SI ) AND ( §FS_ACC_PRI=§SI ) AND ( §FS_ACC_DX_SX=§SI )
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_FAM2_ADDF') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§FS_ACC_CEN') != vars.get('§SI'))) {
        vars.setCON_A(vars.getCOL());
        vars.setCON_B(vars.getLUNG());
        vars.setS2(vars.getLUNG());
    }
    
    //#2
    if (vars.get('§FS_FAM2_ISOLA') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#3
    if ((vars.get('§FS_FAM2_ADDF') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) || (vars.get('§FS_ACC_PRI_02') == vars.get('§SI')))) {
        vars.setCON_A(vars.getCOL());
        vars.setCON_B(vars.getLUNG());
        vars.setS2(vars.getLUNG());
    }
    
    //#4
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'SX') && (vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§FS_ACC_CEN') != vars.get('§SI')) && (vars.get('§FS_ACC_FIN') != vars.get('§SI'))) {
        vars.setCF(0);
    }
    
    //#5
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'DX') && (vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§FS_ACC_CEN') != vars.get('§SI')) && (vars.get('§FS_ACC_FIN') != vars.get('§SI'))) {
        vars.setCON_A(vars.getCOL());
        vars.setCON_B(vars.getLUNG());
        vars.setS2(vars.getLUNG());
    }
    
    //#6
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01') && ((vars.get('§FS_ACC_CEN') == vars.get('§SI')) || (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'SX'))) {
        vars.setCF(0);
    }
    
    //#7
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && ((vars.get('§FS_ACC_CEN') == vars.get('§SI')) || (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'SX'))) {
        vars.setCF(0);
    }
    
    //#8
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'DX')) {
        vars.setCON_A(vars.getCOL());
        vars.setCON_B(vars.getLUNG());
        vars.setS2(vars.getLUNG());
    }
    
    //#9
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'SX') && ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) || (vars.get('§FS_ACC_PRI_02') == vars.get('§SI')))) {
        vars.setCF(0);
    }
    
    //#10
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'DX') && ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) || (vars.get('§FS_ACC_PRI_02') == vars.get('§SI')))) {
        vars.setCON_A(vars.getCOL());
        vars.setCON_B(vars.getLUNG());
        vars.setS2(vars.getLUNG());
    }
    
    //#11
    if (vars.get('§FS_FAM2_WALL') == vars.get('§SI')) {
        vars.setCON_A(vars.getCOL());
        vars.setCON_B(vars.getLUNG());
        vars.setS2(vars.getLUNG());
    }
    
    //#12
    if ((vars.get('§FS_FAM2_ISOLA') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§FS_ACC_CEN') != vars.get('§SI')) && (vars.get('§FS_ACC_FIN') != vars.get('§SI'))) {
        vars.setCF(0);
    }
    
    //#13
    if ((vars.get('§FS_FAM2_ISOLA') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    
    // GENERATED

    return vars.output;
};
