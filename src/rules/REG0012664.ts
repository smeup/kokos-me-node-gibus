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

export const REG0012664: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012664
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §NR_FRANGI >= #35
    // THEN:
    // *SET *CF = #2
    // #3
    // COND:
    // §NR_FRANGI >= #35 AND  ( §FS_SPO_T01 = §SI OR §FS_LAR_T01 = §SI )
    // THEN:
    // *SET *CF = #4
    // #4
    // THEN:
    // *SET *CON-A = '0072'
    // #5
    // COND:
    // §VR_PLA_LAM = 'P055'
    // THEN:
    // *SET *CON-A = '0055'
    // #6
    // COND:
    // §VR_PLA_LAM = 'P053'
    // THEN:
    // *SET *CON-A = '0053'
    // #7
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§NR_FRANGI') >= 35) {
        vars.setCF(2);
    }
    
    //#3
    if (vars.get('§NR_FRANGI') >= 35 && (vars.get('§FS_SPO_T01') == vars.get('§SI') || vars.get('§FS_LAR_T01') == vars.get('§SI')) ) {
        vars.setCF(4);
    }
    
    //#4
    vars.setCON_A('0072');
    
    //#5
    if (vars.get('§VR_PLA_LAM') == 'P055') {
        vars.setCON_A('0055');
    }
    
    //#6
    if (vars.get('§VR_PLA_LAM') == 'P053') {
        vars.setCON_A('0053');
    }
    
    //#7
    vars.setCON_A(vars.get('§VERN_1_COM'));
    // GENERATED

    return vars.output;
};
