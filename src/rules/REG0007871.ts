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

export const REG0007871: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007871
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_FAM2_ELITE=§SI ) AND ( ( §FS_TRA_LAT_SX=§SI ) OR ( §FS_TRA_LAT_DX=§SI ) )
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( §FS_FAM2_ELITE=§SI ) AND ( ( §FS_TRA_LAT_SX=§SI ) AND ( §FS_TRA_LAT_DX=§SI ) )
    // THEN:
    // *SET *CF=#2
    // #4
    // THEN:
    // *SET §DUMMYN1 = *CF
    // #5
    // COND:
    // §SPOR > #550 AND §DUMMYN1 > #0
    // THEN:
    // *SET *CF = [§DUMMYN1 * #3]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_FAM2_ELITE') == vars.get('§SI') && (vars.get('§FS_TRA_LAT_SX') == vars.get('§SI') || vars.get('§FS_TRA_LAT_DX') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_FAM2_ELITE') == vars.get('§SI') && vars.get('§FS_TRA_LAT_SX') == vars.get('§SI') && vars.get('§FS_TRA_LAT_DX') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#4
    vars.setDUMMYN1(vars.getCF());
    
    //#5
    if (vars.get('§SPOR') > 550 && vars.get('§DUMMYN1') > 0) {
        vars.setCF(vars.get('§DUMMYN1') * 3);
    }
    
    // GENERATED

    return vars.output;
};
