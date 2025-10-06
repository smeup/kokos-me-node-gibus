import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { dimP90 } from "./libGibus/dimP90";

export const REG0013639: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    let spor = dimP90('LANI', data).interassi.sporgenza;

    data['*CF'] = (dimP90('LANI', data).tagli.guida * 2 + 36 - 2 ) / 100;

    return await functions.asyncFinalDataObj(data);
};
