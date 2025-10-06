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

export const REG0003158: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003158
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CM='210145'
    // #2
    // COND:
    // ( §TECNOL_MOTORE = 'SOMFY_IO'  OR  §TECNOL_MOTORE = 'SOMFY_RTS' OR §TECNOL_MOTORE= 'SOMFY_STD' ) AND ( §FS_LS60=§SI )
    // THEN:
    // *SET *CM='210144'
    // #3
    // COND:
    // §TECNOL_MOTORE = 'CHERUBINI_RX'
    // THEN:
    // *SET *CM = '210143'
    // #4
    // COND:
    // §COD_MOTORE <> ''
    // ELSE:
    // *SET *LG=''
    // #5
    // THEN:
    // *SET *CM = 'DT_SU_MO'
    // #6
    // COND:
    // §FS_MOT_SFU = §SI
    // THEN:
    // *SET *CF = #0
    // #7
    // COND:
    // §FS_MOT_MED_COM = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCM('210145');
    
    //#2
    if ((vars.get('§TECNOL_MOTORE') == 'SOMFY_IO' || vars.get('§TECNOL_MOTORE') == 'SOMFY_RTS' || vars.get('§TECNOL_MOTORE') == 'SOMFY_STD') && vars.get('§FS_LS60') == vars.get('§SI')) {
        vars.setCM('210144');
    }
    
    //#3
    if (vars.get('§TECNOL_MOTORE') == 'CHERUBINI_RX') {
        vars.setCM('210143');
    }
    
    //#4
    if (vars.get('§COD_MOTORE') != '') {
    } else {
        vars.setLG('');
    }
    
    //#5
    vars.setCM('DT_SU_MO');
    
    //#6
    if (vars.get('§FS_MOT_SFU') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#7
    if (vars.get('§FS_MOT_MED_COM') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
