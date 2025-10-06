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

export const REG0006792: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006792
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_FAM2_ZENIT = §SI
    // ELSE:
    // *SET *LG=''
    // #2
    // THEN:
    // *SET *CON-B= [ §LARG - #21,3 ]
    // #3
    // COND:
    // §VR_LAM_ABB<>''
    // THEN:
    // *SET *CON-A=§VR_LAM_ABB
    // ELSE:
    // *SET *CON-A=§VERN_1_COM
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) {
    } else {
        vars.setLG("");
    }
    
    //#2
    vars.setCON_B(vars.get('§LARG') - 21.3);
    
    //#3
    if (vars.get('§VR_LAM_ABB') != '') {
        vars.setCON_A(vars.get('§VR_LAM_ABB'));
    } else {
        vars.setCON_A(vars.get('§VERN_1_COM'));
    }
    // GENERATED

    return vars.output;
};
