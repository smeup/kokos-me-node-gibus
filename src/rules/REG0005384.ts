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

export const REG0005384: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005384
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // *SET *CON-A = §VERN_1_COM
    // #2
    // COND:
    // §FS_STA_MUR_ANT2 = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_ACC_LAT_ANT = §SI OR ( §FS_ADD_LAT_ANT = §SI AND §FS_STA_MUR_ANT2 = §SI )
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // §FS_ACC_LAT_DX = §SI OR ( §FS_ADD_LAT_DX = §SI AND  §FS_STA_MUR_ANT2 = §SI )
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #5
    // COND:
    // §DUMMYB1 = §SI OR §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #1
    // #6
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #0
    // #7
    // COND:
    // §FS_MON_ANT2 = §SI AND §FS_ACC_LAT_ANT <> §SI AND §FS_ACC_LAT_DX <> §SI
    // THEN:
    // *SET *CF = #0
    // #8
    // THEN:
    // *SET *CON-B = #30,8
    // #9
    // COND:
    // §FS_MON_ANT2 = §SI
    // THEN:
    // *SET *CON-B = #29,8
    // #10
    // COND:
    // §FS_AN_AGG_MUR2 = §SI
    // THEN:
    // *SET *CON-B = #29,8
    // #11
    // THEN:
    // *SET *S2 = *CON-B
    // #12
    // COND:
    // §FS_FAM2_WALL = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1("");
    vars.setDUMMYB2("");
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#2
    if (vars.get('§FS_STA_MUR_ANT2') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI') || (vars.get('§FS_ADD_LAT_ANT') == vars.get('§SI') && vars.get('§FS_STA_MUR_ANT2') == vars.get('§SI'))) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#4
    if (vars.get('§FS_ACC_LAT_DX') == vars.get('§SI') || (vars.get('§FS_ADD_LAT_DX') == vars.get('§SI') && vars.get('§FS_STA_MUR_ANT2') == vars.get('§SI'))) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI') || vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#6
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#7
    if (vars.get('§FS_MON_ANT2') == vars.get('§SI') && vars.get('§FS_ACC_LAT_ANT') != vars.get('§SI') && vars.get('§FS_ACC_LAT_DX') != vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#8
    vars.setCON_B(30.8);
    
    //#9
    if (vars.get('§FS_MON_ANT2') == vars.get('§SI')) {
        vars.setCON_B(29.8);
    }
    
    //#10
    if (vars.get('§FS_AN_AGG_MUR2') == vars.get('§SI')) {
        vars.setCON_B(29.8);
    }
    
    //#11
    vars.setS2(vars.getCON_B());
    
    //#12
    if (vars.get('§FS_FAM2_WALL') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
