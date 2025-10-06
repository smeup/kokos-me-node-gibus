import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { SETCOLSTR } from "./SETCOLSTR";


export const REG0014118: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

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
