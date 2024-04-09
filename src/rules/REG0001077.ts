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

export const REG0001077: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001077
    // REQUEST:
    // """
    // #1
    // COND:
    // §NR_H_GUARN_GUID > #0
    // THEN:
    // *SET *CF = §NR_H_GUARN_GUID
    // *SET *CON-B = §ALTE_TC
    // ELSE:
    // *SET *LG = ''
    // #2
    // THEN:
    // *SET *CON-A = 'P072'
    // #3
    // COND:
    // §VERN_GUIDE = '0055' OR §VR_ABB = '01'
    // THEN:
    // *SET *CON-A = 'P055'
    // #4
    // COND:
    // §VERN_GUIDE = '0053' OR §VR_ABB = '02'
    // THEN:
    // *SET *CON-A = 'P055'
    // #5
    // COND:
    // §AUM_GUI_DX > §AUM_GUI_SX
    // THEN:
    // *SET *CON-B = [§ALTE_TC + §AUM_GUI_DX]
    // #6
    // COND:
    // §AUM_GUI_SX > §AUM_GUI_DX
    // THEN:
    // *SET *CON-B = [§ALTE_TC + §AUM_GUI_SX]
    // """
    // RESPONSE:
    //#1
    if (vars.get('§NR_H_GUARN_GUID') > 0) {
        vars.setCF(vars.get('§NR_H_GUARN_GUID'));
        vars.setCON_B(vars.get('§ALTE_TC'));
    } else {
        vars.setLG('');
    }
    
    //#2
    vars.setCON_A('P072');
    
    //#3
    if (vars.get('§VERN_GUIDE') == '0055' || vars.get('§VR_ABB') == '01') {
        vars.setCON_A('P055');
    }
    
    //#4
    if (vars.get('§VERN_GUIDE') == '0053' || vars.get('§VR_ABB') == '02') {
        vars.setCON_A('P055');
    }
    
    //#5
    if (vars.get('§AUM_GUI_DX') > vars.get('§AUM_GUI_SX')) {
        vars.setCON_B(vars.get('§ALTE_TC') + vars.get('§AUM_GUI_DX'));
    }
    
    //#6
    if (vars.get('§AUM_GUI_SX') > vars.get('§AUM_GUI_DX')) {
        vars.setCON_B(vars.get('§ALTE_TC') + vars.get('§AUM_GUI_SX'));
    }
    // GENERATED

    return vars.output;
};
