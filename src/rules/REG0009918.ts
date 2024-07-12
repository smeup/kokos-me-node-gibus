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

export const REG0009918: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009918
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYA1 = §MATER_TESSUTO
    // #2
    // COND:
    // §FS_ACRILICO = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_POLIESTERE = §SI
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_CRISTAL = §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §DUMMYA1 = '0119'
    // THEN:
    // *SET *CF = #1
    // #6
    // COND:
    // §DUMMYA1 = '0118'
    // THEN:
    // *SET *CF = #1
    // #7
    // COND:
    // §DUMMYA1 = '0114'
    // THEN:
    // *SET *CF = #1
    // #8
    // COND:
    // §DUMMYA1 = '0126'
    // THEN:
    // *SET *CF = #1
    // #9
    // COND:
    // §DUMMYA1 = '0125'
    // THEN:
    // *SET *CF = #1
    // #10
    // COND:
    // §DUMMYA1 = '0044'
    // THEN:
    // *SET *CF = #1
    // #11
    // COND:
    // §DUMMYA1 = '107'
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYA1(vars.get('§MATER_TESSUTO'));
    //#2
    if (vars.get('§FS_ACRILICO') == vars.get('§SI')) {
        vars.setCF(1);
    }
    //#3
    if (vars.get('§FS_POLIESTERE') == vars.get('§SI')) {
        vars.setCF(1);
    }
    //#4
    if (vars.get('§FS_CRISTAL') == vars.get('§SI')) {
        vars.setCF(1);
    }
    //#5
    if (vars.get('§DUMMYA1') == '0119') {
        vars.setCF(1);
    }
    //#6
    if (vars.get('§DUMMYA1') == '0118') {
        vars.setCF(1);
    }
    //#7
    if (vars.get('§DUMMYA1') == '0114') {
        vars.setCF(1);
    }
    //#8
    if (vars.get('§DUMMYA1') == '0126') {
        vars.setCF(1);
    }
    //#9
    if (vars.get('§DUMMYA1') == '0125') {
        vars.setCF(1);
    }
    //#10
    if (vars.get('§DUMMYA1') == '0044') {
        vars.setCF(1);
    }
    //#11
    if (vars.get('§DUMMYA1') == '107') {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
