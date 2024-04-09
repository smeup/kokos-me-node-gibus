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

export const REG0002868: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002868
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = [(§LARG - #54,3) / #100]
    // #2
    // COND:
    // §FS_ACC_LAT_SX = §SI
    // THEN:
    // *SET *CF = [(§LARG - #49,8) / #100]
    // #3
    // COND:
    // §FS_ACC_LAT_DX = §SI
    // THEN:
    // *SET *CF = [(§LARG - #49,8) / #100]
    // """
    // RESPONSE:
    //#1
    vars.setCF((vars.get('§LARG') - 54.3) / 100);
    
    //#2
    if (vars.get('§FS_ACC_LAT_SX') == vars.get('§SI')) {
        vars.setCF((vars.get('§LARG') - 49.8) / 100);
    }
    
    //#3
    if (vars.get('§FS_ACC_LAT_DX') == vars.get('§SI')) {
        vars.setCF((vars.get('§LARG') - 49.8) / 100);
    }
    // GENERATED

    return vars.output;
};
