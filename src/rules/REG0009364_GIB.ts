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

export const REG0009364_GIB: Rule = (iv) => {

    const vars = new Variables(iv);
//qui abbiamo un problema di configurazione che passa ai livelli inferiori
//eventualmente la formula va modificata dopo la correzione del passaggio
//di configurazione e probabilmente anche dei metodi

   // vars.setCON_A(vars.getCOL());
    //vars.setCON_B(vars.getLUNG());
    //vars.setS2(vars.getLUNG());

    return vars.output;
};
