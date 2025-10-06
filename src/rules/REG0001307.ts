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

export const REG0001307: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001307
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §TIPO_MOT_HID = '049' OR §TIPO_MOT_HID = '050' OR §TIPO_MOT_HID = '051'
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §TIPO_MOT_HID = '040' OR §TIPO_MOT_HID = '041' OR §TIPO_MOT_HID = '042'
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §TIPO_MOT_HID = '129' OR §TIPO_MOT_HID = '092' OR §TIPO_MOT_HID = '137'
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §TIPO_MOT_HID = '127'
    // THEN:
    // *SET *CF = #1
    // #6
    // COND:
    // §TIPO_MOT_HID = '186' OR §TIPO_MOT_HID = '194' OR §TIPO_MOT_HID = '195' OR §TIPO_MOT_HID = '196' OR §TIPO_MOT_HID = '197'
    // THEN:
    // *SET *CF = #1
    // #7
    // COND:
    // §TIPO_MOT_HID = '198'
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§TIPO_MOT_HID') == '049' || vars.get('§TIPO_MOT_HID') == '050' || vars.get('§TIPO_MOT_HID') == '051') {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§TIPO_MOT_HID') == '040' || vars.get('§TIPO_MOT_HID') == '041' || vars.get('§TIPO_MOT_HID') == '042') {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§TIPO_MOT_HID') == '129' || vars.get('§TIPO_MOT_HID') == '092' || vars.get('§TIPO_MOT_HID') == '137') {
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('§TIPO_MOT_HID') == '127') {
        vars.setCF(1);
    }
    
    //#6
    if (vars.get('§TIPO_MOT_HID') == '186' || vars.get('§TIPO_MOT_HID') == '194' || vars.get('§TIPO_MOT_HID') == '195' || vars.get('§TIPO_MOT_HID') == '196' || vars.get('§TIPO_MOT_HID') == '197') {
        vars.setCF(1);
    }
    
    //#7
    if (vars.get('§TIPO_MOT_HID') == '198') {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
