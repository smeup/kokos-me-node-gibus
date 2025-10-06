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

export const REG0011973: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011973
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_BRACCI
    // *SET *CON-B = §SPOR_TS
    // #2
    // COND:
    // §VERN_BRACCI = '0053' OR §VERN_BRACCI = '0055' OR §VERN_BRACCI = '0065' OR §VERN_BRACCI = '0069' OR §VERN_BRACCI = '0073' OR §VERN_BRACCI = '0076' OR §VERN_BRACCI = '0293'
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §SPOR_TS = #300
    // THEN:
    // *SET *CF = #0
    // #4
    // COND:
    // §VERN_BRACCI = '0055' AND ( §SPOR_TS = #200 OR §SPOR_TS = #225 OR §SPOR_TS = #250 OR §SPOR_TS = #300 )
    // THEN:
    // *SET *CF = #0
    // #5
    // COND:
    // §VERN_BRACCI = '0053' AND ( §SPOR_TS = #200 OR §SPOR_TS = #225 OR §SPOR_TS = #250 OR §SPOR_TS = #300 )
    // THEN:
    // *SET *CF = #0
    // #6
    // COND:
    // §VERN_BRACCI = '0065' AND §SPOR_TS = #300
    // THEN:
    // *SET *CF = #0
    // #7
    // COND:
    // §VERN_BRACCI = '0069' AND §SPOR_TS = #300
    // THEN:
    // *SET *CF = #0
    // #8
    // COND:
    // §VERN_BRACCI = '0293' AND §SPOR_TS = #300
    // THEN:
    // *SET *CF = #0
    // #9
    // COND:
    // §VERN_BRACCI = '0073' AND ( §SPOR_TS = #250 OR §SPOR_TS = #300 )
    // THEN:
    // *SET *CF = #0
    // #10
    // COND:
    // §VERN_BRACCI = '0065' AND ( §SPOR_TS = #200 )
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_BRACCI'));
    vars.setCON_B(vars.get('§SPOR_TS'));
    
    //#2
    if (vars.get('§VERN_BRACCI') == '0053' || vars.get('§VERN_BRACCI') == '0055' || vars.get('§VERN_BRACCI') == '0065' || vars.get('§VERN_BRACCI') == '0069' || vars.get('§VERN_BRACCI') == '0073' || vars.get('§VERN_BRACCI') == '0076' || vars.get('§VERN_BRACCI') == '0293') {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§SPOR_TS') == 300) {
        vars.setCF(0);
    }
    
    //#4
    if (vars.get('§VERN_BRACCI') == '0055' && (vars.get('§SPOR_TS') == 200 || vars.get('§SPOR_TS') == 225 || vars.get('§SPOR_TS') == 250 || vars.get('§SPOR_TS') == 300)) {
        vars.setCF(0);
    }
    
    //#5
    if (vars.get('§VERN_BRACCI') == '0053' && (vars.get('§SPOR_TS') == 200 || vars.get('§SPOR_TS') == 225 || vars.get('§SPOR_TS') == 250 || vars.get('§SPOR_TS') == 300)) {
        vars.setCF(0);
    }
    
    //#6
    if (vars.get('§VERN_BRACCI') == '0065' && vars.get('§SPOR_TS') == 300) {
        vars.setCF(0);
    }
    
    //#7
    if (vars.get('§VERN_BRACCI') == '0069' && vars.get('§SPOR_TS') == 300) {
        vars.setCF(0);
    }
    
    //#8
    if (vars.get('§VERN_BRACCI') == '0293' && vars.get('§SPOR_TS') == 300) {
        vars.setCF(0);
    }
    
    //#9
    if (vars.get('§VERN_BRACCI') == '0073' && (vars.get('§SPOR_TS') == 250 || vars.get('§SPOR_TS') == 300)) {
        vars.setCF(0);
    }
    
    //#10
    if (vars.get('§VERN_BRACCI') == '0065' && vars.get('§SPOR_TS') == 200) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
