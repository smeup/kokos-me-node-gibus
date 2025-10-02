import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { getVrAbb } from "./getVrAbb.js";
import { getColStr } from "./getColStr.js";



export const REG0013978: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');
    var pezzi;

    let ARGANELLO = 0;

    pezzi = ARGANELLO;

    data['*CF'] = pezzi;

    let vrAbb = await getVrAbb(await getColStr(data));

    data['*CON-A'] = '0072';
    if (vrAbb == '01') data['*CON-A'] = '0055'
    else
        if (['0053', '0065', '0208'].includes(await getColStr(data))) data['*CON-A'] = '0055';

    if (data['§POS_COMANDO'] === '01') data['*NTD'] = 'COMANDO SX'
    else
        if (data['§POS_COMANDO'] === '02') data['*NTD'] = 'COMANDO DX';


    return await functions.asyncFinalDataObj(data);
};
