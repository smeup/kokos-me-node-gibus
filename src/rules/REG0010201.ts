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

export const REG0010201: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010201
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // #2
    // COND:
    // §X_PLA_R = §SI
    // THEN:
    // *SET §DUMMYN1 = [ #2 * §NR_FRANGI + #4 + #2 * §X_CHI_RET ]
    // #3
    // COND:
    // §FS_FAM2_LUCE = §SI
    // THEN:
    // *SET §DUMMYN1 = [ #2 * §NR_FRANGI + #2 + #2 * §X_CHI_RET ]
    // #4
    // COND:
    // §X_PLA_SEP = 'TRUE'
    // THEN:
    // *SET §DUMMYN1 = [ #4 * §NR_FRANGI + #6 ]
    // #5
    // COND:
    // §X_PLA_ARC = §SI
    // THEN:
    // *SET §DUMMYN1 = [ #2 * §NR_FRANGI + #4 + #2 * §X_CHI_RET ]
    // #6
    // COND:
    // §DUMMYN1 > #0
    // THEN:
    // *SET *CF = §DUMMYN1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    //#2
    if (vars.get('§X_PLA_R') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('#2') * vars.get('§NR_FRANGI') + vars.get('#4') + vars.get('#2') * vars.get('§X_CHI_RET'));
    }
    //#3
    if (vars.get('§FS_FAM2_LUCE') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('#2') * vars.get('§NR_FRANGI') + vars.get('#2') + vars.get('#2') * vars.get('§X_CHI_RET'));
    }
    //#4
    if (vars.get('§X_PLA_SEP') == 'TRUE') {
        vars.setDUMMYN1(vars.get('#4') * vars.get('§NR_FRANGI') + vars.get('#6'));
    }
    //#5
    if (vars.get('§X_PLA_ARC') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('#2') * vars.get('§NR_FRANGI') + vars.get('#4') + vars.get('#2') * vars.get('§X_CHI_RET'));
    }
    //#6
    if (vars.get('§DUMMYN1') > 0) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    // GENERATED

    return vars.output;
};
