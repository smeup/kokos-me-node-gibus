import { Rule } from "../types/general.js";
import  {functions} from "./libGibus/functions.js";

export const REG0010482_NEW: Rule = async (data) => {

    let filterVariables = (await import("./libGibus/functionVariables.js")).VE;


    await functions.asyncInitDataObj(data, filterVariables, '' );


    return await functions.asyncFinalDataObj(data);
};
