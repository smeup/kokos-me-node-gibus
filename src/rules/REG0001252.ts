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

export const REG0001252: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001252
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §L_GUIDA_MOB > #0
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_CLI_ZIP_TWI = §SI
    // THEN:
    // *SET *CF = #2
    // #4
    // COND:
    // §FS_CLI_ZIP_15 = §SI OR §FS_CLI_ZIP_GH15 = §SI
    // THEN:
    // *SET *CF =  #1
    // #5
    // COND:
    // §FS_CLI_ZIP_GH = §SI
    // THEN:
    // *SET *CF = #1
    // #6
    // COND:
    // §FS_GU_56 = §SI
    // THEN:
    // *SET *LG = ''
    // #7
    // COND:
    // §FS_GU_SCO = §SI
    // THEN:
    // *SET *LG = ''
    // #8
    // COND:
    // §FS_NO_GUI = §SI
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§L_GUIDA_MOB') > 0) {
        vars.setCF(1);
    }
    //#3
    if (vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI')) {
        vars.setCF(2);
    }
    //#4
    if ((vars.get('§FS_CLI_ZIP_15') == vars.get('§SI')) || (vars.get('§FS_CLI_ZIP_GH15') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    //#5
    if (vars.get('§FS_CLI_ZIP_GH') == vars.get('§SI')) {
        vars.setCF(1);
    }
    //#6
    if (vars.get('§FS_GU_56') == vars.get('§SI')) {
        vars.setLG('');
    }
    //#7
    if (vars.get('§FS_GU_SCO') == vars.get('§SI')) {
        vars.setLG('');
    }
    //#8
    if (vars.get('§FS_NO_GUI') == vars.get('§SI')) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
