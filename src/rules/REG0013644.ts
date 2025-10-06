import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";

export const REG0013644: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CF'] = 4;
    if(data.get('§FS_CUSC_INOX') == 'SI') data['*CF'] = 0;

    return await functions.asyncFinalDataObj(data);
};
