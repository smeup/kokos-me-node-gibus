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

export const REG0009588: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009588
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *DUMMYN1 = #0
    // #2
    // COND:
    // §FS_AN_SBA_ANT1 = §SI
    // THEN:
    // *SET §DUMMYN1 = [*CF + #1]
    // #3
    // COND:
    // §FS_AN_SBA_ANT1 = §SI
    // THEN:
    // *SET *CF = §DUMMYN1
    // #4
    // COND:
    // §FS_SX_SBA_ANT1 = §SI
    // THEN:
    // *SET §DUMMYN1 = [*CF + #1]
    // #5
    // COND:
    // §FS_SX_SBA_ANT1 = §SI
    // THEN:
    // *SET *CF = §DUMMYN1
    // #6
    // COND:
    // §FS_AN_SBA_ANT2 = §SI
    // THEN:
    // *SET §DUMMYN1 = [*CF + #1]
    // #7
    // COND:
    // §FS_AN_SBA_ANT2 = §SI
    // THEN:
    // *SET *CF = §DUMMYN1
    // #8
    // COND:
    // §FS_DX_SBA_ANT2 = §SI
    // THEN:
    // *SET §DUMMYN1 = [*CF + #1]
    // #9
    // COND:
    // §FS_DX_SBA_ANT2 = §SI
    // THEN:
    // *SET *CF = §DUMMYN1
    // #10
    // COND:
    // §FS_PO_SBA_POS1 = §SI
    // THEN:
    // *SET §DUMMYN1 = [*CF + #1]
    // #11
    // COND:
    // §FS_PO_SBA_POS1 = §SI
    // THEN:
    // *SET *CF = §DUMMYN1
    // #12
    // COND:
    // §FS_SX_SBA_POS1 = §SI
    // THEN:
    // *SET §DUMMYN1 = [*CF + #1]
    // #13
    // COND:
    // §FS_SX_SBA_POS1 = §SI
    // THEN:
    // *SET *CF = §DUMMYN1
    // #14
    // COND:
    // §FS_PO_SBA_POS2 = §SI
    // THEN:
    // *SET §DUMMYN1 = [*CF + #1]
    // #15
    // COND:
    // §FS_PO_SBA_POS2 = §SI
    // THEN:
    // *SET *CF = §DUMMYN1
    // #16
    // COND:
    // §FS_DX_SBA_POS2 = §SI
    // THEN:
    // *SET §DUMMYN1 = [*CF + #1]
    // #17
    // COND:
    // §FS_DX_SBA_POS2 = §SI
    // THEN:
    // *SET *CF = §DUMMYN1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    //#2
    if (vars.get('§FS_AN_SBA_ANT1') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.getCF() + 1);
    }
    //#3
    if (vars.get('§FS_AN_SBA_ANT1') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    //#4
    if (vars.get('§FS_SX_SBA_ANT1') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.getCF() + 1);
    }
    //#5
    if (vars.get('§FS_SX_SBA_ANT1') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    //#6
    if (vars.get('§FS_AN_SBA_ANT2') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.getCF() + 1);
    }
    //#7
    if (vars.get('§FS_AN_SBA_ANT2') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    //#8
    if (vars.get('§FS_DX_SBA_ANT2') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.getCF() + 1);
    }
    //#9
    if (vars.get('§FS_DX_SBA_ANT2') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    //#10
    if (vars.get('§FS_PO_SBA_POS1') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.getCF() + 1);
    }
    //#11
    if (vars.get('§FS_PO_SBA_POS1') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    //#12
    if (vars.get('§FS_SX_SBA_POS1') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.getCF() + 1);
    }
    //#13
    if (vars.get('§FS_SX_SBA_POS1') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    //#14
    if (vars.get('§FS_PO_SBA_POS2') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.getCF() + 1);
    }
    //#15
    if (vars.get('§FS_PO_SBA_POS2') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    //#16
    if (vars.get('§FS_DX_SBA_POS2') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.getCF() + 1);
    }
    //#17
    if (vars.get('§FS_DX_SBA_POS2') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    // GENERATED

    return vars.output;
};
