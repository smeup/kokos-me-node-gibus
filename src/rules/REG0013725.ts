import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { SETCOLFRANGI } from "./SETCOLFRANGI";


//regola dell'imballo fatta in test, quasi sicuramente va cancellata
//dato che l'ambiente di produzione avrà la sua numerazione
export const REG0013725: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    await SETCOLFRANGI(data, false);
    let larg = data['§LARG'];
    //data['*CON-B'] = larg - 9.7;
    data['*CON-B'] = larg - 9;

    return await functions.asyncFinalDataObj(data);
};
