import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { dimP90 } from "./libGibus/dimP90";

export const REG0013635: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CF'] = 0;
    if (data['§FS_SCA_LAT_T01'] == 'SI') {
        if (data['§TI_SCA_LAT_T01'] == '01') {
            data['*CF'] = 1;

            let spor = dimP90('LANI', data).interassi.sporgenza;

            data['*CON-B'] = spor - 6.5 - 6.5;

            data['*CON-A'] = 'P072';
            if (data.get('§VR_ABB') == '01') data['*CON-A'] = 'P055';
            if (data.get('§VR_ABB') == '02') data['*CON-A'] = 'P053';
        };
    };

    return await functions.asyncFinalDataObj(data);
};
