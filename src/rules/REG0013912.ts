import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { SETCOLPLAFRA } from "./SETCOLPLAFRA";



export const REG0013912: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    await SETCOLPLAFRA(data, false);

    data['*CF'] = 2 * data['§NR_FRANGI'] - 2 * data['§IN_CHI_NR'];

    return await functions.asyncFinalDataObj(data);
};
