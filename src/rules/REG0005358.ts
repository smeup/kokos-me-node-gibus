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

export const REG0005358: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005358
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
    // ( §FS_LED_PER_FRA<>§SI ) AND ( §FS_LED_PER_FRB=§SI ) AND ( §FS_LED_PER_SX<>§SI ) AND ( §FS_LED_PER_DX<>§SI )
    // THEN:
    // *SET *CF=#2
    // #4
    // COND:
    // ( §FS_LED_PER_FRA<>§SI ) AND (§FS_LED_PER_FRB<>§SI ) AND (§FS_LED_PER_SX=§SI ) AND ( §FS_LED_PER_DX<>§SI )
    // THEN:
    // *SET *CF=#1
    // #5
    // COND:
    // ( §FS_LED_PER_FRA<>§SI ) AND ( §FS_LED_PER_FRB<>§SI ) AND ( §FS_LED_PER_SX<>§SI ) AND ( §FS_LED_PER_DX=§SI )
    // THEN:
    // *SET *CF=#2
    // #6
    // COND:
    // ( §FS_LED_PER_FRA=§SI ) AND ( §FS_LED_PER_FRB=§SI ) AND ( §FS_LED_PER_SX<>§SI ) AND ( §FS_LED_PER_DX<>§SI )
    // THEN:
    // *SET *CF=#3
    // #7
    // COND:
    // ( §FS_LED_PER_FRA=§SI ) AND ( §FS_LED_PER_FRB<>§SI ) AND ( §FS_LED_PER_SX=§SI ) AND ( §FS_LED_PER_DX<>§SI )
    // THEN:
    // *SET *CF=#2
    // #8
    // COND:
    // ( §FS_LED_PER_FRA=§SI ) AND ( §FS_LED_PER_FRB<>§SI ) AND ( §FS_LED_PER_SX<>§SI ) AND ( §FS_LED_PER_DX=§SI )
    // THEN:
    // *SET *CF=#3
    // #9
    // COND:
    // ( §FS_LED_PER_FRA<>§SI ) AND ( §FS_LED_PER_FRB=§SI ) AND ( §FS_LED_PER_SX=§SI ) AND ( §FS_LED_PER_DX<>§SI )
    // THEN:
    // *SET *CF=#3
    // #10
    // COND:
    // ( §FS_LED_PER_FRA<>§SI ) AND ( §FS_LED_PER_FRB=§SI ) AND ( §FS_LED_PER_SX<>§SI ) AND ( §FS_LED_PER_DX=§SI )
    // THEN:
    // *SET *CF=#4
    // #11
    // COND:
    // ( §FS_LED_PER_FRA<>§SI ) AND (§FS_LED_PER_FRB<>§SI ) AND (§FS_LED_PER_SX=§SI ) AND (§FS_LED_PER_DX=§SI )
    // THEN:
    // *SET *CF=#3
    // #12
    // COND:
    // ( §FS_LED_PER_FRA=§SI ) AND ( §FS_LED_PER_FRB=§SI ) AND ( §FS_LED_PER_SX=§SI ) AND ( §FS_LED_PER_DX<>§SI )
    // THEN:
    // *SET *CF=#4
    // #13
    // COND:
    // ( §FS_LED_PER_FRA=§SI ) AND ( §FS_LED_PER_FRB=§SI ) AND (§FS_LED_PER_SX<>§SI ) AND ( §FS_LED_PER_DX=§SI )
    // THEN:
    // *SET *CF=#5
    // #14
    // COND:
    // ( §FS_LED_PER_FRA<>§SI ) AND (§FS_LED_PER_FRB=§SI ) AND (§FS_LED_PER_SX=§SI ) AND ( §FS_LED_PER_DX=§SI )
    // THEN:
    // *SET *CF=#5
    // #15
    // COND:
    // ( §FS_LED_PER_FRA=§SI ) AND ( §FS_LED_PER_FRB<>§SI ) AND (§FS_LED_PER_SX=§SI ) AND ( §FS_LED_PER_DX=§SI )
    // THEN:
    // *SET *CF=#4
    // #16
    // COND:
    // ( §FS_LED_PER_FRA=§SI ) AND ( §FS_LED_PER_FRB=§SI ) AND ( §FS_LED_PER_SX=§SI ) AND ( §FS_LED_PER_DX=§SI )
    // THEN:
    // *SET *CF=#6
    // #17
    // COND:
    // ( §FS_LED_PER=§SI ) AND ( §FS_LED_RGB=§SI )
    // THEN:
    // *SET *CF=#0
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
        vars.setCF(2);
    }
    
    //#4
    if ((vars.get('§FS_LED_PER_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') != vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') == vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') != vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#5
    if ((vars.get('§FS_LED_PER_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') != vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') != vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    
    //#6
    if ((vars.get('§FS_LED_PER_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') != vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') != vars.get('§SI'))) {
        vars.setCF(3);
    }
    
    //#7
    if ((vars.get('§FS_LED_PER_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') != vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') == vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') != vars.get('§SI'))) {
        vars.setCF(2);
    }
    
    //#8
    if ((vars.get('§FS_LED_PER_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') != vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') != vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') == vars.get('§SI'))) {
        vars.setCF(3);
    }
    
    //#9
    if ((vars.get('§FS_LED_PER_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') == vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') != vars.get('§SI'))) {
        vars.setCF(3);
    }
    
    //#10
    if ((vars.get('§FS_LED_PER_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') != vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') == vars.get('§SI'))) {
        vars.setCF(4);
    }
    
    //#11
    if ((vars.get('§FS_LED_PER_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') != vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') == vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') == vars.get('§SI'))) {
        vars.setCF(3);
    }
    
    //#12
    if ((vars.get('§FS_LED_PER_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') == vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') != vars.get('§SI'))) {
        vars.setCF(4);
    }
    
    //#13
    if ((vars.get('§FS_LED_PER_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') != vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') == vars.get('§SI'))) {
        vars.setCF(5);
    }
    
    //#14
    if ((vars.get('§FS_LED_PER_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') == vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') == vars.get('§SI'))) {
        vars.setCF(5);
    }
    
    //#15
    if ((vars.get('§FS_LED_PER_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') != vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') == vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') == vars.get('§SI'))) {
        vars.setCF(4);
    }
    
    //#16
    if ((vars.get('§FS_LED_PER_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_PER_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_PER_SX') == vars.get('§SI')) && (vars.get('§FS_LED_PER_DX') == vars.get('§SI'))) {
        vars.setCF(6);
    }
    
    //#17
    if ((vars.get('§FS_LED_PER') == vars.get('§SI')) && (vars.get('§FS_LED_RGB') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    
    // GENERATED

    return vars.output;
};
