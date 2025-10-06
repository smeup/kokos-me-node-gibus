import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { SETCOLSTR } from "./SETCOLSTR";

export const REG0013999: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    let SPORGENZA, LARGHEZZA = 0, LARGHEZZA_MINIMA = 0;


    var pezzi = 0;

    //KIT SUPPORTI UNIVERSALI 3PZ 
    var tmp = 0;
    var tmp300 = 0;
    var tmp350 = 0;
    var tmp400 = 0;
    var sp = 0;
    var sp300 = 0;
    var sp350 = 0;
    var sp400 = 0;

    if (SPORGENZA == '200' || SPORGENZA == '250') sp = 1;
    if (LARGHEZZA > 360) tmp = 1;
    if (LARGHEZZA > 480) tmp = 0;
    if (LARGHEZZA > 540) tmp = 1;
    if (LARGHEZZA > 1180) tmp = 2;

    if (SPORGENZA == '300') sp300 = 1;
    if (LARGHEZZA > 360) tmp300 = 1;
    if (LARGHEZZA > 480) tmp300 = 0;
    if (LARGHEZZA > 540) tmp300 = 1;
    if (LARGHEZZA > 1070) tmp300 = 3;

    if (SPORGENZA == '350') sp350 = 1;
    if (LARGHEZZA > 480) tmp350 = 1;
    if (LARGHEZZA > 590) tmp350 = 2;
    if (LARGHEZZA > 710) tmp350 = 1;
    if (LARGHEZZA > 830) tmp350 = 3;
    if (LARGHEZZA > 1070) tmp350 = 2;
    if (LARGHEZZA > 1180) tmp350 = 3;
    if (LARGHEZZA > 1300) tmp350 = 4;

    if (SPORGENZA == '400') sp400 = 1;
    if (LARGHEZZA > 420) tmp400 = 2;
    if (LARGHEZZA > 540) tmp400 = 1;
    if (LARGHEZZA > 710) tmp400 = 2;
    if (LARGHEZZA > 830) tmp400 = 3;
    if (LARGHEZZA > 1070) tmp400 = 3;
    if (LARGHEZZA > 1180) tmp400 = 4;
    if (LARGHEZZA > 1300) tmp400 = 5;

    pezzi = (tmp * sp + tmp300 * sp300 + tmp350 * sp350 + tmp400 * sp400) * LARGHEZZA_MINIMA;

    data['*CF'] = pezzi;
    await SETCOLSTR(data, true);

    return await functions.asyncFinalDataObj(data);
};
