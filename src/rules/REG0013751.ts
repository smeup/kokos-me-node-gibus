import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { dimP90 } from "./libGibus/dimP90";


//regola dell'imballo fatta in test, quasi sicuramente va cancellata
//dato che l'ambiente di produzione avrà la sua numerazione
export const REG0013751: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    let larg = dimP90('LANI', data).interassi.larghezza;

    data['*CON-A'] = data['§VERN_1_COM'];
    data['*CON-B'] = larg - 6.5 - 6.5;

    //non col tettuccio... dato che starà sul tettuccio
    if(data['§FS_OPT_TET'] == 'SI') data['*CF'] = 0;
    
    return await functions.asyncFinalDataObj(data);
};
