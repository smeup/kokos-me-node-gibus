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

export const REG0004687: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004687
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // (§FS_LED_PER_FRA=§SI ) AND (§FS_LED_PER_FRB<>§SI ) AND (§FS_LED_PER_SX<>§SI ) AND ( §FS_LED_PER_DX<>§SI )
    // THEN:
    // *SET *CF=#0
    // #3
    // COND:
    // (§FS_LED_PER_FRA<>§SI ) AND (§FS_LED_PER_FRB=§SI ) AND (§FS_LED_PER_SX<>§SI ) AND ( §FS_LED_PER_DX<>§SI )
    // THEN:
    // *SET *CF=#0
    // #4
    // COND:
    // (§FS_LED_PER_FRA<>§SI ) AND (§FS_LED_PER_FRB<>§SI ) AND (§FS_LED_PER_SX=§SI ) AND ( §FS_LED_PER_DX<>§SI )
    // THEN:
    // *SET *CF=#0
    // #5
    // COND:
    // (§FS_LED_PER_FRA<>§SI ) AND (§FS_LED_PER_FRB<>§SI ) AND (§FS_LED_PER_SX<>§SI ) AND ( §FS_LED_PER_DX=§SI )
    // THEN:
    // *SET *CF=#0
    // #6
    // COND:
    // (§FS_LED_PER_FRA=§SI ) AND (§FS_LED_PER_FRB=§SI ) AND (§FS_LED_PER_SX<>§SI ) AND ( §FS_LED_PER_DX<>§SI )
    // THEN:
    // *SET *CF=#0
    // #7
    // COND:
    // (§FS_LED_PER_FRA=§SI ) AND (§FS_LED_PER_FRB<>§SI ) AND (§FS_LED_PER_SX=§SI ) AND ( §FS_LED_PER_DX<>§SI )
    // THEN:
    // *SET *CF=#2
    // #8
    // COND:
    // (§FS_LED_PER_FRA=§SI ) AND (§FS_LED_PER_FRB<>§SI ) AND (§FS_LED_PER_SX<>§SI ) AND ( §FS_LED_PER_DX=§SI )
    // THEN:
    // *SET *CF=#1
    // #9
    // COND:
    // (§FS_LED_PER_FRA<>§SI ) AND (§FS_LED_PER_FRB=§SI ) AND (§FS_LED_PER_SX=§SI ) AND ( §FS_LED_PER_DX<>§SI )
    // THEN:
    // *SET *CF=#0
    // #10
    // COND:
    // (§FS_LED_PER_FRA<>§SI ) AND (§FS_LED_PER_FRB=§SI ) AND (§FS_LED_PER_SX<>§SI ) AND ( §FS_LED_PER_DX=§SI )
    // THEN:
    // *SET *CF=#1
    // #11
    // COND:
    // (§FS_LED_PER_FRA<>§SI ) AND (§FS_LED_PER_FRB<>§SI ) AND (§FS_LED_PER_SX=§SI ) AND ( §FS_LED_PER_DX=§SI )
    // THEN:
    // *SET *CF=#1
    // #12
    // COND:
    // (§FS_LED_PER_FRA=§SI ) AND (§FS_LED_PER_FRB=§SI ) AND (§FS_LED_PER_SX=§SI ) AND ( §FS_LED_PER_DX<>§SI )
    // THEN:
    // *SET *CF=#2
    // #13
    // COND:
    // (§FS_LED_PER_FRA=§SI ) AND (§FS_LED_PER_FRB=§SI ) AND (§FS_LED_PER_SX<>§SI ) AND ( §FS_LED_PER_DX=§SI )
    // THEN:
    // *SET *CF=#2
    // #14
    // COND:
    // (§FS_LED_PER_FRA<>§SI ) AND (§FS_LED_PER_FRB=§SI ) AND (§FS_LED_PER_SX=§SI ) AND ( §FS_LED_PER_DX=§SI )
    // THEN:
    // *SET *CF=#2
    // #15
    // COND:
    // (§FS_LED_PER_FRA=§SI ) AND (§FS_LED_PER_FRB<>§SI ) AND (§FS_LED_PER_SX=§SI ) AND ( §FS_LED_PER_DX=§SI )
    // THEN:
    // *SET *CF=#3
    // #16
    // COND:
    // ( §FS_LED_PER_FRA=§SI ) AND (§FS_LED_PER_FRB=§SI ) AND (§FS_LED_PER_SX=§SI ) AND ( §FS_LED_PER_DX=§SI )
    // THEN:
    // *SET *CF=#4
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_LED_PER_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') != vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') != vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') != vars.get('§SI'))) {
        vars.setCF(0);
    }
    
    //#3
    if ((vars.get('§FS_LED_PER_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') != vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') != vars.get('§SI'))) {
        vars.setCF(0);
    }
    
    //#4
    if ((vars.get('§FS_LED_PER_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') != vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') == vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') != vars.get('§SI'))) {
        vars.setCF(0);
    }
    
    //#5
    if ((vars.get('§FS_LED_PER_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') != vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') != vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    
    //#6
    if ((vars.get('§FS_LED_PER_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') != vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') != vars.get('§SI'))) {
        vars.setCF(0);
    }
    
    //#7
    if ((vars.get('§FS_LED_PER_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') != vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') == vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') != vars.get('§SI'))) {
        vars.setCF(2);
    }
    
    //#8
    if ((vars.get('§FS_LED_PER_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') != vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') != vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#9
    if ((vars.get('§FS_LED_PER_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') == vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') != vars.get('§SI'))) {
        vars.setCF(0);
    }
    
    //#10
    if ((vars.get('§FS_LED_PER_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') != vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#11
    if ((vars.get('§FS_LED_PER_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') != vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') == vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') == vars.get('§SI'))) {
        vars.setCF(1);
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
        vars.setCF(3);
    }
    
    //#16
    if ((vars.get('§FS_LED_PER_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') == vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') == vars.get('§SI'))) {
        vars.setCF(4);
    }
    
    // GENERATED

    return vars.output;
};
