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

export const REG0003483: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003483
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §L1_TELO >#0 )
    // THEN:
    // *SET *CF=[ §LARG_TELO/#100 ]
    // #2
    // COND:
    // ( §TESS_HID='193858' ) OR ( §TESS_HID='194275' )
    // THEN:
    // *SET *CON-A='P055'
    // #3
    // COND:
    // ( §TESS_HID='193859' ) OR ( §TESS_HID='194274' )
    // THEN:
    // *SET *CON-A='P053'
    // #4
    // COND:
    // ( §TESS_HID='193863' )
    // THEN:
    // *SET *CON-A='P065'
    // #5
    // COND:
    // ( §TESS_HID='193862' )
    // THEN:
    // *SET *CON-A='P072'
    // #6
    // COND:
    // ( §TESS_HID='193861' )
    // THEN:
    // *SET *CON-A='P079'
    // #7
    // COND:
    // ( §TESS_HID='193860' )
    // THEN:
    // *SET *CON-A='P136'
    // #8
    // COND:
    // ( §TESS_HID<>'193858' ) AND ( §TESS_HID<>'194275' ) AND ( §TESS_HID<>'193859' ) AND ( §TESS_HID<>'194274' )                   AND ( §TESS_HID<>'193863') AND ( §TESS_HID<>'193862' ) AND ( §TESS_HID<>'193861' ) AND ( §TESS_HID<>'193860' )
    // THEN:
    // *SET *CON-A='P055'
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L1_TELO') > 0) {
        vars.setCF(vars.get('§LARG_TELO') / 100);
    }
    
    //#2
    if (vars.get('§TESS_HID') == '193858' || vars.get('§TESS_HID') == '194275') {
        vars.setCON_A('P055');
    }
    
    //#3
    if (vars.get('§TESS_HID') == '193859' || vars.get('§TESS_HID') == '194274') {
        vars.setCON_A('P053');
    }
    
    //#4
    if (vars.get('§TESS_HID') == '193863') {
        vars.setCON_A('P065');
    }
    
    //#5
    if (vars.get('§TESS_HID') == '193862') {
        vars.setCON_A('P072');
    }
    
    //#6
    if (vars.get('§TESS_HID') == '193861') {
        vars.setCON_A('P079');
    }
    
    //#7
    if (vars.get('§TESS_HID') == '193860') {
        vars.setCON_A('P136');
    }
    
    //#8
    if (vars.get('§TESS_HID') != '193858' && vars.get('§TESS_HID') != '194275' && vars.get('§TESS_HID') != '193859' && vars.get('§TESS_HID') != '194274' && vars.get('§TESS_HID') != '193863' && vars.get('§TESS_HID') != '193862' && vars.get('§TESS_HID') != '193861' && vars.get('§TESS_HID') != '193860') {
        vars.setCON_A('P055');
    }
    
    // GENERATED

    return vars.output;
};
