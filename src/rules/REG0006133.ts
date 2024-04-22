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

export const REG0006133: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006133
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // *SET *CON-A=§VERN_PLAST
    // #2
    // COND:
    // §FS_FAM2_CLI_ZIP = §SI  OR §FS_FAM2_CLI_CAB = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §FS_CLI_ZIP_TWI = §SI
    // THEN:
    // *SET *CF = #0
    // #4
    // COND:
    // §POS_COMANDO_QU = 'C'
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #5
    // COND:
    // §POS_COMANDO_QU = 'D'
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #6
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #1
    // #7
    // COND:
    // §FS_CLI_ZIP_TWI = §SI
    // THEN:
    // *SET *CF = #1
    // #8
    // COND:
    // §FS_CLI_TWI_BG = §SI
    // THEN:
    // *SET *CF = #1
    // #9
    // COND:
    // §FS_GU_COM = §SI
    // THEN:
    // *SET *CF = #0
    // #10
    // COND:
    // §FS_CLI_CAB_NAK = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    vars.setCON_A(vars.get('§VERN_PLAST'));
    
    //#2
    if (vars.get('§FS_FAM2_CLI_ZIP') == vars.get('§SI') || vars.get('§FS_FAM2_CLI_CAB') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#3
    if (vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#4
    if (vars.get('§POS_COMANDO_QU') == 'C') {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#5
    if (vars.get('§POS_COMANDO_QU') == 'D') {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#6
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#7
    if (vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#8
    if (vars.get('§FS_CLI_TWI_BG') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#9
    if (vars.get('§FS_GU_COM') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#10
    if (vars.get('§FS_CLI_CAB_NAK') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    // GENERATED

    return vars.output;
};
