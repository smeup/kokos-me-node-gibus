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

export const REG0004706: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004706
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §FS_FAM2_ISOLA=§SI ) AND ( §FS_ACC_PRI=§SI ) AND ( §FS_ACC_SX_DX=§SI )
    // THEN:
    // *SET *CON-A=*COL
    // *SET *CON-B=*LUNG
    // *SET *S2=*LUNG
    // #2
    // COND:
    // (§FS_FAM2_ISOLA=§SI ) AND (§FS_ACC_PRI_02=§SI ) AND (§FS_ACC_DX_SX=§SI)
    // THEN:
    // *SET *CON-A=*COL
    // *SET *CON-B=*LUNG
    // *SET *S2=*LUNG
    // #3
    // COND:
    // ((§FS_FAM2_ISOLA=§SI ) OR (§FS_FAM2_ADDF=§SI)) AND (§FS_ACC_CEN=§SI ) AND (§TI_ACC_TWI='02') AND (§FS_ACC_DX_SX=§SI )
    // THEN:
    // *SET *CON-A=*COL
    // *SET *CON-B=*LUNG
    // *SET *S2=*LUNG
    // #4
    // COND:
    // (§FS_FAM2_ISOLA=§SI ) AND (§FS_ACC_FIN=§SI ) AND (§TI_ACC_TWI='02') AND (§FS_ACC_DX_SX=§SI )
    // THEN:
    // *SET *CF=#0
    // #5
    // COND:
    // ( §FS_FAM2_ADDF=§SI ) AND ( §FS_ACC_DX_SX=§SI ) AND (§FS_ACC_PRI<>§SI ) AND ( §FS_ACC_PRI_02<>§SI ) AND (§FS_ACC_CEN<>§SI )
    // THEN:
    // *SET *CF=#0
    // #6
    // COND:
    // ( §FS_FAM2_ADDF=§SI ) AND ( §FS_ACC_DX_SX=§SI ) AND (§FS_ACC_PRI=§SI )
    // THEN:
    // *SET *CF=#0
    // #7
    // COND:
    // ( §FS_FAM2_ADDF=§SI ) AND (§FS_ACC_PRI_02=§SI ) AND (§FS_ACC_DX_SX=§SI )
    // THEN:
    // *SET *CON-A=*COL
    // *SET *CON-B=*LUNG
    // *SET *S2=*LUNG
    // #8
    // COND:
    // ( §FS_FAM2_ADDL=§SI ) AND (§LA_ADD_LAT='SX') AND (§FS_ACC_PRI<>§SI ) AND (§FS_ACC_PRI_02<>§SI ) AND (§FS_ACC_CEN<>§SI )      AND (§FS_ACC_FIN<>§SI )
    // THEN:
    // *SET *CF=#0
    // #9
    // COND:
    // ( §FS_FAM2_ADDL=§SI ) AND (§LA_ADD_LAT='DX') AND (§FS_ACC_PRI<>§SI ) AND (§FS_ACC_PRI_02<>§SI ) AND (§FS_ACC_CEN<>§SI )      AND (§FS_ACC_FIN<>§SI )
    // THEN:
    // *SET *CF=#0
    // #10
    // COND:
    // ( §FS_FAM2_ADDL=§SI ) AND (§TI_ACC_TWI='01') AND (§FS_ACC_CEN=§SI ) AND (§LA_ADD_LAT='SX')
    // THEN:
    // *SET *CON-A=*COL
    // *SET *CON-B=*LUNG
    // *SET *S2=*LUNG
    // #11
    // COND:
    // ( §FS_FAM2_ADDL=§SI ) AND ( §TI_ACC_TWI='01' ) AND ( §FS_ACC_FIN=§SI ) AND ( §LA_ADD_LAT='SX' )
    // THEN:
    // *SET *CF=#0
    // #12
    // COND:
    // ( §FS_FAM2_ADDL=§SI ) AND ( §LA_ADD_LAT='SX' ) AND ( §FS_ACC_PRI=§SI )
    // THEN:
    // *SET *CON-A=*COL
    // *SET *CON-B=*LUNG
    // *SET *S2=*LUNG
    // #13
    // COND:
    // ( §FS_FAM2_ADDL=§SI ) AND (§LA_ADD_LAT='DX') AND (§FS_ACC_PRI=§SI )
    // THEN:
    // *SET *CF=#0
    // #14
    // COND:
    // ( §FS_FAM2_ADDL=§SI ) AND ( §LA_ADD_LAT='SX' ) AND ( §FS_ACC_PRI_02=§SI )
    // THEN:
    // *SET *CON-A=*COL
    // *SET *CON-B=*LUNG
    // *SET *S2=*LUNG
    // #15
    // COND:
    // §FS_FAM2_WALL=§SI
    // THEN:
    // *SET *CF=#0
    // #16
    // COND:
    // (§FS_FAM2_ISOLA=§SI ) AND (§FS_ACC_PRI<>§SI ) AND (§FS_ACC_PRI_02<>§SI ) AND (§FS_ACC_CEN<>§SI ) AND (§FS_ACC_FIN<>§SI )
    // THEN:
    // *SET *CF=#0
    // #17
    // COND:
    // ( §FS_FAM2_ISOLA=§SI ) AND ( §FS_ACC_PRI=§SI ) AND ( §FS_ACC_DX_SX=§SI )
    // THEN:
    // *SET *CF=#0
    // #18
    // COND:
    // ( §FS_FAM2_ADDF=§SI ) AND (§TI_ACC_TWI='02') AND (§FS_ACC_FIN=§SI )
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    
    //#1
    if ((vars.get('§FS_FAM2_ISOLA') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI'))) {
        vars.setCON_A(vars.getCOL());
        vars.setCON_B(vars.getLUNG());
        vars.setS2(vars.getLUNG());
    }
    //#2
    if ((vars.get('§FS_FAM2_ISOLA') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI'))) {
        vars.setCON_A(vars.getCOL());
        vars.setCON_B(vars.getLUNG());
        vars.setS2(vars.getLUNG());
    }
    //#3
    if (((vars.get('§FS_FAM2_ISOLA') == vars.get('§SI')) || (vars.get('§FS_FAM2_ADDF') == vars.get('§SI'))) && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI'))) {
        vars.setCON_A(vars.getCOL());
        vars.setCON_B(vars.getLUNG());
        vars.setS2(vars.getLUNG());
    }
    //#4
    if ((vars.get('§FS_FAM2_ISOLA') == vars.get('§SI')) && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#5
    if ((vars.get('§FS_FAM2_ADDF') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§FS_ACC_CEN') != vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#6
    if ((vars.get('§FS_FAM2_ADDF') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#7
    if ((vars.get('§FS_FAM2_ADDF') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI'))) {
        vars.setCON_A(vars.getCOL());
        vars.setCON_B(vars.getLUNG());
        vars.setS2(vars.getLUNG());
    }
    //#8
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'SX') && (vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§FS_ACC_CEN') != vars.get('§SI')) && (vars.get('§FS_ACC_FIN') != vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#9
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'DX') && (vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§FS_ACC_CEN') != vars.get('§SI')) && (vars.get('§FS_ACC_FIN') != vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#10
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01') && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'SX')) {
        vars.setCON_A(vars.getCOL());
        vars.setCON_B(vars.getLUNG());
        vars.setS2(vars.getLUNG());
    }
    //#11
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01') && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'SX')) {
        vars.setCF(0);
    }
    //#12
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'SX') && (vars.get('§FS_ACC_PRI') == vars.get('§SI'))) {
        vars.setCON_A(vars.getCOL());
        vars.setCON_B(vars.getLUNG());
        vars.setS2(vars.getLUNG());
    }
    //#13
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'DX') && (vars.get('§FS_ACC_PRI') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#14
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'SX') && (vars.get('§FS_ACC_PRI_02') == vars.get('§SI'))) {
        vars.setCON_A(vars.getCOL());
        vars.setCON_B(vars.getLUNG());
        vars.setS2(vars.getLUNG());
    }
    //#15
    if (vars.get('§FS_FAM2_WALL') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#16
    if ((vars.get('§FS_FAM2_ISOLA') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§FS_ACC_CEN') != vars.get('§SI')) && (vars.get('§FS_ACC_FIN') != vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#17
    if ((vars.get('§FS_FAM2_ISOLA') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#18
    if ((vars.get('§FS_FAM2_ADDF') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && (vars.get('§FS_ACC_FIN') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
