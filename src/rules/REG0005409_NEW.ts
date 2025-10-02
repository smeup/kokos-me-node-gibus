import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";



export const REG0005409_NEW: Rule = async (data) => {
    let filterVariables = (await import("./libGibus/functionVariables.js")).BIO;

    data = await functions.asyncInitDataObj(data, filterVariables, 'REG0005409_NEW');

    let nrFrangi = data.get('§NR_FRANGI');
    let fsMovie = data.get('§FS_FAM2_MOVIE');
    if (fsMovie === 'SI') {
        data['*CF'] = Math.ceil(nrFrangi / 5);
    }
    else {
        data['*CF'] = Math.ceil(nrFrangi / 3);
    }


    data = await functions.asyncFinalDataObj(data);

    return data;
};

