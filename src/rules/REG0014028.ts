import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { getInfoMot } from "./getInfoMot";

export const REG0014028: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CF'] = 0;
    if ((await getInfoMot(data)).bloccaRuota) data['*CF'] = 1;

    return await functions.asyncFinalDataObj(data);
};
