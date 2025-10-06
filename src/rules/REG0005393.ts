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

export const REG0005393: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005393
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #1
    // *SET *CON-A = §VERN_1_COM
    // #2
    // COND:
    // §FS_STA_MUR_POS1 = §SI
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §FS_MON_POS_1 <> §SI AND §TI_ANG_POS1 <> '01'  AND §TI_ANG_POS1 <> '02'
    // THEN:
    // *SET *CF = #0
    // #4
    // COND:
    // §FS_MON_POS_1= §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §FS_ACC_LAT_POS = §SI
    // THEN:
    // *SET *CF = #0
    // #6
    // COND:
    // §FS_ACC_LAT_SX = §SI
    // THEN:
    // *SET *CF = #0
    // #7
    // THEN:
    // *SET *CON-B = #30,8
    // #8
    // COND:
    // §FS_MON_POS_1 = §SI
    // THEN:
    // *SET *CON-B = #30,5
    // #9
    // COND:
    // §FS_PO_AGG_MUR1 = §SI
    // THEN:
    // *SET *CON-B = #30,5
    // #10
    // THEN:
    // *SET *S2 = *CON-B
    // """
    // RESPONSE:
    //#1
    vars.setCF(1);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#2
    if (vars.get('§FS_STA_MUR_POS1') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#3
    if (vars.get('§FS_MON_POS_1') != vars.get('§SI') && vars.get('§TI_ANG_POS1') != '01' && vars.get('§TI_ANG_POS1') != '02') {
        vars.setCF(0);
    }
    
    //#4
    if (vars.get('§FS_MON_POS_1') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('§FS_ACC_LAT_POS') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#6
    if (vars.get('§FS_ACC_LAT_SX') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#7
    vars.setCON_B(30.8);
    
    //#8
    if (vars.get('§FS_MON_POS_1') == vars.get('§SI')) {
        vars.setCON_B(30.5);
    }
    
    //#9
    if (vars.get('§FS_PO_AGG_MUR1') == vars.get('§SI')) {
        vars.setCON_B(30.5);
    }
    
    //#10
    vars.setS2(vars.getCON_B());
    // GENERATED

    return vars.output;
};
