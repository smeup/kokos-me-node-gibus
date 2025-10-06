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

export const REG0001079: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001079
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = *COL
    // *SET *CF = #0
    // *SET *LG = ''
    // #2
    // COND:
    // *LUNG = #80
    // THEN:
    // *SET *CON-B = #67
    // *SET *CF = #8
    // #3
    // COND:
    // *LUNG = #90
    // THEN:
    // *SET *CON-B = #620
    // *SET *CF = #1
    // #4
    // COND:
    // *LUNG = #100
    // THEN:
    // *SET *CON-B = #700
    // *SET *CF = #1
    // #5
    // COND:
    // *LUNG = #110
    // THEN:
    // *SET *CON-B = #980
    // *SET *CF = #1
    // #6
    // COND:
    // *LUNG = #120
    // THEN:
    // *SET *CON-B = #1080
    // *SET *CF = #1
    // #7
    // COND:
    // *LUNG = #130
    // THEN:
    // *SET *CON-B = #1180
    // *SET *CF = #1
    // #8
    // COND:
    // *LUNG = #140
    // THEN:
    // *SET *CON-B = #127
    // *SET *CF = #10
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.getCOL());
    vars.setCF(0);
    vars.setLG('');
    
    //#2
    if (vars.get('LUNG') == 80) {
        vars.setCON_B(67);
        vars.setCF(8);
    }
    
    //#3
    if (vars.get('LUNG') == 90) {
        vars.setCON_B(620);
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('LUNG') == 100) {
        vars.setCON_B(700);
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('LUNG') == 110) {
        vars.setCON_B(980);
        vars.setCF(1);
    }
    
    //#6
    if (vars.get('LUNG') == 120) {
        vars.setCON_B(1080);
        vars.setCF(1);
    }
    
    //#7
    if (vars.get('LUNG') == 130) {
        vars.setCON_B(1180);
        vars.setCF(1);
    }
    
    //#8
    if (vars.get('LUNG') == 140) {
        vars.setCON_B(127);
        vars.setCF(10);
    }
    // GENERATED

    return vars.output;
};
