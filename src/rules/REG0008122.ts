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

export const REG0008122: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008122
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A='P072'
    // #2
    // COND:
    // §VERN_1_COM='0055' OR §VERN_1_COM='0053' OR  §VR_ABB = '01' OR  §VR_ABB = '02'
    // THEN:
    // *SET *CON-A='P055'
    // #3
    // COND:
    // §FS_FAM2_OPENFLY=§SI
    // THEN:
    // *SET *CF = [ §L_GUIDA/#100 ]
    // #4
    // COND:
    // ( §FS_FAM2_FLY_R = §SI ) AND ( ( §FS_FAM2_ISOLA =§SI ) OR ( §FS_FAM2_ADDL = §SI )  )
    // THEN:
    // *SET §DUMMYN1 = [ §SPOR + #35,5 ]
    // #5
    // COND:
    // ( §FS_FAM2_FLY_R = §SI )  AND ( ( §FS_FAM2_ISOLA =§SI ) OR ( §FS_FAM2_ADDL=§SI ) )
    // THEN:
    // *SET *CF= [ §DUMMYN1 / #100 ]
    // #6
    // COND:
    // ( §FS_FAM2_FLY_R = §SI ) AND ( §FS_FAM2_ADDF=§SI ) AND ( §N_MODULI = #1 )
    // THEN:
    // *SET §DUMMYN2 = [ §SPOR + #45 ]
    // #7
    // COND:
    // ( §FS_FAM2_FLY_R = §SI ) AND ( §FS_FAM2_ADDF=§SI ) AND ( §N_MODULI = #1 )
    // THEN:
    // *SET *CF= [ §DUMMYN2 / #100 ]
    // #8
    // COND:
    // ( §FS_FAM2_FLY_R = §SI ) AND ( §FS_FAM2_ADDF=§SI ) AND ( §N_MODULI = #2 )
    // THEN:
    // *SET §DUMMYN3 = [ §SPOR + #67 ]
    // #9
    // COND:
    // ( §FS_FAM2_FLY_R = §SI ) AND ( §FS_FAM2_ADDF=§SI ) AND ( §N_MODULI = #2 )
    // THEN:
    // *SET *CF = [ §DUMMYN3  / #100 ]
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('P072');
    
    //#2
    if (vars.get('§VERN_1_COM') == '0055' || vars.get('§VERN_1_COM') == '0053' || vars.get('§VR_ABB') == '01' || vars.get('§VR_ABB') == '02') {
        vars.setCON_A('P055');
    }
    
    //#3
    if (vars.get('§FS_FAM2_OPENFLY') == vars.get('§SI')) {
        vars.setCF(vars.get('§L_GUIDA') / 100);
    }
    
    //#4
    if (vars.get('§FS_FAM2_FLY_R') == vars.get('§SI') && (vars.get('§FS_FAM2_ISOLA') == vars.get('§SI') || vars.get('§FS_FAM2_ADDL') == vars.get('§SI'))) {
        vars.setDUMMYN1(vars.get('§SPOR') + 35.5);
    }
    
    //#5
    if (vars.get('§FS_FAM2_FLY_R') == vars.get('§SI') && (vars.get('§FS_FAM2_ISOLA') == vars.get('§SI') || vars.get('§FS_FAM2_ADDL') == vars.get('§SI'))) {
        vars.setCF(vars.get('§DUMMYN1') / 100);
    }
    
    //#6
    if (vars.get('§FS_FAM2_FLY_R') == vars.get('§SI') && vars.get('§FS_FAM2_ADDF') == vars.get('§SI') && vars.get('§N_MODULI') == 1) {
        vars.setDUMMYN2(vars.get('§SPOR') + 45);
    }
    
    //#7
    if (vars.get('§FS_FAM2_FLY_R') == vars.get('§SI') && vars.get('§FS_FAM2_ADDF') == vars.get('§SI') && vars.get('§N_MODULI') == 1) {
        vars.setCF(vars.get('§DUMMYN2') / 100);
    }
    
    //#8
    if (vars.get('§FS_FAM2_FLY_R') == vars.get('§SI') && vars.get('§FS_FAM2_ADDF') == vars.get('§SI') && vars.get('§N_MODULI') == 2) {
        vars.setDUMMYN3(vars.get('§SPOR') + 67);
    }
    
    //#9
    if (vars.get('§FS_FAM2_FLY_R') == vars.get('§SI') && vars.get('§FS_FAM2_ADDF') == vars.get('§SI') && vars.get('§N_MODULI') == 2) {
        vars.setCF(vars.get('§DUMMYN3') / 100);
    }
    // GENERATED

    return vars.output;
};
