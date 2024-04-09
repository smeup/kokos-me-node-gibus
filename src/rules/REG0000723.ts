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

export const REG0000723: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000723
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // *SET *CON-A = §VERN_CASSONETTO
    // #2
    // COND:
    // §FS_TEL_RUL = §SI OR §FS_TEL_RUL_FRO = §SI
    // THEN:
    // *SET *LG = ''
    // #3
    // COND:
    // §L_CAS_MOB_TG > #0
    // THEN:
    // *SET §DUMMYN1 = §L_CAS_MOB_TG
    // *SET *CF = §NR_CAS_MOB
    // #4
    // COND:
    // §FS_CLI_ZIP_15 = §SI
    // THEN:
    // *SET §DUMMYN1 = [§LARG - #1,5]
    // *SET *CF = #1
    // #5
    // COND:
    // §FS_CLI_CAB_11 = §SI OR §FS_CLI_CAB_13 = §SI
    // THEN:
    // *SET §DUMMYN1 = [§LARG - #1,6]
    // *SET *CF = #1
    // #6
    // COND:
    // §FS_CLI_ZIP_GH15 = §SI
    // THEN:
    // *SET §DUMMYN1 = [§LARG - #1,6]
    // *SET *CF = #1
    // #7
    // COND:
    // §FS_CLI_CAB_15GH = §SI
    // THEN:
    // *SET §DUMMYN1 = [§LARG - #1,6]
    // *SET *CF = #1
    // #8
    // COND:
    // §DUMMYN1 > #0
    // THEN:
    // *SET *CON-B = §DUMMYN1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    vars.setCON_A(vars.get('§VERN_CASSONETTO'));
    
    //#2
    if (vars.get('§FS_TEL_RUL') == vars.get('§SI') || vars.get('§FS_TEL_RUL_FRO') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#3
    if (vars.get('§L_CAS_MOB_TG') > 0) {
        vars.setDUMMYN1(vars.get('§L_CAS_MOB_TG'));
        vars.setCF(vars.get('§NR_CAS_MOB'));
    }
    
    //#4
    if (vars.get('§FS_CLI_ZIP_15') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§LARG') - 1.5);
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('§FS_CLI_CAB_11') == vars.get('§SI') || vars.get('§FS_CLI_CAB_13') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§LARG') - 1.6);
        vars.setCF(1);
    }
    
    //#6
    if (vars.get('§FS_CLI_ZIP_GH15') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§LARG') - 1.6);
        vars.setCF(1);
    }
    
    //#7
    if (vars.get('§FS_CLI_CAB_15GH') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§LARG') - 1.6);
        vars.setCF(1);
    }
    
    //#8
    if (vars.get('§DUMMYN1') > 0) {
        vars.setCON_B(vars.get('§DUMMYN1'));
    }
    // GENERATED

    return vars.output;
};
