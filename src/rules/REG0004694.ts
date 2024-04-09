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

export const REG0004694: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004694
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_LED_RGB_FRA=§SI ) AND (§FS_LED_RGB_FRB<>§SI ) AND (§FS_LED_RGB_SX<>§SI ) AND ( §FS_LED_RGB_DX<>§SI )                    AND ( §FS_FAM2_ZENIT <>§SI )
    // THEN:
    // *SET *CF=#2
    // #3
    // COND:
    // ( §FS_LED_RGB_FRA<>§SI ) AND (§FS_LED_RGB_FRB=§SI ) AND (§FS_LED_RGB_SX<>§SI ) AND ( §FS_LED_RGB_DX<>§SI )                     AND ( §FS_FAM2_ZENIT<>§SI )
    // THEN:
    // *SET *CF=#1
    // #4
    // COND:
    // ( §FS_LED_RGB_FRA<>§SI ) AND (§FS_LED_RGB_FRB<>§SI ) AND (§FS_LED_RGB_SX=§SI ) AND ( §FS_LED_RGB_DX<>§SI )                    AND ( §FS_FAM2_ZENIT<>§SI )
    // THEN:
    // *SET *CF=#1
    // #5
    // COND:
    // ( §FS_LED_RGB_FRA<>§SI ) AND (§FS_LED_RGB_FRB<>§SI ) AND (§FS_LED_RGB_SX<>§SI ) AND ( §FS_LED_RGB_DX=§SI )                    AND ( §FS_FAM2_ZENIT<>§SI )
    // THEN:
    // *SET *CF=#2
    // #6
    // COND:
    // ( §FS_LED_RGB_FRA=§SI ) AND (§FS_LED_RGB_FRB=§SI ) AND (§FS_LED_RGB_SX<>§SI ) AND ( §FS_LED_RGB_DX<>§SI )
    // THEN:
    // *SET *CF=#3
    // #7
    // COND:
    // ( §FS_LED_RGB_FRA=§SI ) AND (§FS_LED_RGB_FRB<>§SI ) AND (§FS_LED_RGB_SX=§SI ) AND ( §FS_LED_RGB_DX<>§SI )
    // THEN:
    // *SET *CF=#3
    // #8
    // COND:
    // ( §FS_LED_RGB_FRA=§SI ) AND (§FS_LED_RGB_FRB<>§SI ) AND (§FS_LED_RGB_SX<>§SI ) AND ( §FS_LED_RGB_DX=§SI )
    // THEN:
    // *SET *CF=#4
    // #9
    // COND:
    // ( §FS_LED_RGB_FRA<>§SI ) AND (§FS_LED_RGB_FRB=§SI ) AND (§FS_LED_RGB_SX=§SI ) AND ( §FS_LED_RGB_DX<>§SI )                      AND ( §FS_FAM2_ZENIT<>§SI)
    // THEN:
    // *SET *CF=#2
    // #10
    // COND:
    // ( §FS_LED_RGB_FRA<>§SI ) AND (§FS_LED_RGB_FRB=§SI ) AND (§FS_LED_RGB_SX<>§SI ) AND ( §FS_LED_RGB_DX=§SI )
    // THEN:
    // *SET *CF=#3
    // #11
    // COND:
    // ( §FS_LED_RGB_FRA<>§SI ) AND (§FS_LED_RGB_FRB<>§SI ) AND (§FS_LED_RGB_SX=§SI ) AND ( §FS_LED_RGB_DX=§SI )
    // THEN:
    // *SET *CF=#3
    // #12
    // COND:
    // ( §FS_LED_RGB_FRA=§SI ) AND (§FS_LED_RGB_FRB=§SI ) AND (§FS_LED_RGB_SX=§SI ) AND ( §FS_LED_RGB_DX<>§SI )
    // THEN:
    // *SET *CF=#4
    // #13
    // COND:
    // ( §FS_LED_RGB_FRA=§SI ) AND (§FS_LED_RGB_FRB=§SI ) AND (§FS_LED_RGB_SX<>§SI ) AND ( §FS_LED_RGB_DX=§SI )                      AND ( §FS_FAM2_ZENIT<>§SI )
    // THEN:
    // *SET *CF=#5
    // #14
    // COND:
    // ( §FS_LED_RGB_FRA<>§SI ) AND (§FS_LED_RGB_FRB=§SI ) AND (§FS_LED_RGB_SX=§SI ) AND ( §FS_LED_RGB_DX=§SI )
    // THEN:
    // *SET *CF=#4
    // #15
    // COND:
    // ( §FS_LED_RGB_FRA=§SI ) AND (§FS_LED_RGB_FRB<>§SI ) AND (§FS_LED_RGB_SX=§SI ) AND ( §FS_LED_RGB_DX=§SI )                       AND ( §FS_FAM2_ZENIT<>§SI )
    // THEN:
    // *SET *CF=#5
    // #16
    // COND:
    // ( §FS_LED_RGB_FRA=§SI ) AND (§FS_LED_RGB_FRB=§SI ) AND (§FS_LED_RGB_SX=§SI ) AND ( §FS_LED_RGB_DX=§SI )                        AND ( §FS_FAM2_ZENIT<>§SI )
    // THEN:
    // *SET *CF=#6
    // #17
    // COND:
    // ( §FS_LED_RGB_FRA<>§SI ) AND (§FS_LED_RGB_FRB=§SI ) AND (§FS_LED_RGB_SX<>§SI ) AND ( §FS_LED_RGB_DX<>§SI )                   AND ( §FS_FAM2_ZENIT = §SI )
    // THEN:
    // *SET *CF=#2
    // #18
    // COND:
    // ( §FS_LED_RGB_FRA=§SI ) AND (§FS_LED_RGB_FRB=§SI ) AND (§FS_LED_RGB_SX=§SI ) AND ( §FS_LED_RGB_DX=§SI )                        AND ( ( §FS_FAM2_ZENIT=§SI )
    // THEN:
    // *SET *CF = #5
    // #19
    // COND:
    // (§FS_LED_RGB_FRA=§SI ) AND (§FS_LED_RGB_FRB<>§SI ) AND (§FS_LED_RGB_SX<>§SI ) AND ( §FS_LED_RGB_DX<>§SI )                     AND ( §FS_FAM2_ZENIT = §SI )
    // THEN:
    // *SET *CF=#1
    // #20
    // COND:
    // ( §FS_LED_RGB_FRA<>§SI ) AND (§FS_LED_RGB_FRB=§SI ) AND (§FS_LED_RGB_SX<>§SI ) AND ( §FS_LED_RGB_DX<>§SI )                     AND ( §FS_FAM2_ZENIT=§SI )
    // THEN:
    // *SET *CF= #2
    // #21
    // COND:
    // ( §FS_LED_RGB_FRA<>§SI ) AND (§FS_LED_RGB_FRB<>§SI ) AND (§FS_LED_RGB_SX<>§SI ) AND ( §FS_LED_RGB_DX=§SI )                    AND ( §FS_FAM2_ZENIT=§SI )
    // THEN:
    // *SET *CF=#2
    // #22
    // COND:
    // ( §FS_LED_RGB_FRA<>§SI ) AND (§FS_LED_RGB_FRB<>§SI ) AND (§FS_LED_RGB_SX=§SI ) AND ( §FS_LED_RGB_DX<>§SI )                    AND ( §FS_FAM2_ZENIT=§SI )
    // THEN:
    // *SET *CF = #2
    // #23
    // COND:
    // ( §FS_LED_RGB_FRA<>§SI ) AND (§FS_LED_RGB_FRB=§SI ) AND (§FS_LED_RGB_SX=§SI ) AND ( §FS_LED_RGB_DX<>§SI )                      AND ( §FS_FAM2_ZENIT=§SI)
    // THEN:
    // *SET *CF=#3
    // #24
    // COND:
    // ( §FS_LED_RGB_FRA=§SI ) AND (§FS_LED_RGB_FRB=§SI ) AND (§FS_LED_RGB_SX<>§SI ) AND ( §FS_LED_RGB_DX=§SI )                        AND ( §FS_FAM2_ZENIT = §SI )
    // THEN:
    // *SET *CF=#4
    // #25
    // COND:
    // ( §FS_LED_RGB_FRA=§SI ) AND (§FS_LED_RGB_FRB<>§SI ) AND (§FS_LED_RGB_SX=§SI ) AND ( §FS_LED_RGB_DX=§SI )                       AND ( §FS_FAM2_ZENIT=§SI )
    // THEN:
    // *SET *CF=#4
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_LED_RGB_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_SX') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') != vars.get('§SI')) && (vars.get('§FS_FAM2_ZENIT') != vars.get('§SI'))) {
        vars.setCF(2);
    }
    
    //#3
    if ((vars.get('§FS_LED_RGB_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_SX') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') != vars.get('§SI')) && (vars.get('§FS_FAM2_ZENIT') != vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#4
    if ((vars.get('§FS_LED_RGB_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_SX') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') != vars.get('§SI')) && (vars.get('§FS_FAM2_ZENIT') != vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#5
    if ((vars.get('§FS_LED_RGB_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_SX') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') == vars.get('§SI')) && (vars.get('§FS_FAM2_ZENIT') != vars.get('§SI'))) {
        vars.setCF(2);
    }
    
    //#6
    if ((vars.get('§FS_LED_RGB_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_SX') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') != vars.get('§SI'))) {
        vars.setCF(3);
    }
    
    //#7
    if ((vars.get('§FS_LED_RGB_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_SX') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') != vars.get('§SI'))) {
        vars.setCF(3);
    }
    
    //#8
    if ((vars.get('§FS_LED_RGB_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_SX') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') == vars.get('§SI'))) {
        vars.setCF(4);
    }
    
    //#9
    if ((vars.get('§FS_LED_RGB_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_SX') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') != vars.get('§SI')) && (vars.get('§FS_FAM2_ZENIT') != vars.get('§SI'))) {
        vars.setCF(2);
    }
    
    //#10
    if ((vars.get('§FS_LED_RGB_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_SX') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') == vars.get('§SI'))) {
        vars.setCF(3);
    }
    
    //#11
    if ((vars.get('§FS_LED_RGB_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_SX') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') == vars.get('§SI'))) {
        vars.setCF(3);
    }
    
    //#12
    if ((vars.get('§FS_LED_RGB_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_SX') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') != vars.get('§SI'))) {
        vars.setCF(4);
    }
    
    //#13
    if ((vars.get('§FS_LED_RGB_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_SX') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') == vars.get('§SI')) && (vars.get('§FS_FAM2_ZENIT') != vars.get('§SI'))) {
        vars.setCF(5);
    }
    
    //#14
    if ((vars.get('§FS_LED_RGB_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_SX') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') == vars.get('§SI'))) {
        vars.setCF(4);
    }
    
    //#15
    if ((vars.get('§FS_LED_RGB_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_SX') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') == vars.get('§SI')) && (vars.get('§FS_FAM2_ZENIT') != vars.get('§SI'))) {
        vars.setCF(5);
    }
    
    //#16
    if ((vars.get('§FS_LED_RGB_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_SX') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') == vars.get('§SI')) && (vars.get('§FS_FAM2_ZENIT') != vars.get('§SI'))) {
        vars.setCF(6);
    }
    
    //#17
    if ((vars.get('§FS_LED_RGB_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_SX') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') != vars.get('§SI')) && (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    
    //#18
    if ((vars.get('§FS_LED_RGB_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_SX') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') == vars.get('§SI')) && (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI'))) {
        vars.setCF(5);
    }
    
    //#19
    if ((vars.get('§FS_LED_RGB_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_SX') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') != vars.get('§SI')) && (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#20
    if ((vars.get('§FS_LED_RGB_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_SX') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') != vars.get('§SI')) && (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    
    //#21
    if ((vars.get('§FS_LED_RGB_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_SX') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') == vars.get('§SI')) && (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    
    //#22
    if ((vars.get('§FS_LED_RGB_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_SX') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') != vars.get('§SI')) && (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    
    //#23
    if ((vars.get('§FS_LED_RGB_FRA') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_SX') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') != vars.get('§SI')) && (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI'))) {
        vars.setCF(3);
    }
    
    //#24
    if ((vars.get('§FS_LED_RGB_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_SX') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') == vars.get('§SI')) && (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI'))) {
        vars.setCF(4);
    }
    
    //#25
    if ((vars.get('§FS_LED_RGB_FRA') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_FRB') != vars.get('§SI')) && (vars.get('§FS_LED_RGB_SX') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') == vars.get('§SI')) && (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI'))) {
        vars.setCF(4);
    }
    // GENERATED

    return vars.output;
};
