
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";


import { altImpT01 } from "./libGibus/altImp";


export const SETSL01: Rule = async (data) => {

    let filterVariables = (await import("./libGibus/functionVariables")).SETSL;

    data = await functions.asyncInitDataObj(data, filterVariables, 'SETSL01');

    data['*CON-A'] = data.get('*COL');
    data['*CON-B'] = data.get('*LUNG');

    await altImpT01(data);

    data = await functions.asyncFinalDataObj(data);

    return data;
};


