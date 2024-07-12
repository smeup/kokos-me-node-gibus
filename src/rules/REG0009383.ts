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

export const REG0009383: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009383
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_GUIDE
    // #2
    // COND:
    // §FS_GU_SCO = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_CLI_ZIP_GH = §SI
    // THEN:
    // *SET *CON-B = [§ALTE_TC - #14,4]
    // *SET *S2 = [§ALTE_TC - #14,4]
    // #4
    // COND:
    // §FS_CLI_ZIP_11 = §SI
    // THEN:
    // *SET *CON-B = [§ALTE_TC - #11,5]
    // *SET *S2 = [§ALTE_TC - #11,5]
    // #5
    // COND:
    // §FS_CLI_ZIP_13 = §SI
    // THEN:
    // *SET *CON-B = [§ALTE_TC - #13,5]
    // *SET *S2 = [§ALTE_TC - #13,5]
    // #6
    // COND:
    // §TI_MIS_GUI = '02'
    // THEN:
    // *SET *CON-B = §L_GUIDA_MOB
    // *SET *S2 = §L_GUIDA_MOB
    // #7
    // COND:
    // §FS_CLI_ZIP_GH15 = §SI
    // THEN:
    // *SET *CON-B = [§ALTE_TC - #18,7]
    // *SET *S2 = [§ALTE_TC - #18,7]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_GUIDE'));
    
    //#2
    if (vars.get('§FS_GU_SCO') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_CLI_ZIP_GH') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§ALTE_TC') - 14.4);
        vars.setS2(vars.get('§ALTE_TC') - 14.4);
    }
    
    //#4
    if (vars.get('§FS_CLI_ZIP_11') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§ALTE_TC') - 11.5);
        vars.setS2(vars.get('§ALTE_TC') - 11.5);
    }
    
    //#5
    if (vars.get('§FS_CLI_ZIP_13') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§ALTE_TC') - 13.5);
        vars.setS2(vars.get('§ALTE_TC') - 13.5);
    }
    
    //#6
    if (vars.get('§TI_MIS_GUI') == '02') {
        vars.setCON_B(vars.get('§L_GUIDA_MOB'));
        vars.setS2(vars.get('§L_GUIDA_MOB'));
    }
    
    //#7
    if (vars.get('§FS_CLI_ZIP_GH15') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§ALTE_TC') - 18.7);
        vars.setS2(vars.get('§ALTE_TC') - 18.7);
    }
    // GENERATED

    return vars.output;
};
