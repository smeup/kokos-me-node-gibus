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

export const REG0002995: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002995
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_RULLO_85 = §SI
    // ELSE:
    // *SET *LG = ''
    // #2
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §FS_FAM2_TEKA = §SI OR §FS_FAM2_DIM_TC = §SI OR §FS_FAM2_SP = §SI OR §FS_FORGIATO = §SI
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_CLI_CAB_NAK = §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §FS_CLI_CAB_13 = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_RULLO_85') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    //#2
    vars.setCF(0);
    
    //#3
    if (vars.get('§FS_FAM2_TEKA') == vars.get('§SI') || vars.get('§FS_FAM2_DIM_TC') == vars.get('§SI') || vars.get('§FS_FAM2_SP') == vars.get('§SI') || vars.get('§FS_FORGIATO') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§FS_CLI_CAB_NAK') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('§FS_CLI_CAB_13') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
