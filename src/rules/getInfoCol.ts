import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { connection01 } from "./libGibus/connections.js";

export const getInfoCol = async (codCol: any) => {

    let connection = connection01();
    let queryResult: any;
    queryResult = await connection.query("SELECT TTLIBE FROM SMEDAT.TABEL00F WHERE TTSETT = 'XFI' AND TTELEM = ?", [codCol]);
    
    type infoCol = {vrAbb :string, ral : string, lucentezza : string};

    let retObj : infoCol = {vrAbb : '', ral : '', lucentezza : ''};

    if (queryResult[0]) {
        if (queryResult[0].TTLIBE) {
            let TTLIBE = queryResult[0].TTLIBE;
            retObj.ral = TTLIBE.substring(18, 22);
            retObj.lucentezza = TTLIBE.substring(22, 24);
            retObj.vrAbb = TTLIBE.substring(25, 27);
        }
    }

    /*lucentezza
    ND	Altro
    01	Matt
    02	Satin
    03	Sable
    04	Metallic
    05	Gloss */

    /* vrAbb
    01	BIANCO
    02	BEIGE
    03	GRIGIO CHIARO
    04	ANTRACITE 416
    05	ANTRACITE
    06	INOX CHIARO
    07	MARRONE
    08	NERO
    09	BRONZO
    10	CORTEN
    11	BLU */

    return retObj;
};
