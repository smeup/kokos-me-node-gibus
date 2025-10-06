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

export const REG0008124: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008124
    // REQUEST:
    // """
    // #1
    // COND:
    // §N_MODULI >=#2
    // ELSE:
    // *SET *LG=''
    // #2
    // THEN:
    // *SET *CON-A='P072'
    // #3
    // COND:
    // §VERN_1_COM='0055' OR §VERN_1_COM='0053' OR  §VR_ABB = '01' OR  §VR_ABB = '02'
    // THEN:
    // *SET *CON-A='P055'
    // #4
    // COND:
    // §FS_FAM2_OPENFLY=§SI
    // THEN:
    // *SET *CF = [ §L_GUIDA/#100 ]
    // #5
    // COND:
    // ( §FS_FAM2_FLY_R = §SI ) AND ( §FS_FAM2_ISOLA = §SI )
    // THEN:
    // *SET §DUMMYN1 = [ §SPOR + #35,5 ]
    // #6
    // COND:
    // ( §FS_FAM2_FLY_R = §SI ) AND ( §FS_FAM2_ISOLA = §SI )
    // THEN:
    // *SET *CF= [ §DUMMYN1 / #100 ]
    // #7
    // COND:
    // ( §FS_FAM2_FLY_R = §SI ) AND ( §FS_FAM2_ADDF=§SI ) AND ( §N_MODULI = #2 )
    // THEN:
    // *SET §DUMMYN2 = [ §SPOR + #66,7 ]
    // #8
    // COND:
    // ( §FS_FAM2_FLY_R = §SI ) AND ( §FS_FAM2_ADDF=§SI ) AND ( §N_MODULI = #2 )
    // THEN:
    // *SET *CF= [ §DUMMYN2 / #100 ]
    // """
    // RESPONSE:
    //#1
    if (vars.get('§N_MODULI') >= 2) {
    } else {
        vars.setLG('');
    }
    
    //#2
    vars.setCON_A('P072');
    
    //#3
    if (vars.get('§VERN_1_COM') == '0055' || vars.get('§VERN_1_COM') == '0053' || vars.get('§VR_ABB') == '01' || vars.get('§VR_ABB') == '02') {
        vars.setCON_A('P055');
    }
    
    //#4
    if (vars.get('§FS_FAM2_OPENFLY') == vars.get('§SI')) {
        vars.setCF(vars.get('§L_GUIDA') / 100);
    }
    
    //#5
    if ((vars.get('§FS_FAM2_FLY_R') == vars.get('§SI')) && (vars.get('§FS_FAM2_ISOLA') == vars.get('§SI'))) {
        vars.setDUMMYN1(vars.get('§SPOR') + 35.5);
    }
    
    //#6
    if ((vars.get('§FS_FAM2_FLY_R') == vars.get('§SI')) && (vars.get('§FS_FAM2_ISOLA') == vars.get('§SI'))) {
        vars.setCF(vars.get('§DUMMYN1') / 100);
    }
    
    //#7
    if ((vars.get('§FS_FAM2_FLY_R') == vars.get('§SI')) && (vars.get('§FS_FAM2_ADDF') == vars.get('§SI')) && (vars.get('§N_MODULI') == 2)) {
        vars.setDUMMYN2(vars.get('§SPOR') + 66.7);
    }
    
    //#8
    if ((vars.get('§FS_FAM2_FLY_R') == vars.get('§SI')) && (vars.get('§FS_FAM2_ADDF') == vars.get('§SI')) && (vars.get('§N_MODULI') == 2)) {
        vars.setCF(vars.get('§DUMMYN2') / 100);
    }
    
    // GENERATED

    return vars.output;
};
