import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { connection01 } from "./libGibus/connections.js";

export const SETNTPOS01: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');
    let connection = connection01();
    let originalVal = await functions.getOriginalVal(connection, data.XCONFI);

    if (originalVal) data['*NTC'] = originalVal.substring(15, 30);


    return await functions.asyncFinalDataObj(data);
};