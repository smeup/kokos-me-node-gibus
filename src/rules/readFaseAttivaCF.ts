import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { connection01 } from "./libGibus/connections";


export const readFaseAttivaCF = async (inputParam : any, fase: string) => {

    let faseColumn = '';
    faseColumn = 'XFASE' + fase;

    let tipoTessuto = inputParam['TIPO_TESSUTO'] ;

    
    let connection = connection01();
    let sqlBaseString = '';
    let sqlString = '';
    let sqlAdditionalWhere = '';

    sqlBaseString = 'SELECT TRIM(' + faseColumn + ') AS FASE ';
    sqlBaseString += 'FROM XP5FCF0F ';
    sqlBaseString += 'WHERE 1 = 1 ';
    
    sqlBaseString += ' AND XCTGTS = ? AND XCTGMD = ? ';
    
    /*
    inputParam
    0 'TIPO_TESSUTO' 
    1 'CATEGORIA_MODELLO'
    2 'CATEGORIA_MODELLO_DESC'
    3 'CRITERIO_CONFEZIONE'
    4 'TIPO_UNIONE' 
    5 'MANTOVANA'
    6 'ZIP'
    */

    /*
    --------------------------------------------------------------------------------
    TABELLA TENTATIVI IN CASO DI TENDE IN TRAZIONE E TENDE A CADUTA (NO PACCO TELO)
        UNIONE  MANTOVANA   ZIP
    1   u       m           z
    2   u       m           %
    3   u       %           z
    4   u       %           %
    5   %       m           z
    6   %       m           %
    7   %       %           z
    8   %       %           %
    --------------------------------------------------------------------------------
    */

    //console.log(inputParam[0]);
    //console.log(inputParam[3]);

    //i pacchi telo dipendono solo da categoria tessuto, quindi non passiamo altro alla WHERE
    if (inputParam[1] != 'PACCHITELO') {
        sqlBaseString += ' AND XCRTCF = ?';
        
        sqlAdditionalWhere += " AND XTPUNI = ? AND XMANTO = ? AND XCONZIP = ? ";

        /*
        if (inputParam[4] == '') {
            //se stringa vuota, considero ND
            //inputParam[4] = 'NO';
            //sqlString += " AND (XTPUNI = ? OR XTPUNI = 'NO') ";
            inputParam[4] = 'ND';
            sqlAdditionalWhere += " AND XTPUNI = ? ";
        } else {
            sqlAdditionalWhere += ' AND XTPUNI = ? ';
        }

        if (inputParam[5] == '') {
            //se stringa vuota, considero ND
            //inputParam[5] = 'NO';
            //sqlString += " AND (XMANTO = ? OR XMANTO = 'NO') ";
            inputParam[5] = 'ND';
            sqlAdditionalWhere += " AND XMANTO = ? ";
        } else {
            sqlAdditionalWhere += ' AND XMANTO = ? ';
        }

        if (inputParam[6] == '') {
            //se stringa vuota, considero ND
            //inputParam[6] = 'NO';
            //sqlString += " AND (XCONZIP = ? OR XCONZIP = 'NO') ";
            inputParam[6] = 'ND';
            sqlAdditionalWhere += " AND XCONZIP = ? ";
        } else {
            sqlAdditionalWhere += ' AND XCONZIP = ? ';
        }
        */
    }

    sqlString = sqlBaseString + sqlAdditionalWhere;
    //console.log(sqlString);

    let queryResult: any;
    queryResult = await connection.query(sqlString, inputParam);


    let valore = "";
    let boolTrovato = false;

    if (queryResult[0]) {
        if (queryResult[0].FASE) {
            boolTrovato = true;
            valore = queryResult[0].FASE;
        }
    }

    if (!boolTrovato) {
        //se non hai ancora trovato nulla fai
        //prova per valore qualsiasi di zip (u - m  - %)
        sqlAdditionalWhere = "";
        sqlAdditionalWhere += " AND XTPUNI = ? AND XMANTO = ? AND '1' = ? ";
    }


    if (valore == "1") {
        return 0; //non spegnere
    } else {
        return 1; //spegni
    }
};
