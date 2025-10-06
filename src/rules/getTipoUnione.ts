import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { connection01 } from "./libGibus/connections";


export const getTipoUnione = async (config : string) => {

    //01 CUCITURA
    //02 SALDATURA A NASTRO
    //03 SALDATURA ZERO
    //04 TELI INTERI

    //lato specifiche fasi, i valori da considerare sono:
    //SALDATO  =>>> 02 oppure 03
    //CUCITO   =>>> 01
    //ND       = >>> nessuno di quelli sopra
    
    let connection = connection01();
    let queryResult: any;
    queryResult = await connection.query("SELECT TRIM(C£CDVA) AS VAL FROM CFVARI0F WHERE C£DOMA = 'TS_LAV_TESS' AND C£CD01 = ?", [config]);

    let tipoUnione = "ND";

    let valore = "";
    if (queryResult[0]) {
        if (queryResult[0].VAL) {
            valore = queryResult[0].VAL;
        }
    }
    
    if (valore === "01") {
        tipoUnione = "CUCITO";
    } else if ((valore === "02") || (valore === "03")) {
        tipoUnione = "SALDATO";
    } 

    return tipoUnione;
    
};
