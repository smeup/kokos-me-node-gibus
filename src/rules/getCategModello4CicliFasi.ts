import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { connection01 } from "./libGibus/connections";


export const getCategModello4CicliFasi = async (art : string) => {

    let connection = connection01();
    let queryResult: any;
    let sqlString: string;
    
    if (art === '') {
        return '';
    } 
    
    //lettura parametro 023 Fam.Modelli per Carico Reparti dell'articolo
    sqlString = "SELECT TRIM(C£CD01) ART, TRIM(C£CDVA) AS VAL ";
    sqlString += "FROM C£CONR0F ";
    sqlString += "WHERE C£TPRC = 'AR' AND C£NUMP = '023' AND C£CD01 = ?";

    queryResult = await connection.query(sqlString, [art]);

    let categModello = ''
    if (queryResult[0]) {
        if (queryResult[0].VAL) {
            categModello = queryResult[0].VAL;
        }
    }
    
    return categModello;
};
