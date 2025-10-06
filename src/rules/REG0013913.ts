import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { SETCOLPLAFRA } from "./SETCOLPLAFRA";



export const REG0013913: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    var pezzi = 0, taglio = 0;

    let VOLANT, LED_BRACCI, LED_FRONTALE, TAGLIO_RULLO = 0;

    //GUARNIZIONE CHIUSURA FRONTALE
    if ((LED_FRONTALE == 'Yes') || (LED_BRACCI == 'Yes') || (VOLANT == 'Yes'))
        pezzi = 1;
    taglio = TAGLIO_RULLO; //universale per frontale standard o volant

    data['*CF'] = pezzi * taglio / 100;

    return await functions.asyncFinalDataObj(data);
};
