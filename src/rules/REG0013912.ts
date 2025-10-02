import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { SETCOLPLAFRA } from "./SETCOLPLAFRA.js";



export const REG0013912: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    await SETCOLPLAFRA(data, false);

    data['*CF'] = 2 * data['§NR_FRANGI'] - 2 * data['§IN_CHI_NR'];

    return await functions.asyncFinalDataObj(data);
};
