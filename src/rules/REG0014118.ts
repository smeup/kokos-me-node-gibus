import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { SETCOLSTR } from "./SETCOLSTR.js";


export const REG0014118: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    //data['D§DISE'] = 'ABCD0400XXXXXXRSTUV';
    await SETCOLSTR(data, false);
    data['*CON-B'] = 400;

    console.dir({'CON-A' : data['*CON-A']});
    console.dir({'pos' : data['*POS']});
    console.dir({'xconfi' : data['XCONFI']});
    console.dir({'CSVP' : data['*CSVP']});
    data['*CON-C'] = data['*POS'];

    return await functions.asyncFinalDataObj(data);
};
