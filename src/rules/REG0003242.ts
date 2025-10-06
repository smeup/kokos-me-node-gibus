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

export const REG0003242: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003242
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A='P072'
    // *SET *CF=#0
    // #2
    // COND:
    // §N_MODULI>=#1
    // THEN:
    // *SET *CF=[§L_COP_GUIDA/ #100]
    // #3
    // COND:
    // ( §FS_FAM2_100=§SI ) OR ( §FS_FAM2_JEANS=§SI )
    // THEN:
    // *SET *LG=''
    // #4
    // COND:
    // §VERN_1_COM='0055' OR §VERN_1_COM='0053' OR §VR_ABB = '01' OR §VR_ABB = '02'
    // THEN:
    // *SET *CON-A='P055'
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('P072');
    vars.setCF(0);
    
    //#2
    if (vars.get('§N_MODULI') >= 1) {
        vars.setCF(vars.get('§L_COP_GUIDA') / 100);
    }
    
    //#3
    if (vars.get('§FS_FAM2_100') == vars.get('§SI') || vars.get('§FS_FAM2_JEANS') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#4
    if (vars.get('§VERN_1_COM') == '0055' || vars.get('§VERN_1_COM') == '0053' || vars.get('§VR_ABB') == '01' || vars.get('§VR_ABB') == '02') {
        vars.setCON_A('P055');
    }
    // GENERATED

    return vars.output;
};
