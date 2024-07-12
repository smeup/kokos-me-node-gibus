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

export const REG0012815: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012815
    // REQUEST:
    // """
    // #1
    // COND:
    // §LARG <= #200
    // THEN:
    // *SET *CF = #2
    // #2
    // COND:
    // §LARG > #200 AND §LARG <= #300
    // THEN:
    // *SET *CF = #3
    // #3
    // COND:
    // §LARG > #300 AND §LARG <= #400
    // THEN:
    // *SET *CF = #4
    // #4
    // COND:
    // §LARG > #400  AND §LARG <= #500
    // THEN:
    // *SET *CF = #5
    // #5
    // COND:
    // §LARG > #500 AND §LARG <= #600
    // THEN:
    // *SET *CF = #6
    // #6
    // COND:
    // §LARG > #600 AND §LARG <= #650
    // THEN:
    // *SET *CF = #7
    // #7
    // COND:
    // §ATTACCO = '02' AND §TIPO_SUPP_CP = '01'
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // ELSE:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§LARG') <= 200) {
        vars.setCF(2);
    }
    
    //#2
    if (vars.get('§LARG') > 200 && vars.get('§LARG') <= 300) {
        vars.setCF(3);
    }
    
    //#3
    if (vars.get('§LARG') > 300 && vars.get('§LARG') <= 400) {
        vars.setCF(4);
    }
    
    //#4
    if (vars.get('§LARG') > 400 && vars.get('§LARG') <= 500) {
        vars.setCF(5);
    }
    
    //#5
    if (vars.get('§LARG') > 500 && vars.get('§LARG') <= 600) {
        vars.setCF(6);
    }
    
    //#6
    if (vars.get('§LARG') > 600 && vars.get('§LARG') <= 650) {
        vars.setCF(7);
    }
    
    //#7
    if (vars.get('§ATTACCO') == '02' && vars.get('§TIPO_SUPP_CP') == '01') {
        vars.setCON_A(vars.get('§VERN_1_COM'));
    } else {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
