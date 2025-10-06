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

export const REG0010444: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010444
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VR_LAME
    // *SET *CF = §NR_FRA_STE
    // #2
    // COND:
    // §FS_FAM2_JOY = §SI
    // THEN:
    // *SET *CON-B = [§LARG - #20,2]
    // #3
    // COND:
    // §FS_FAM2_TWIST = §SI
    // THEN:
    // *SET *CON-B = [§LARG - #33,1]
    // #4
    // COND:
    // §FS_FAM2_VARIA = §SI
    // THEN:
    // *SET *CON-B = [§LARG - #40]
    // #5
    // COND:
    // §FS_FAM2_VARIA = §SI AND §FS_ACC_LAT_SX = §SI
    // THEN:
    // *SET *CON-B = [§LARG - #35,5]
    // #6
    // COND:
    // §FS_FAM2_VARIA = §SI AND §FS_ACC_LAT_DX = §SI
    // THEN:
    // *SET *CON-B = [§LARG - #35,5]
    // #7
    // COND:
    // §FS_FAM2_VARIA = §SI AND §FS_ACC_LAT_DX = §SI AND §FS_ACC_LAT_SX = §SI
    // THEN:
    // *SET *CON-B = [§LARG - #31,2]
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VR_LAME'));
    vars.setCF(vars.get('§NR_FRA_STE'));
    
    //#2
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§LARG') - 20.2);
    }
    
    //#3
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§LARG') - 33.1);
    }
    
    //#4
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§LARG') - 40);
    }
    
    //#5
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI') && vars.get('§FS_ACC_LAT_SX') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§LARG') - 35.5);
    }
    
    //#6
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI') && vars.get('§FS_ACC_LAT_DX') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§LARG') - 35.5);
    }
    
    //#7
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI') && vars.get('§FS_ACC_LAT_DX') == vars.get('§SI') && vars.get('§FS_ACC_LAT_SX') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§LARG') - 31.2);
    }
    // GENERATED

    return vars.output;
};
