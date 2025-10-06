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

export const REG0000514: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000514
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_SEGNO = §SI
    // THEN:
    // *SET *CON-A = §VERN_PLAST
    // ELSE:
    // *SET *LG = ''
    // #2
    // THEN:
    // *SET *CF = [§NR_CP_BRACCI * #2]
    // #3
    // COND:
    // §FS_BRAC_SING_DX = §SI
    // THEN:
    // *SET §DUMMYN1 = [*CF + #1]
    // #4
    // COND:
    // §FS_BRAC_SING_DX = §SI
    // THEN:
    // *SET *CF = §DUMMYN1
    // #5
    // COND:
    // §FS_BRAC_SING_SX = §SI
    // THEN:
    // *SET §DUMMYN1 = [*CF + #1]
    // #6
    // COND:
    // §FS_BRAC_SING_SX = §SI
    // THEN:
    // *SET *CF = §DUMMYN1
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_SEGNO') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_PLAST'));
    } else {
        vars.setLG('');
    }
    
    //#2
    vars.setCF(vars.get('§NR_CP_BRACCI') * 2);
    
    //#3
    if (vars.get('§FS_BRAC_SING_DX') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§CF') + 1);
    }
    
    //#4
    if (vars.get('§FS_BRAC_SING_DX') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    
    //#5
    if (vars.get('§FS_BRAC_SING_SX') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§CF') + 1);
    }
    
    //#6
    if (vars.get('§FS_BRAC_SING_SX') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    
    // GENERATED

    return vars.output;
};
