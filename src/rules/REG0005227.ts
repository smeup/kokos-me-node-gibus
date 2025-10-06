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

export const REG0005227: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005227
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF= #0
    // #2
    // THEN:
    // *SET §DUMMYN1 = #0
    // #3
    // COND:
    // ( §FS_FAM2_VARIA = §SI )
    // THEN:
    // *SET §DUMMYN1 = [ §LARG - #54,3 ]
    // #4
    // COND:
    // ( §FS_FAM2_VARIA = §SI ) AND ( ( §FS_ACC_LAT_SX=§SI ) OR ( §FS_ACC_LAT_DX=§SI ) )
    // THEN:
    // *SET §DUMMYN1 = [ §LARG - #50 ]
    // #5
    // COND:
    // ( §FS_FAM2_AZIMUT = §SI )
    // THEN:
    // *SET §DUMMYN1 = [ §LARG - #49,8 ]
    // #6
    // THEN:
    // *SET *CF = [ §DUMMYN1/ #100 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    vars.setDUMMYN1(0);
    
    //#3
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§LARG') - 54.3);
    }
    
    //#4
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI') && (vars.get('§FS_ACC_LAT_SX') == vars.get('§SI') || vars.get('§FS_ACC_LAT_DX') == vars.get('§SI'))) {
        vars.setDUMMYN1(vars.get('§LARG') - 50);
    }
    
    //#5
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§LARG') - 49.8);
    }
    
    //#6
    vars.setCF(vars.get('§DUMMYN1') / 100);
    // GENERATED

    return vars.output;
};
