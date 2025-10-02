import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { getInfoMot } from "./getInfoMot.js";

export const REG0014028: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CF'] = 0;
    if ((await getInfoMot(data)).bloccaRuota) data['*CF'] = 1;

    return await functions.asyncFinalDataObj(data);
};
