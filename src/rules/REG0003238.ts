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

export const REG0003238: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003238
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §FS_FAM2_100 <> §SI ) AND ( §FS_FAM2_JEANS <> §SI )
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CON-B=§L_GUIDA
    // *SET *CF= [§N_MODULI + #1]
    // #2
    // COND:
    // ( §FS_FAM2_100=§SI ) OR ( §FS_FAM2_JEANS=§SI ) OR ( §FS_FAM2_165=§SI )
    // THEN:
    // *SET *LG=''
    // #3
    // COND:
    // §FS_FAM2_ELITE = §SI
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_FAM2_100') != vars.get('§SI')) && (vars.get('§FS_FAM2_JEANS') != vars.get('§SI'))) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§L_GUIDA'));
        vars.setCF(vars.get('§N_MODULI') + 1);
    }
    
    //#2
    if ((vars.get('§FS_FAM2_100') == vars.get('§SI')) || (vars.get('§FS_FAM2_JEANS') == vars.get('§SI')) || (vars.get('§FS_FAM2_165') == vars.get('§SI'))) {
        vars.setLG('');
    }
    
    //#3
    if (vars.get('§FS_FAM2_ELITE') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
