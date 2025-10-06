import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
//import { SETCOLSTR } from "./SETCOLSTR";
import { SETCOLFRANGI } from "./SETCOLFRANGI";


//regola dell'imballo fatta in test, quasi sicuramente va cancellata
//dato che l'ambiente di produzione avrà la sua numerazione
export const REG0013716: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CF'] = 0;
    //solo con jolly integrato
    if (data['§TI_JOL_T01'] ===	'01') {
        data['*CF'] = 1;
        let larg = data['§LARG'];
        data['*CON-B'] = larg - 2;
        await SETCOLFRANGI(data, false);
    }
    //non sull'isola
    if (data['§FS_FAM2_ISOLA'] === 'SI') {
        data['*CF'] = 0;
    }
    
    return await functions.asyncFinalDataObj(data);
};
