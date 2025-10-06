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

export const REG0009378: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009378
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // *SET *CON-A = §VERN_GUIDE
    // #2
    // COND:
    // §FS_CLI_ZIP_9 = §SI
    // THEN:
    // *SET §DUMMYN1 = #9,7
    // #3
    // COND:
    // §FS_CLI_ZIP_11 = §SI
    // THEN:
    // *SET §DUMMYN1 = #11,5
    // #4
    // COND:
    // §FS_CLI_ZIP_11 = §SI AND §FS_UP = §SI
    // THEN:
    // *SET §DUMMYN1 = #13,1
    // #5
    // COND:
    // §FS_CLI_ZIP_13 = §SI
    // THEN:
    // *SET §DUMMYN1 = #13,5
    // #6
    // COND:
    // §FS_CLI_ZIP_13 = §SI AND §FS_UP = §SI
    // THEN:
    // *SET §DUMMYN1 = #15,1
    // #7
    // COND:
    // §FS_CLI_ZIP_15 = §SI
    // THEN:
    // *SET §DUMMYN1 = #15,5
    // #8
    // COND:
    // §FS_CLI_ZIP_GH = §SI
    // THEN:
    // *SET §DUMMYN1 = #15,4
    // #9
    // COND:
    // §FS_CLI_NAK = §SI
    // THEN:
    // *SET §DUMMYN1 = #11,9
    // #10
    // COND:
    // §FS_CLI_ZIP_GH15 = §SI
    // THEN:
    // *SET §DUMMYN1 = #19,7
    // #11
    // COND:
    // §FS_GU_56 = §SI AND §DUMMYN1 > #0
    // THEN:
    // *SET *CF = 1
    // *SET *CON-B = [§ALTE_TC - §DUMMYN1]
    // *SET *S2 = [§ALTE_TC - §DUMMYN1]
    // #12
    // COND:
    // §TI_MIS_GUI = '02'
    // THEN:
    // *SET *CON-B = §L_GUIDA_FIX
    // *SET *S2 = §L_GUIDA_FIX
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    vars.setCON_A(vars.get('§VERN_GUIDE'));
    //#2
    if (vars.get('§FS_CLI_ZIP_9') == vars.get('§SI')) {
        vars.setDUMMYN1(9.7);
    }
    //#3
    if (vars.get('§FS_CLI_ZIP_11') == vars.get('§SI')) {
        vars.setDUMMYN1(11.5);
    }
    //#4
    if (vars.get('§FS_CLI_ZIP_11') == vars.get('§SI') && vars.get('§FS_UP') == vars.get('§SI')) {
        vars.setDUMMYN1(13.1);
    }
    //#5
    if (vars.get('§FS_CLI_ZIP_13') == vars.get('§SI')) {
        vars.setDUMMYN1(13.5);
    }
    //#6
    if (vars.get('§FS_CLI_ZIP_13') == vars.get('§SI') && vars.get('§FS_UP') == vars.get('§SI')) {
        vars.setDUMMYN1(15.1);
    }
    //#7
    if (vars.get('§FS_CLI_ZIP_15') == vars.get('§SI')) {
        vars.setDUMMYN1(15.5);
    }
    //#8
    if (vars.get('§FS_CLI_ZIP_GH') == vars.get('§SI')) {
        vars.setDUMMYN1(15.4);
    }
    //#9
    if (vars.get('§FS_CLI_NAK') == vars.get('§SI')) {
        vars.setDUMMYN1(11.9);
    }
    //#10
    if (vars.get('§FS_CLI_ZIP_GH15') == vars.get('§SI')) {
        vars.setDUMMYN1(19.7);
    }
    //#11
    if (vars.get('§FS_GU_56') == vars.get('§SI') && vars.get('§DUMMYN1') > 0) {
        vars.setCF(1);
        vars.setCON_B(vars.get('§ALTE_TC') - vars.get('§DUMMYN1'));
        vars.setS2(vars.get('§ALTE_TC') - vars.get('§DUMMYN1'));
    }
    //#12
    if (vars.get('§TI_MIS_GUI') == '02') {
        vars.setCON_B(vars.get('§L_GUIDA_FIX'));
        vars.setS2(vars.get('§L_GUIDA_FIX'));
    }
    // GENERATED

    return vars.output;
};
