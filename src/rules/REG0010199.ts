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

export const REG0010199: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010199
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = 'P055'
    // #2
    // COND:
    // ( §TESS_HID = '193859' ) OR ( §TESS_HID = '194274' ) OR ( §TESS_HID = '196172' )
    // THEN:
    // *SET *CON-A = 'P053'
    // #3
    // COND:
    // §TESS_HID = '193863' OR §TESS_HID = '196161' OR §TESS_HID = '196176'
    // THEN:
    // *SET *CON-A = 'P065'
    // #4
    // COND:
    // §TESS_HID = '193862' OR §TESS_HID = '196162' OR §TESS_HID = '196175'
    // THEN:
    // *SET *CON-A = 'P072'
    // #5
    // COND:
    // §TESS_HID = '193861'
    // THEN:
    // *SET *CON-A = 'P079'
    // #6
    // COND:
    // §TESS_HID = '193860'
    // THEN:
    // *SET *CON-A = 'P136'
    // #7
    // THEN:
    // *SET §DUMMYN1 = [§LARG_TELO + #50]
    // #8
    // THEN:
    // *SET *CF = [ §DUMMYN1 * §X_CHI_RET / #100 ]
    // #9
    // COND:
    // §X_PLA_SEP = 'TRUE'
    // THEN:
    // *SET *CF = [ §DUMMYN1 * §NR_FRANGI / #100 ]
    // #10
    // COND:
    // §FS_TESS_CUCITO = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('P055');
    //#2
    if ((vars.get('§TESS_HID') == '193859') || (vars.get('§TESS_HID') == '194274') || (vars.get('§TESS_HID') == '196172')) {
        vars.setCON_A('P053');
    }
    //#3
    if ((vars.get('§TESS_HID') == '193863') || (vars.get('§TESS_HID') == '196161') || (vars.get('§TESS_HID') == '196176')) {
        vars.setCON_A('P065');
    }
    //#4
    if ((vars.get('§TESS_HID') == '193862') || (vars.get('§TESS_HID') == '196162') || (vars.get('§TESS_HID') == '196175')) {
        vars.setCON_A('P072');
    }
    //#5
    if (vars.get('§TESS_HID') == '193861') {
        vars.setCON_A('P079');
    }
    //#6
    if (vars.get('§TESS_HID') == '193860') {
        vars.setCON_A('P136');
    }
    //#7
    vars.setDUMMYN1(vars.get('§LARG_TELO') + 50);
    //#8
    vars.setCF(vars.get('§DUMMYN1') * vars.get('§X_CHI_RET') / 100);
    //#9
    if (vars.get('§X_PLA_SEP') == 'TRUE') {
        vars.setCF(vars.get('§DUMMYN1') * vars.get('§NR_FRANGI') / 100);
    }
    //#10
    if (vars.get('§FS_TESS_CUCITO') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
