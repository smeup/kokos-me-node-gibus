/**
 * This is a rule that throws an error.
 * It can be used to test error handling in the application.
 * 
 * @param iv The input value for the rule.
 * @returns The output value after applying the rule.
 */
import { Rule } from "../types/general.js";
import { Variables } from "../converter/variables.js";

export const ERR: Rule = (iv) => {

    const vars = new Variables(iv);

    throw new Error("This is a rule that throws an error.");

    return vars.output;
};
