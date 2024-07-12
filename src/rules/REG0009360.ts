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

export const REG0009360: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009360
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // *SET §DUMMYB1 = ''
    // #2
    // COND:
    // §SP_GU_FRON_QU = '05'
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §FS_FAM2_CLI_ZIP = §SI
    // THEN:
    // *SET §DUMMYN2 = #8,8
    // #4
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET §DUMMYN1 = [§LARG - §DUMMYN2]
    // #5
    // COND:
    // §FS_CLI_ZIP_TWI = §SI
    // THEN:
    // *SET §DUMMYN1 = [§L_FRONTALE + #2]
    // #6
    // COND:
    // §FS_CLI_TWI_BG = §SI
    // THEN:
    // *SET §DUMMYN1 = [§L_FRONTALE + #2]
    // #7
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = [§DUMMYN1 / #100]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    vars.setDUMMYB1('');
    
    //#2
    if (vars.get('§SP_GU_FRON_QU') == '05') {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#3
    if (vars.get('§FS_FAM2_CLI_ZIP') == vars.get('§SI')) {
        vars.setDUMMYN2(8.8);
    }
    
    //#4
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§LARG') - vars.get('§DUMMYN2'));
    }
    
    //#5
    if (vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§L_FRONTALE') + 2);
    }
    
    //#6
    if (vars.get('§FS_CLI_TWI_BG') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§L_FRONTALE') + 2);
    }
    
    //#7
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1') / 100);
    }
    // GENERATED

    return vars.output;
};
