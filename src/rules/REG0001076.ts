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

export const REG0001076: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001076
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // ( §SP_GU_FRON_QU = '02' )
    // ELSE:
    // *SET *LG = ''
    // #3
    // COND:
    // §L_SPAZ_FRONTALE > #0
    // THEN:
    // *SET §DUMMYN1  = §L_SPAZ_FRONTALE
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_FAM2_CLI_ZIP = §SI
    // THEN:
    // *SET §DUMMYN1 = [§L_FRONTALE + #2]
    // *SET *CF = #1
    // #5
    // THEN:
    // *SET *CON-B = §DUMMYN1
    // #6
    // THEN:
    // *SET *CON-A = 'P072'
    // #7
    // COND:
    // §VERN_1_COM = '0055' OR §VR_ABB = '01'
    // THEN:
    // *SET *CON-A = 'P055'
    // #8
    // COND:
    // §VERN_1_COM = '0053' OR §VR_ABB = '02'
    // THEN:
    // *SET *CON-A = 'P053'
    // #9
    // COND:
    // §FS_DUE_2G_ZIP = §SI
    // THEN:
    // *SET *CF = #2
    // #10
    // COND:
    // §FS_CLI_ZIP_TWI = §SI
    // THEN:
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§SP_GU_FRON_QU') == '02') {
    } else {
        vars.setLG('');
    }
    //#3
    if (vars.get('§L_SPAZ_FRONTALE') > 0) {
        vars.setDUMMYN1(vars.get('§L_SPAZ_FRONTALE'));
        vars.setCF(1);
    }
    //#4
    if (vars.get('§FS_FAM2_CLI_ZIP') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§L_FRONTALE') + 2);
        vars.setCF(1);
    }
    //#5
    vars.setCON_B(vars.get('§DUMMYN1'));
    //#6
    vars.setCON_A('P072');
    //#7
    if (vars.get('§VERN_1_COM') == '0055' || vars.get('§VR_ABB') == '01') {
        vars.setCON_A('P055');
    }
    //#8
    if (vars.get('§VERN_1_COM') == '0053' || vars.get('§VR_ABB') == '02') {
        vars.setCON_A('P053');
    }
    //#9
    if (vars.get('§FS_DUE_2G_ZIP') == vars.get('§SI')) {
        vars.setCF(2);
    }
    //#10
    if (vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI')) {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
