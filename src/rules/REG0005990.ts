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

export const REG0005990: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005990
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_PLAST
    // *SET *CF = #0
    // #2
    // COND:
    // ( §FS_CLI_ZIP_9=§SI ) OR ( §FS_CLI_ZIP_11=§SI ) OR ( §FS_CLI_ZIP_13=§SI ) OR ( §FS_CLI_NAK=§SI ) OR ( §FS_CLI_ZIP_15=§SI )
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_CLI_ZIP_GH = §SI
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_GU_38 = §SI AND §FS_FAM2_CLI_ZIP = §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §FS_GU_SCO = §SI AND §FS_FAM2_CLI_ZIP = §SI
    // THEN:
    // *SET *CF = #1
    // #6
    // COND:
    // §LARG < #120
    // THEN:
    // *SET *LG = ''
    // #7
    // COND:
    // §FS_GU_56 = §SI
    // THEN:
    // *SET *CF = #0
    // #8
    // COND:
    // §FS_NO_GUI = §SI
    // THEN:
    // *SET *CF = #0
    // #9
    // COND:
    // §MS_GU_CLI_ZIP = '01' AND §FS_FAM2_CLI_ZIP = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_PLAST'));
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_CLI_ZIP_9') == vars.get('§SI') || vars.get('§FS_CLI_ZIP_11') == vars.get('§SI') || vars.get('§FS_CLI_ZIP_13') == vars.get('§SI') || vars.get('§FS_CLI_NAK') == vars.get('§SI') || vars.get('§FS_CLI_ZIP_15') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_CLI_ZIP_GH') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§FS_GU_38') == vars.get('§SI') && vars.get('§FS_FAM2_CLI_ZIP') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('§FS_GU_SCO') == vars.get('§SI') && vars.get('§FS_FAM2_CLI_ZIP') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#6
    if (vars.get('§LARG') < 120) {
        vars.setLG('');
    }
    
    //#7
    if (vars.get('§FS_GU_56') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#8
    if (vars.get('§FS_NO_GUI') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#9
    if (vars.get('§MS_GU_CLI_ZIP') == '01' && vars.get('§FS_FAM2_CLI_ZIP') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
