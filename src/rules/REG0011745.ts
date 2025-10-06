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

export const REG0011745: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011745
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // #2
    // COND:
    // §FS_SPA_60 = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_SPA_75 = §SI
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_TS_SMO = §SI
    // THEN:
    // *SET *NT = 'TENDA SMONTATA'
    // #5
    // COND:
    // §FS_TEN_2PZ = §SI
    // THEN:
    // *SET *NT = 'TENDA DIVISA, KIT RIVETTI'
    // #6
    // COND:
    // §FS_TS_SMO = §SI AND §FS_TS_MET = §SI
    // THEN:
    // *SET *NT = 'TENDA SMONTATA E DIVISA A META'
    // #7
    // COND:
    // §FS_TS_MET = §SI AND §FS_TS_ASS_T01 = §NO
    // THEN:
    // *SET *NT = 'TENDA NON ASSEMBLATA E DIVISA A META'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#2
    if (vars.get('§FS_SPA_60') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_SPA_75') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§FS_TS_SMO') == vars.get('§SI')) {
        vars.setNT('TENDA SMONTATA');
    }
    
    //#5
    if (vars.get('§FS_TEN_2PZ') == vars.get('§SI')) {
        vars.setNT('TENDA DIVISA, KIT RIVETTI');
    }
    
    //#6
    if (vars.get('§FS_TS_SMO') == vars.get('§SI') && vars.get('§FS_TS_MET') == vars.get('§SI')) {
        vars.setNT('TENDA SMONTATA E DIVISA A META');
    }
    
    //#7
    if (vars.get('§FS_TS_MET') == vars.get('§SI') && vars.get('§FS_TS_ASS_T01') == vars.get('§NO')) {
        vars.setNT('TENDA NON ASSEMBLATA E DIVISA A META');
    }
    // GENERATED

    return vars.output;
};
