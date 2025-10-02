import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { SETCOLFRANGI } from "./SETCOLFRANGI.js";


export const REG0013744: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    await SETCOLFRANGI(data, false);

    let larg = data['§LARG'];
    
    data['*CON-B'] = larg - 9;

    data['*CF'] = 0;
    //Solo per il pacco telo teso non arcuato
    if(data["§TI_PTEL_T01"] === '02')data['*CF'] = data['§NR_FRANGI'];

    return await functions.asyncFinalDataObj(data);
};
