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

export const REG0008597: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008597
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // #2
    // COND:
    // §FS_MON_ANT1 = §SI
    // THEN:
    // *SET §DUMMYN1 = [*CF + #1]
    // #3
    // COND:
    // §FS_MON_ANT1 = §SI
    // THEN:
    // *SET *CF = §DUMMYN1
    // #4
    // COND:
    // §FS_MON_ANT2 = §SI
    // THEN:
    // *SET §DUMMYN1 = [*CF + #1]
    // #5
    // COND:
    // §FS_MON_ANT2 = §SI
    // THEN:
    // *SET *CF = §DUMMYN1
    // #6
    // COND:
    // §FS_MON_POS_1 = §SI
    // THEN:
    // *SET §DUMMYN1 = [*CF + #1]
    // #7
    // COND:
    // §FS_MON_POS_1 = §SI
    // THEN:
    // *SET *CF = §DUMMYN1
    // #8
    // COND:
    // §FS_MON_POS_2 = §SI
    // THEN:
    // *SET §DUMMYN1 = [*CF + #1]
    // #9
    // COND:
    // §FS_MON_POS_2 = §SI
    // THEN:
    // *SET *CF = §DUMMYN1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    //#2
    if (vars.get('§FS_MON_ANT1') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.getCF() + 1);
    }
    //#3
    if (vars.get('§FS_MON_ANT1') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    //#4
    if (vars.get('§FS_MON_ANT2') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.getCF() + 1);
    }
    //#5
    if (vars.get('§FS_MON_ANT2') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    //#6
    if (vars.get('§FS_MON_POS_1') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.getCF() + 1);
    }
    //#7
    if (vars.get('§FS_MON_POS_1') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    //#8
    if (vars.get('§FS_MON_POS_2') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.getCF() + 1);
    }
    //#9
    if (vars.get('§FS_MON_POS_2') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    // GENERATED

    return vars.output;
};
