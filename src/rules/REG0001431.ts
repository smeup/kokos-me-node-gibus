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

export const REG0001431: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001431
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // #2
    // COND:
    // §FS_CLI_ZIP_9 = §SI
    // THEN:
    // *SET §DUMMYN1 = [§ALTE_TC - #9,7]
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_CLI_ZIP_11 = §SI
    // THEN:
    // *SET §DUMMYN1 = [§ALTE_TC - #11,1]
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_CLI_ZIP_13 = §SI
    // THEN:
    // *SET §DUMMYN1 = [§ALTE_TC - #13,1]
    // *SET *CF = #1
    // #5
    // COND:
    // §FS_CLI_NAK = §SI
    // THEN:
    // *SET §DUMMYN1 = [§ALTE_TC - #11,9]
    // *SET *CF = #1
    // #6
    // COND:
    // §FS_CLI_ZIP_15 = §SI
    // THEN:
    // *SET §DUMMYN1 = [§ALTE_TC - #15,1]
    // *SET *CF = #1
    // #7
    // COND:
    // §FS_CLI_ZIP_GH = §SI
    // THEN:
    // *SET §DUMMYN1 = [§ALTE_TC - #12]
    // *SET *CF = #1
    // #8
    // COND:
    // §FS_CLI_ZIP_11 = §SI AND §FS_UP = §SI
    // THEN:
    // *SET §DUMMYN1 = [§ALTE_TC - #13,1]
    // *SET *CF = #1
    // #9
    // COND:
    // §FS_CLI_ZIP_13 = §SI AND §FS_UP = §SI
    // THEN:
    // *SET §DUMMYN1 = [§ALTE_TC - #15,1]
    // *SET *CF = #1
    // #10
    // COND:
    // §FS_CLI_ZIP_GH15 = §SI
    // THEN:
    // *SET §DUMMYN1 = [§ALTE_TC - #15,8]
    // *SET *CF = #1
    // #11
    // COND:
    // §NR_PORTA_ZIP >= #2
    // THEN:
    // *SET §DUMMYN1 = §L_PORTA_ZIP
    // *SET *CF = #1
    // #12
    // COND:
    // §NR_PORTA_ZIP >= #2 AND §AUM_GUI_DX > #0
    // THEN:
    // *SET §DUMMYN1 = [§L_PORTA_ZIP + §AUM_GUI_DX]
    // *SET *CF = #1
    // #13
    // THEN:
    // *SET *CON-B = §DUMMYN1
    // #14
    // THEN:
    // *SET *CON-A = 'P072'
    // #15
    // COND:
    // ( §FS_FAM2_DUETTO = §SI ) AND (§VERN_1_COM  = '0055' OR §VERN_1_COM  = '0053' OR §VERN_1_COM  = '0065')
    // THEN:
    // *SET *CON-A = 'P055'
    // #16
    // COND:
    // ( §FS_11_QUJ = §SI ) OR ( §FS_13_QU = §SI ) OR ( §FS_GUI_11_13 = §SI )
    // THEN:
    // *SET *CON-A = 'P065'
    // #17
    // COND:
    // ( §FS_FAM2_DUETTO = §SI ) AND (§VR_ABB = '01' OR §VR_ABB = '02' OR §VR_ABB = '03')
    // THEN:
    // *SET *CON-A = 'P055'
    // #18
    // COND:
    // §FS_CHI_VAR = §SI OR §FS_CLI_ZIP_TWI = §SI OR §FS_CLI_TWI_BG = §SI
    // THEN:
    // *SET *CON-A = 'P065'
    // #19
    // COND:
    // §FS_GU_56 = §SI AND §FS_FAM2_CLI_ZIP = §SI
    // THEN:
    // *SET *CON-A = 'P065'
    // #20
    // COND:
    // §FS_NO_GUI = §SI
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    //#2
    if (vars.get('§FS_CLI_ZIP_9') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§ALTE_TC') - 9.7);
        vars.setCF(1);
    }
    //#3
    if (vars.get('§FS_CLI_ZIP_11') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§ALTE_TC') - 11.1);
        vars.setCF(1);
    }
    //#4
    if (vars.get('§FS_CLI_ZIP_13') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§ALTE_TC') - 13.1);
        vars.setCF(1);
    }
    //#5
    if (vars.get('§FS_CLI_NAK') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§ALTE_TC') - 11.9);
        vars.setCF(1);
    }
    //#6
    if (vars.get('§FS_CLI_ZIP_15') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§ALTE_TC') - 15.1);
        vars.setCF(1);
    }
    //#7
    if (vars.get('§FS_CLI_ZIP_GH') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§ALTE_TC') - 12);
        vars.setCF(1);
    }
    //#8
    if (vars.get('§FS_CLI_ZIP_11') == vars.get('§SI') && vars.get('§FS_UP') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§ALTE_TC') - 13.1);
        vars.setCF(1);
    }
    //#9
    if (vars.get('§FS_CLI_ZIP_13') == vars.get('§SI') && vars.get('§FS_UP') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§ALTE_TC') - 15.1);
        vars.setCF(1);
    }
    //#10
    if (vars.get('§FS_CLI_ZIP_GH15') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§ALTE_TC') - 15.8);
        vars.setCF(1);
    }
    //#11
    if (vars.get('§NR_PORTA_ZIP') >= 2) {
        vars.setDUMMYN1(vars.get('§L_PORTA_ZIP'));
        vars.setCF(1);
    }
    //#12
    if (vars.get('§NR_PORTA_ZIP') >= 2 && vars.get('§AUM_GUI_DX') > 0) {
        vars.setDUMMYN1(vars.get('§L_PORTA_ZIP') + vars.get('§AUM_GUI_DX'));
        vars.setCF(1);
    }
    //#13
    vars.setCON_B(vars.get('§DUMMYN1'));
    //#14
    vars.setCON_A('P072');
    //#15
    if ((vars.get('§FS_FAM2_DUETTO') == vars.get('§SI')) && (vars.get('§VERN_1_COM') == '0055' || vars.get('§VERN_1_COM') == '0053' || vars.get('§VERN_1_COM') == '0065')) {
        vars.setCON_A('P055');
    }
    //#16
    if ((vars.get('§FS_11_QUJ') == vars.get('§SI')) || (vars.get('§FS_13_QU') == vars.get('§SI')) || (vars.get('§FS_GUI_11_13') == vars.get('§SI'))) {
        vars.setCON_A('P065');
    }
    //#17
    if ((vars.get('§FS_FAM2_DUETTO') == vars.get('§SI')) && (vars.get('§VR_ABB') == '01' || vars.get('§VR_ABB') == '02' || vars.get('§VR_ABB') == '03')) {
        vars.setCON_A('P055');
    }
    //#18
    if (vars.get('§FS_CHI_VAR') == vars.get('§SI') || vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI') || vars.get('§FS_CLI_TWI_BG') == vars.get('§SI')) {
        vars.setCON_A('P065');
    }
    //#19
    if (vars.get('§FS_GU_56') == vars.get('§SI') && vars.get('§FS_FAM2_CLI_ZIP') == vars.get('§SI')) {
        vars.setCON_A('P065');
    }
    //#20
    if (vars.get('§FS_NO_GUI') == vars.get('§SI')) {
        vars.setLG('');
    }

    // GENERATED

    return vars.output;
};
