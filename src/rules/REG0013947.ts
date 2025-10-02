import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";

//VITE 140848
export const REG0013947: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    if (data['§TI_FRO_T01'] === '01') {//frontale normale
        if (data['§FS_SCA_LAT_T01'] === 'SI') //telo inclinato laterale
            data['*CF'] = 4 + data['§NR_FRANGI'];
        else
            data['*CF'] = 4 + 2 * data['§NR_FRANGI'];
    }
    else //suppongo solo col frontale luce
        data['*CF'] = 2 + 2 * data['§NR_FRANGI'];

    return await functions.asyncFinalDataObj(data);
};
