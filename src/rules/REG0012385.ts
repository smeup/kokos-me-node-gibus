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

export const REG0012385: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012385
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET §DUMMYN1 = #0
    // *SET §DUMMYN2 = #0
    // #2
    // THEN:
    // *SET §DUMMYN1 = [ §NR_FRANGI - #1 ]
    // #3
    // THEN:
    // *SET §DUMMYN2 = [ §DUMMYN1 * #20 ]
    // #4
    // THEN:
    // *SET §DUMMYN1 = [ §DUMMYN2 + #25 ]
    // #5
    // COND:
    // §FS_SPO_T01 = §SI OR §FS_LAR_T01 = §SI
    // THEN:
    // *SET §DUMMYN1 = [ §DUMMYN2 + #25 - #21,2 ]
    // #6
    // THEN:
    // *SET *CON-B = §DUMMYN1
    // #7
    // THEN:
    // *SET *CF = #0
    // #8
    // COND:
    // §NR_FRANGI <= #34
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setDUMMYN1(0);
    vars.setDUMMYN2(0);
    
    //#2
    vars.setDUMMYN1(vars.get('§NR_FRANGI') - 1);
    
    //#3
    vars.setDUMMYN2(vars.get('§DUMMYN1') * 20);
    
    //#4
    vars.setDUMMYN1(vars.get('§DUMMYN2') + 25);
    
    //#5
    if (vars.get('§FS_SPO_T01') == vars.get('§SI') || vars.get('§FS_LAR_T01') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§DUMMYN2') + 25 - 21.2);
    }
    
    //#6
    vars.setCON_B(vars.get('§DUMMYN1'));
    
    //#7
    vars.setCF(0);
    
    //#8
    if (vars.get('§NR_FRANGI') <= 34) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
