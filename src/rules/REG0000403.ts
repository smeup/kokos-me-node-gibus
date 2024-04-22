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

export const REG0000403: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000403
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // *SET *CON-A = §VERN_CASSONETTO
    // #2
    // COND:
    // §L_CAS_INF_TG > 0
    // THEN:
    // *SET §DUMMYN1 = §L_CAS_INF_TG
    // *SET *CF = §NR_CAS_INF
    // #3
    // COND:
    // §FS_CLI_ZIP_GH = §SI
    // THEN:
    // *SET §DUMMYN1 = [§LARG - #1,5]
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_CLI_ZIP_GH = §SI AND §FS_GU_SCO = §SI
    // THEN:
    // *SET §DUMMYN1 = [§LARG - #7,6]
    // *SET *CF = #1
    // #5
    // COND:
    // §FS_CLI_ZIP_GH15 = §SI
    // THEN:
    // *SET §DUMMYN1 = [§LARG - #1,6]
    // *SET *CF = #1
    // #6
    // COND:
    // §FS_CLI_ZIP_GH15 = §SI AND §FS_GU_SCO = §SI
    // THEN:
    // *SET §DUMMYN1 = [§LARG - #7,7]
    // *SET *CF = #1
    // #7
    // COND:
    // §FS_CLI_CAB_15GH = §SI
    // THEN:
    // *SET §DUMMYN1 = [ §LARG - #1,6 ]
    // *SET *CF = #1
    // #8
    // COND:
    // §FS_CLI_CAB_11GH = §SI
    // THEN:
    // *SET §DUMMYN1 = [ §LARG - #1,5 ]
    // *SET *CF = #1
    // #9
    // COND:
    // §DUMMYN1 > #0
    // THEN:
    // *SET *CON-B = §DUMMYN1
    // #10
    // COND:
    // §FS_TEL_RUL = §SI
    // THEN:
    // *SET *LG = ''
    // #11
    // COND:
    // §FS_TEL_RUL_FRO = §SI
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    vars.setCON_A(vars.get('§VERN_CASSONETTO'));
    
    //#2
    if (vars.get('§L_CAS_INF_TG') > 0) {
        vars.setDUMMYN1(vars.get('§L_CAS_INF_TG'));
        vars.setCF(vars.get('§NR_CAS_INF'));
    }
    
    //#3
    if (vars.get('§FS_CLI_ZIP_GH') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§LARG') - 1.5);
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§FS_CLI_ZIP_GH') == vars.get('§SI') && vars.get('§FS_GU_SCO') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§LARG') - 7.6);
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('§FS_CLI_ZIP_GH15') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§LARG') - 1.6);
        vars.setCF(1);
    }
    
    //#6
    if (vars.get('§FS_CLI_ZIP_GH15') == vars.get('§SI') && vars.get('§FS_GU_SCO') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§LARG') - 7.7);
        vars.setCF(1);
    }
    
    //#7
    if (vars.get('§FS_CLI_CAB_15GH') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§LARG') - 1.6);
        vars.setCF(1);
    }
    
    //#8
    if (vars.get('§FS_CLI_CAB_11GH') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§LARG') - 1.5);
        vars.setCF(1);
    }
    
    //#9
    if (vars.get('§DUMMYN1') > 0) {
        vars.setCON_B(vars.get('§DUMMYN1'));
    }
    
    //#10
    if (vars.get('§FS_TEL_RUL') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#11
    if (vars.get('§FS_TEL_RUL_FRO') == vars.get('§SI')) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
