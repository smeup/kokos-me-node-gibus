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

export const REG0005354: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005354
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_LED_PER_FRA=§SI ) AND ( §FS_LED_PER_FRB<>§SI ) AND ( §FS_LED_PER_SX<>§SI ) AND ( §FS_LED_PER_DX<>§SI )
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // (§FS_LED_PER_FRA<>§SI ) AND ( §FS_LED_PER_FRB=§SI ) AND ( §FS_LED_PER_SX<>§SI ) AND ( §FS_LED_PER_DX<>§SI )
    // THEN:
    // *SET *CF=#1
    // #4
    // COND:
    // ( §FS_LED_PER_FRA<>§SI ) AND ( §FS_LED_PER_FRB<>§SI ) AND ( §FS_LED_PER_SX=§SI ) AND ( §FS_LED_PER_DX<>§SI )
    // THEN:
    // *SET *CF=#1
    // #5
    // COND:
    // ( §FS_LED_PER_FRA<>§SI ) AND ( §FS_LED_PER_FRB<>§SI ) AND ( §FS_LED_PER_SX<>§SI ) AND ( §FS_LED_PER_DX=§SI )
    // THEN:
    // *SET *CF=#1
    // #6
    // COND:
    // ( §FS_LED_PER_FRA=§SI ) AND ( §FS_LED_PER_FRB=§SI ) AND ( §FS_LED_PER_SX<>§SI ) AND ( §FS_LED_PER_DX<>§SI )
    // THEN:
    // *SET *CF=#2
    // #7
    // COND:
    // (§FS_LED_PER_FRA=§SI ) AND (§FS_LED_PER_FRB<>§SI ) AND ( §FS_LED_PER_SX=§SI ) AND ( §FS_LED_PER_DX<>§SI )
    // THEN:
    // *SET *CF=#1
    // #8
    // COND:
    // ( §FS_LED_PER_FRA=§SI ) AND (§FS_LED_PER_FRB<>§SI ) AND ( §FS_LED_PER_SX<>§SI ) AND ( §FS_LED_PER_DX=§SI )
    // THEN:
    // *SET *CF=#2
    // #9
    // COND:
    // ( §FS_LED_PER_FRA<>§SI ) AND (§FS_LED_PER_FRB=§SI ) AND (§FS_LED_PER_SX=§SI ) AND (§FS_LED_PER_DX<>§SI )
    // THEN:
    // *SET *CF=#2
    // #10
    // COND:
    // (§FS_LED_PER_FRA<>§SI ) AND (§FS_LED_PER_FRB=§SI ) AND ( §FS_LED_PER_SX<>§SI ) AND ( §FS_LED_PER_DX=§SI )
    // THEN:
    // *SET *CF=#1
    // #11
    // COND:
    // ( §FS_LED_PER_FRA<>§SI ) AND (§FS_LED_PER_FRB<>§SI ) AND (§FS_LED_PER_SX=§SI ) AND ( §FS_LED_PER_DX=§SI )
    // THEN:
    // *SET *CF=#2
    // #12
    // COND:
    // ( §FS_LED_PER_FRA=§SI ) AND ( §FS_LED_PER_FRB=§SI ) AND (§FS_LED_PER_SX=§SI ) AND ( §FS_LED_PER_DX<>§SI )
    // THEN:
    // *SET *CF=#2
    // #13
    // COND:
    // ( §FS_LED_PER_FRA=§SI ) AND ( §FS_LED_PER_FRB=§SI ) AND ( §FS_LED_PER_SX<>§SI ) AND ( §FS_LED_PER_DX=§SI )
    // THEN:
    // *SET *CF=#2
    // #14
    // COND:
    // (§FS_LED_PER_FRA<>§SI ) AND ( §FS_LED_PER_FRB=§SI ) AND (§FS_LED_PER_SX=§SI ) AND ( §FS_LED_PER_DX=§SI )
    // THEN:
    // *SET *CF=#2
    // #15
    // COND:
    // ( §FS_LED_PER_FRA=§SI ) AND (§FS_LED_PER_FRB<>§SI ) AND ( §FS_LED_PER_SX=§SI ) AND ( §FS_LED_PER_DX=§SI )
    // THEN:
    // *SET *CF=#2
    // #16
    // COND:
    // (§FS_LED_PER_FRA=§SI ) AND (§FS_LED_PER_FRB=§SI ) AND (§FS_LED_PER_SX=§SI ) AND (§FS_LED_PER_DX=§SI )
    // THEN:
    // *SET *CF=#2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_LED_PER_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') != vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') != vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') != vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#3
    if ((vars.get('§FS_LED_PER_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') != vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') != vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#4
    if ((vars.get('§FS_LED_PER_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') != vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') == vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') != vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#5
    if ((vars.get('§FS_LED_PER_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') != vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') != vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#6
    if ((vars.get('§FS_LED_PER_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') != vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') != vars.get('§SI'))) {
        vars.setCF(2);
    }
    
    //#7
    if ((vars.get('§FS_LED_PER_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') != vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') == vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') != vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#8
    if ((vars.get('§FS_LED_PER_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') != vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') != vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    
    //#9
    if ((vars.get('§FS_LED_PER_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') == vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') != vars.get('§SI'))) {
        vars.setCF(2);
    }
    
    //#10
    if ((vars.get('§FS_LED_PER_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') != vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#11
    if ((vars.get('§FS_LED_PER_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') != vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') == vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    
    //#12
    if ((vars.get('§FS_LED_PER_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') == vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') != vars.get('§SI'))) {
        vars.setCF(2);
    }
    
    //#13
    if ((vars.get('§FS_LED_PER_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') != vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    
    //#14
    if ((vars.get('§FS_LED_PER_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') == vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    
    //#15
    if ((vars.get('§FS_LED_PER_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') != vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') == vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    
    //#16
    if ((vars.get('§FS_LED_PER_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') == vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    
    // GENERATED

    return vars.output;
};
