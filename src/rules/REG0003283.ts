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

export const REG0003283: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003283
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §FS_FAM2_QUADRA=§SI ) OR ( §FS_FAM2_VIVA=§SI )
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CON-B=[§SPOR - #13]
    // *SET *CF= [§N_MODULI + #1 ]
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // §FS_ACC_LAT_SX = §SI
    // THEN:
    // *SET *CF = [§N_MODULI + #0]
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FAM2_QUADRA') == vars.get('§SI') || vars.get('§FS_FAM2_VIVA') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§SPOR') - 13);
        vars.setCF(vars.get('§N_MODULI') + 1);
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_ACC_LAT_SX') == vars.get('§SI')) {
        vars.setCF(vars.get('§N_MODULI') + 0);
    }
    
    // GENERATED

    return vars.output;
};
