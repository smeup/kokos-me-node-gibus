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

export const REG0000815: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000815
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // #2
    // COND:
    // ( §FS_13_QU = §SI ) OR ( §FS_11_QUJ = §SI ) OR ( §FS_FAM2_CLI_ZIP = §SI) OR (§FS_13_QU_GC = §SI) OR (§FS_FAM2_TOLO = §SI)
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §FS_FAM2_CLI_CAB = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // §FS_CLI_ZIP_GH15 = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #5
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = #1
    // #6
    // THEN:
    // *SET *CON-A = 'P072'
    // #7
    // COND:
    // §VERN_ASTA = '0055' OR §VERN_ASTA = '0053'
    // THEN:
    // *SET *CON-A = 'P055'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1('');
    
    //#2
    if (vars.get('§FS_13_QU') == vars.get('§SI') || vars.get('§FS_11_QUJ') == vars.get('§SI') || vars.get('§FS_FAM2_CLI_ZIP') == vars.get('§SI') || vars.get('§FS_13_QU_GC') == vars.get('§SI') || vars.get('§FS_FAM2_TOLO') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#3
    if (vars.get('§FS_FAM2_CLI_CAB') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#4
    if (vars.get('§FS_CLI_ZIP_GH15') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#6
    vars.setCON_A('P072');
    
    //#7
    if (vars.get('§VERN_ASTA') == '0055' || vars.get('§VERN_ASTA') == '0053') {
        vars.setCON_A('P055');
    }
    // GENERATED

    return vars.output;
};
