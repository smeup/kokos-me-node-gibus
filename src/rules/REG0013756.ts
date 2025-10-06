import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { SETCOLPLAFRA } from "./SETCOLPLAFRA";


//regola dell'imballo fatta in test, quasi sicuramente va cancellata
//dato che l'ambiente di produzione avrà la sua numerazione
export const REG0013756: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    await SETCOLPLAFRA(data, false);

    data['*CF'] = 2 * data['§NR_FRANGI'] - 2 * data['§IN_UNG_NR'] ;

    return await functions.asyncFinalDataObj(data);
};
