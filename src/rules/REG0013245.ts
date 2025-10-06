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

export const REG0013245: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013245
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = [§ALTE_TC * #2 + §LARG]
    // *SET §DUMMYB1 = §SI
    // #2
    // COND:
    // §FS_CRISTAL = §SI
    // THEN:
    // *SET §DUMMYB1 = ''
    // #3
    // COND:
    // §FS_POLIESTERE = §SI
    // THEN:
    // *SET §DUMMYB1 = ''
    // #4
    // COND:
    // §FS_ACRILICO = §SI
    // THEN:
    // *SET §DUMMYB1 = ''
    // #5
    // COND:
    // §MATER_TESSUTO = '0126' OR §MATER_TESSUTO = '0125' OR  §MATER_TESSUTO = '107' OR  §MATER_TESSUTO = '0125' OR                 §MATER_TESSUTO = '0119' OR §MATER_TESSUTO = '0039' OR  §MATER_TESSUTO = '0017'
    // THEN:
    // *SET §DUMMYB1 = ''
    // #6
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = [ §DUMMYN1 / #100 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(vars.get('§ALTE_TC') * 2 + vars.get('§LARG'));
    vars.setDUMMYB1(vars.get('§SI'));
    
    //#2
    if (vars.get('§FS_CRISTAL') == vars.get('§SI')) {
        vars.setDUMMYB1('');
    }
    
    //#3
    if (vars.get('§FS_POLIESTERE') == vars.get('§SI')) {
        vars.setDUMMYB1('');
    }
    
    //#4
    if (vars.get('§FS_ACRILICO') == vars.get('§SI')) {
        vars.setDUMMYB1('');
    }
    
    //#5
    if (vars.get('§MATER_TESSUTO') == '0126' || vars.get('§MATER_TESSUTO') == '0125' || vars.get('§MATER_TESSUTO') == '107' || vars.get('§MATER_TESSUTO') == '0125' || vars.get('§MATER_TESSUTO') == '0119' || vars.get('§MATER_TESSUTO') == '0039' || vars.get('§MATER_TESSUTO') == '0017') {
        vars.setDUMMYB1('');
    }
    
    //#6
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1') / 100);
    }
    // GENERATED

    return vars.output;
};
