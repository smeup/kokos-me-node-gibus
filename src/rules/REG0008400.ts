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

export const REG0008400: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008400
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // *SET *CON-A=§VERN_PLAST
    // #2
    // COND:
    // ( §FS_CLI_ZIP_9=§SI ) OR ( §FS_CLI_ZIP_11=§SI ) OR ( §FS_CLI_ZIP_13=§SI ) OR ( §FS_CLI_NAK=§SI ) OR ( §FS_CLI_ZIP_15=§SI )
    // THEN:
    // *SET *CF=#1
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
    // §MS_GU_CLI_ZIP = '01' AND §FS_FAM2_CLI_ZIP = §SI
    // THEN:
    // *SET *CF = #1
    // #7
    // COND:
    // §FS_GU_56 = §SI
    // THEN:
    // *SET *CF = #0
    // #8
    // COND:
    // §LARG >= #120
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_PLAST'));
    
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
    if (vars.get('§MS_GU_CLI_ZIP') == '01' && vars.get('§FS_FAM2_CLI_ZIP') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#7
    if (vars.get('§FS_GU_56') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#8
    if (vars.get('§LARG') >= 120) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
