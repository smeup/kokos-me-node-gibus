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

export const REG0000717: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000717
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // *SET §DUMMYN2 = #0
    // #2
    // COND:
    // §FS_CLI_ZIP_15 = §SI OR §FS_CLI_ZIP_GH = §SI
    // THEN:
    // *SET §DUMMYN2 = [ §LARG - #1,4 ]
    // #3
    // COND:
    // §FS_CLI_ZIP_GH15 = §SI
    // THEN:
    // *SET §DUMMYN2 = [ §LARG - #1,5 ]
    // #4
    // COND:
    // §FS_CLI_ZIP_15 = §SI OR §FS_CLI_ZIP_GH15 = §SI
    // THEN:
    // *SET §DUMMYN1 = [§DUMMYN2 * #2]
    // #5
    // COND:
    // §FS_CLI_ZIP_GH = §SI
    // THEN:
    // *SET §DUMMYN1 = [§DUMMYN2 * #1]
    // #6
    // COND:
    // §DUMMYN1 > #0
    // THEN:
    // *SET *CF = [§DUMMYN1 / #100]
    // #7
    // COND:
    // §FS_CLI_ZIP_TWI=§SI OR §FS_CLI_TWI_BG = §SI
    // THEN:
    // *SET *CF = [ §L_SPAZ_CAS_FIS / #100 * #2 ]
    // #8
    // COND:
    // (§FS_11_QUJ = §SI) OR (§FS_13_QU = §SI) OR (§FS_13_QU_GC = §SI)
    // THEN:
    // *SET *CF = [ §L_SPAZ_CAS_FIS / #100 ]
    // #9
    // COND:
    // §FS_CLI_ZIP_9=§SI
    // THEN:
    // *SET *CF = [ §L_SPAZ_CAS_FIS / #100 ]
    // #10
    // COND:
    // §FS_CLI_ZIP_TWI=§SI OR §FS_CLI_TWI_BG = §SI
    // THEN:
    // *SET *CF = [ §L_SPAZ_CAS_FIS / #100 * #2 ]
    // #11
    // COND:
    // ( §FS_CLI_ZIP_11=§SI ) OR ( §FS_CLI_ZIP_13=§SI )
    // THEN:
    // *SET *CF = [ §L_SPAZ_CAS_FIS / #100 * #2 ]
    // #12
    // COND:
    // §FS_CLI_ZIP_11 = §SI AND §FS_UP = §SI
    // THEN:
    // *SET *CF = [ §L_SPAZ_CAS_FIS / #100 * #2 ]
    // #13
    // COND:
    // §FS_CLI_ZIP_13 = §SI AND §FS_UP = §SI
    // THEN:
    // *SET *CF = [ §L_SPAZ_CAS_FIS / #100 * #2 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    vars.setDUMMYN2(0);
    //#2
    if (vars.get('§FS_CLI_ZIP_15') == vars.get('§SI') || vars.get('§FS_CLI_ZIP_GH') == vars.get('§SI')) {
        vars.setDUMMYN2(vars.get('§LARG') - 1.4);
    }
    //#3
    if (vars.get('§FS_CLI_ZIP_GH15') == vars.get('§SI')) {
        vars.setDUMMYN2(vars.get('§LARG') - 1.5);
    }
    //#4
    if (vars.get('§FS_CLI_ZIP_15') == vars.get('§SI') || vars.get('§FS_CLI_ZIP_GH15') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§DUMMYN2') * 2);
    }
    //#5
    if (vars.get('§FS_CLI_ZIP_GH') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§DUMMYN2') * 1);
    }
    //#6
    if (vars.get('§DUMMYN1') > 0) {
        vars.setCF(vars.get('§DUMMYN1') / 100);
    }
    //#7
    if (vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI') || vars.get('§FS_CLI_TWI_BG') == vars.get('§SI')) {
        vars.setCF(vars.get('§L_SPAZ_CAS_FIS') / 100 * 2);
    }
    //#8
    if (vars.get('§FS_11_QUJ') == vars.get('§SI') || vars.get('§FS_13_QU') == vars.get('§SI') || vars.get('§FS_13_QU_GC') == vars.get('§SI')) {
        vars.setCF(vars.get('§L_SPAZ_CAS_FIS') / 100);
    }
    //#9
    if (vars.get('§FS_CLI_ZIP_9') == vars.get('§SI')) {
        vars.setCF(vars.get('§L_SPAZ_CAS_FIS') / 100);
    }
    //#10
    if (vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI') || vars.get('§FS_CLI_TWI_BG') == vars.get('§SI')) {
        vars.setCF(vars.get('§L_SPAZ_CAS_FIS') / 100 * 2);
    }
    //#11
    if (vars.get('§FS_CLI_ZIP_11') == vars.get('§SI') || vars.get('§FS_CLI_ZIP_13') == vars.get('§SI')) {
        vars.setCF(vars.get('§L_SPAZ_CAS_FIS') / 100 * 2);
    }
    //#12
    if (vars.get('§FS_CLI_ZIP_11') == vars.get('§SI') && vars.get('§FS_UP') == vars.get('§SI')) {
        vars.setCF(vars.get('§L_SPAZ_CAS_FIS') / 100 * 2);
    }
    //#13
    if (vars.get('§FS_CLI_ZIP_13') == vars.get('§SI') && vars.get('§FS_UP') == vars.get('§SI')) {
        vars.setCF(vars.get('§L_SPAZ_CAS_FIS') / 100 * 2);
    }
    // GENERATED

    return vars.output;
};
