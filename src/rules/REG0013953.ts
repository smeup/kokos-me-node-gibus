import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { dimP90 } from "./libGibus/dimP90";


export const REG0013953: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CON-A'] = data['§VERN_1_COM'];
    data['*CON-B'] = dimP90('LANI', data).nominali.larghezza - 14.2;
    
    return await functions.asyncFinalDataObj(data);
};
