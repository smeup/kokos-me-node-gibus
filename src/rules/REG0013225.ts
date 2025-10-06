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

export const REG0013225: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013225
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_FAM2_TOLO = §SI  OR §FS_DUCK = §SI OR §FS_DIDUE = §SI OR §FS_COMBI_60 = §SI OR §FS_SPA_60 = §SI
    // THEN:
    // *SET *CF = #2
    // #3
    // COND:
    // §FS_SPA_75 = §SI OR §FS_SCRIGNO_250 = §SI OR §FS_FAM2_SP = §SI OR §FS_FAM2_TEKA = §SI OR §FS_FAM2_DIM_TC = §SI
    // THEN:
    // *SET *CF = #2
    // #4
    // COND:
    // §FS_IMPERO = §SI OR §FS_FORGIATO = §SI OR §FS_VOL_SPA = §SI OR §FS_VOLANT = §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §_AR = 'TL0006' AND §TL_TIPO_CONF = '01'
    // THEN:
    // *SET *CF = #2
    // #6
    // COND:
    // *CF >= #1 AND §FP_MANTOVANA = §SI
    // THEN:
    // *SET §DUMMYN1 = *CF
    // #7
    // COND:
    // *CF >= #1 AND §FP_MANTOVANA = §SI
    // THEN:
    // *SET *CF = [ §DUMMYN1 + #1]
    // #8
    // COND:
    // *CF >= #1
    // THEN:
    // *SET §DUMMYN1 = *CF
    // #9
    // COND:
    // *CF >= #1
    // THEN:
    // *SET *CF = [ §DUMMYN1 * §LARG / #100]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_FAM2_TOLO') == vars.get('§SI') || vars.get('§FS_DUCK') == vars.get('§SI') || vars.get('§FS_DIDUE') == vars.get('§SI') || vars.get('§FS_COMBI_60') == vars.get('§SI') || vars.get('§FS_SPA_60') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#3
    if (vars.get('§FS_SPA_75') == vars.get('§SI') || vars.get('§FS_SCRIGNO_250') == vars.get('§SI') || vars.get('§FS_FAM2_SP') == vars.get('§SI') || vars.get('§FS_FAM2_TEKA') == vars.get('§SI') || vars.get('§FS_FAM2_DIM_TC') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#4
    if (vars.get('§FS_IMPERO') == vars.get('§SI') || vars.get('§FS_FORGIATO') == vars.get('§SI') || vars.get('§FS_VOL_SPA') == vars.get('§SI') || vars.get('§FS_VOLANT') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('_AR') == 'TL0006' && vars.get('§TL_TIPO_CONF') == '01') {
        vars.setCF(2);
    }
    
    //#6
    if (vars.getCF() >= 1 && vars.get('§FP_MANTOVANA') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.getCF());
    }
    
    //#7
    if (vars.getCF() >= 1 && vars.get('§FP_MANTOVANA') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1') + 1);
    }
    
    //#8
    if (vars.getCF() >= 1) {
        vars.setDUMMYN1(vars.getCF());
    }
    
    //#9
    if (vars.getCF() >= 1) {
        vars.setCF(vars.get('§DUMMYN1') * vars.get('§LARG') / 100);
    }
    // GENERATED

    return vars.output;
};
