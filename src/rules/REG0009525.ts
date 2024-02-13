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

export const REG0009525: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009525
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *LG = ''
    // #2
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // *SET *CON-A = §VERN_GUIDE
    // #3
    // COND:
    // §L_GUIDA_FIX > #0
    // THEN:
    // *SET §DUMMYN1 = §L_GUIDA_FIX
    // #4
    // COND:
    // §FS_CLI_ZIP_GH = §SI
    // THEN:
    // *SET §DUMMYN1 = [§ALTE_TC - #15,4]
    // #5
    // COND:
    // §FS_CLI_ZIP_15 = §SI
    // THEN:
    // *SET §DUMMYN1 = [§ALTE_TC - #15,5]
    // #6
    // THEN:
    // *SET *CON-B = [§DUMMYN1 + §AUM_GUI_SX]
    // #7
    // COND:
    // §FS_GU_38 = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setLG('');
    
    //#2
    vars.setCF(0);
    vars.setDUMMYN1(0);
    vars.setCON_A(vars.get('§VERN_GUIDE'));
    
    //#3
    if (vars.get('§L_GUIDA_FIX') > 0) {
        vars.setDUMMYN1(vars.get('§L_GUIDA_FIX'));
    }
    
    //#4
    if (vars.get('§FS_CLI_ZIP_GH') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§ALTE_TC') - 15.4);
    }
    
    //#5
    if (vars.get('§FS_CLI_ZIP_15') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§ALTE_TC') - 15.5);
    }
    
    //#6
    vars.setCON_B(vars.get('§DUMMYN1') + vars.get('§AUM_GUI_SX'));
    
    //#7
    if (vars.get('§FS_GU_38') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
