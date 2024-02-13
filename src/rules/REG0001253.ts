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

export const REG0001253: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001253
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // *SET *CON-A = §VERN_GUIDE
    // #2
    // COND:
    // §AUM_GUI_DX = §AUM_GUI_SX
    // ELSE:
    // *SET *LG = ''
    // #3
    // COND:
    // §FS_CLI_ZIP_15 = §SI
    // THEN:
    // *SET *CF = #2
    // *SET §DUMMYN1 = [§ALTE_TC - #15,5]
    // #4
    // COND:
    // §FS_CLI_ZIP_GH = §SI
    // THEN:
    // *SET *CF = #2
    // *SET §DUMMYN1 = [§ALTE_TC - #15,4]
    // #5
    // COND:
    // §FS_CLI_ZIP_GH15 = §SI
    // THEN:
    // *SET *CF = #2
    // *SET §DUMMYN1 = [§ALTE_TC - #19,7]
    // #6
    // COND:
    // §L_GUIDA_FIX > #0
    // THEN:
    // *SET *CF = #2
    // *SET §DUMMYN1 = §L_GUIDA_FIX
    // #7
    // THEN:
    // *SET *CON-B = [§DUMMYN1 + §AUM_GUI_DX]
    // #8
    // COND:
    // §FS_NO_GUI = §SI
    // THEN:
    // *SET *LG = ''
    // #9
    // COND:
    // *CF = #2 AND (§TI_GU_T01 = '02' OR §TI_GU_T01 = '03')
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    vars.setCON_A(vars.get('§VERN_GUIDE'));
    //#2
    if (vars.get('§AUM_GUI_DX') == vars.get('§AUM_GUI_SX')) {
    } else {
        vars.setLG('');
    }
    //#3
    if (vars.get('§FS_CLI_ZIP_15') == vars.get('§SI')) {
        vars.setCF(2);
        vars.setDUMMYN1(vars.get('§ALTE_TC') - 15.5);
    }
    //#4
    if (vars.get('§FS_CLI_ZIP_GH') == vars.get('§SI')) {
        vars.setCF(2);
        vars.setDUMMYN1(vars.get('§ALTE_TC') - 15.4);
    }
    //#5
    if (vars.get('§FS_CLI_ZIP_GH15') == vars.get('§SI')) {
        vars.setCF(2);
        vars.setDUMMYN1(vars.get('§ALTE_TC') - 19.7);
    }
    //#6
    if (vars.get('§L_GUIDA_FIX') > 0) {
        vars.setCF(2);
        vars.setDUMMYN1(vars.get('§L_GUIDA_FIX'));
    }
    //#7
    vars.setCON_B(vars.get('§DUMMYN1') + vars.get('§AUM_GUI_DX'));
    //#8
    if (vars.get('§FS_NO_GUI') == vars.get('§SI')) {
        vars.setLG('');
    }
    //#9
    if (vars.get('§CF') == 2 && (vars.get('§TI_GU_T01') == '02' || vars.get('§TI_GU_T01') == '03')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
