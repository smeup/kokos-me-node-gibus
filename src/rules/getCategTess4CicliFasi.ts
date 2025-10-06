import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { connection01 } from "./libGibus/connections";


export const getCategTess4CicliFasi = async (tess : string) => {

    let connection = connection01();
    let queryResult: any;
    let sqlString: string;
    
    if (tess === '') {
        return '';
    } 

    //lettura parametro C09 (Tipo tessuto per cicli fasi) della categoria tessuto, relativa al tessuto di configurazione
    sqlString = "SELECT TRIM(PT.C£CD01) AS TESSUTO, TRIM(PT.C£CDVA) AS CATEGORIATESSUTO, TRIM(PCT.C£CDVA) AS TIPOTESS ";
    sqlString += "FROM C£CONR0F AS PT ";
    sqlString += "JOIN C£CONR0F AS PCT ON PCT.C£TPRC = 'XCT' AND PCT.C£NUMP = 'C09' AND PT.C£CDVA = PCT.C£CD01 ";
    sqlString += "WHERE PT.C£TPRC = 'AR' AND PT.C£NUMP = '007' AND PT.C£CD01 = ?";

    queryResult = await connection.query(sqlString, [tess]);

    let tipoTessuto = ''
    if (queryResult[0]) {
        if (queryResult[0].TIPOTESS) {
            tipoTessuto = queryResult[0].TIPOTESS;
        }
    }
    
    return tipoTessuto;
};
