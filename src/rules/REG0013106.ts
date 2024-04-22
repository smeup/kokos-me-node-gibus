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

export const REG0013106: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013106
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CF = #0
    // #2
    // COND:
    // §POS_BAT_T01 = '02'
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_CLI_ZIP_9 = §SI
    // THEN:
    // *SET *CON-B = [ §ALTE_TC - #9,7 ]
    // #4
    // COND:
    // §FS_CLI_ZIP_GH = §SI
    // THEN:
    // *SET *CON-B = [ §ALTE_TC - #15,4 ]
    // #5
    // COND:
    // §FS_CLI_ZIP_11 = §SI
    // THEN:
    // *SET *CON-B = [ §ALTE_TC - #11,5 ]
    // #6
    // COND:
    // §FS_CLI_ZIP_11 = §SI AND §FS_UP = §SI
    // THEN:
    // *SET *CON-B = [ §ALTE_TC - #13,1 ]
    // #7
    // COND:
    // §FS_CLI_ZIP_13 = §SI
    // THEN:
    // *SET *CON-B = [ §ALTE_TC - #13,5 ]
    // #8
    // COND:
    // §FS_CLI_ZIP_13 = §SI AND §FS_UP = §SI
    // THEN:
    // *SET *CON-B = [ §ALTE_TC - #15,1 ]
    // #9
    // COND:
    // §FS_CLI_ZIP_15 = §SI
    // THEN:
    // *SET *CON-B = [ §ALTE_TC - #15,5 ]
    // #10
    // COND:
    // §FS_CLI_ZIP_GH15 = §SI
    // THEN:
    // *SET *CON-B = [ §ALTE_TC - #19,7 ]
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCF(0);
    
    //#2
    if (vars.get('§POS_BAT_T01') == '02') {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_CLI_ZIP_9') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§ALTE_TC') - 9.7);
    }
    
    //#4
    if (vars.get('§FS_CLI_ZIP_GH') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§ALTE_TC') - 15.4);
    }
    
    //#5
    if (vars.get('§FS_CLI_ZIP_11') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§ALTE_TC') - 11.5);
    }
    
    //#6
    if (vars.get('§FS_CLI_ZIP_11') == vars.get('§SI') && vars.get('§FS_UP') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§ALTE_TC') - 13.1);
    }
    
    //#7
    if (vars.get('§FS_CLI_ZIP_13') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§ALTE_TC') - 13.5);
    }
    
    //#8
    if (vars.get('§FS_CLI_ZIP_13') == vars.get('§SI') && vars.get('§FS_UP') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§ALTE_TC') - 15.1);
    }
    
    //#9
    if (vars.get('§FS_CLI_ZIP_15') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§ALTE_TC') - 15.5);
    }
    
    //#10
    if (vars.get('§FS_CLI_ZIP_GH15') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§ALTE_TC') - 19.7);
    }
    // GENERATED

    return vars.output;
};
