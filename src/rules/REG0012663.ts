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

export const REG0012663: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012663
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // #2
    // COND:
    // §NR_FRANGI = #35
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = #455
    // #3
    // COND:
    // §NR_FRANGI = #36
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = #455
    // #4
    // COND:
    // §FS_SPO_T01 = §SI OR §FS_LAR_T01 = §SI
    // THEN:
    // *SET §DUMMYN1 = *CON-B
    // #5
    // COND:
    // §FS_SPO_T01 = §SI OR §FS_LAR_T01 = §SI
    // THEN:
    // *SET *CON-B = [ §DUMMYN1 - #10,6 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#2
    if (vars.get('§NR_FRANGI') == 35) {
        vars.setCF(1);
        vars.setCON_B(455);
    }
    
    //#3
    if (vars.get('§NR_FRANGI') == 36) {
        vars.setCF(1);
        vars.setCON_B(455);
    }
    
    //#4
    if (vars.get('§FS_SPO_T01') == vars.get('§SI') || vars.get('§FS_LAR_T01') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.getCON_B());
    }
    
    //#5
    if (vars.get('§FS_SPO_T01') == vars.get('§SI') || vars.get('§FS_LAR_T01') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§DUMMYN1') - 10.6);
    }
    // GENERATED

    return vars.output;
};
