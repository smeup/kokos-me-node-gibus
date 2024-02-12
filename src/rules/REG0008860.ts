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

export const REG0008860: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008860
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // #2
    // COND:
    // §SC_DX_AGG1_CAM1 = §SI
    // THEN:
    // *SET §DUMMYN1 = [*CF + #1]
    // #3
    // COND:
    // §SC_DX_AGG1_CAM1 = §SI
    // THEN:
    // *SET *CF = §DUMMYN1
    // #4
    // COND:
    // §SC_DX_AGG2_CAM1 = §SI
    // THEN:
    // *SET §DUMMYN1 = [*CF + #1]
    // #5
    // COND:
    // §SC_DX_AGG2_CAM1 = §SI
    // THEN:
    // *SET *CF = §DUMMYN1
    // #6
    // COND:
    // §SC_DX_SBA_ANT2 = §SI
    // THEN:
    // *SET §DUMMYN1 = [*CF + #1]
    // #7
    // COND:
    // §SC_DX_SBA_ANT2 = §SI
    // THEN:
    // *SET *CF = §DUMMYN1
    // #8
    // COND:
    // §SC_DX_SBA_POS2 = §SI
    // THEN:
    // *SET §DUMMYN1 = [*CF + #1]
    // #9
    // COND:
    // §SC_DX_SBA_POS2 = §SI
    // THEN:
    // *SET *CF = §DUMMYN1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    //#2
    if (vars.get('§SC_DX_AGG1_CAM1') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.getCF() + 1);
    }
    //#3
    if (vars.get('§SC_DX_AGG1_CAM1') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    //#4
    if (vars.get('§SC_DX_AGG2_CAM1') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.getCF() + 1);
    }
    //#5
    if (vars.get('§SC_DX_AGG2_CAM1') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    //#6
    if (vars.get('§SC_DX_SBA_ANT2') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.getCF() + 1);
    }
    //#7
    if (vars.get('§SC_DX_SBA_ANT2') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    //#8
    if (vars.get('§SC_DX_SBA_POS2') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.getCF() + 1);
    }
    //#9
    if (vars.get('§SC_DX_SBA_POS2') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    // GENERATED

    return vars.output;
};
