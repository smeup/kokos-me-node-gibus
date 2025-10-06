import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { connection01 } from "./libGibus/connections";


export const readFaseAttivaCFbyConf = async (conf : string, fase: string) => {

    //let faseColumn = '';
    //faseColumn = 'FASI.XFASE' + fase;


    let connection = connection01();
    let sqlString = '';

    //let modelliCaduta = "'TDS01','TDS02','TDS08','TDS13','TDS18','TDS21'";  //impostato TDS21 su teli TWIN
    //let modelliTrazione = "'TDS03','TDS04','TDS05','TDS07'";


    sqlString = "SELECT TRIM(XFASE" + fase + ") AS FASE ";
    sqlString += "FROM XP5CHKAVACF ";
    sqlString += "WHERE CONFIGURAZIONE = ?";
    
    /*
    sqlString = "SELECT TRIM(" + faseColumn + ") AS FASE ";
    sqlString += "FROM CFVARI0F AS A ";
    sqlString += "JOIN V5RDOC0F AS R ON R.R§TDOC = 'OA' AND R.R§TPOG = 'AR' AND R.R§CONF = A.C£CD01 "; 
    sqlString += "JOIN V5TDOC0F AS T ON T.T§TDOC = R.R§TDOC AND T.T§NDOC = R.R§NDOC AND T.T§CDMG = '100'  ";
    sqlString += "LEFT OUTER JOIN CFVARI0F AS CRCF ON CRCF.C£CD01 = A.C£CD01 AND CRCF.C£DOMA = 'PD_DIR_UNI' ";
    sqlString += "LEFT OUTER JOIN CFVARI0F AS TU ON TU.C£CD01 = A.C£CD01 AND TU.C£DOMA = 'TS_LAV_TESS' "; 
    sqlString += "LEFT OUTER JOIN CFVARI0F AS TES ON TES.C£CD01 = A.C£CD01 AND TES.C£DOMA = 'TESS_HID' "; 
    sqlString += "LEFT OUTER JOIN C£CONR0F AS PT ON PT.C£TPRC = 'AR' AND PT.C£NUMP = '007' AND PT.C£CD01 = TRIM(TES.C£CDVA) "; 
    sqlString += "LEFT OUTER JOIN C£CONR0F AS PCT ON PCT.C£TPRC = 'XCT' AND PCT.C£NUMP = 'C09' AND PT.C£CDVA = PCT.C£CD01 "; 
    sqlString += "LEFT OUTER JOIN CFVARI0F AS AR ON AR.C£CD01 = A.C£CD01 AND AR.C£DOMA = '_AR' "; 
    sqlString += "LEFT OUTER JOIN C£CONR0F AS PAR ON PAR.C£TPRC = 'AR' AND PAR.C£NUMP = '023' AND PAR.C£CD01 = TRIM(AR.C£CDVA)  ";
    sqlString += "LEFT OUTER JOIN CFVARI0F AS MANT ON MANT.C£CD01 = A.C£CD01 AND MANT.C£DOMA = 'FP_MANTOVANA' "; 
    sqlString += "LEFT OUTER JOIN CFVARI0F AS ZIP ON ZIP.C£CD01 = A.C£CD01 AND ZIP.C£DOMA = 'FS_ZIP' "; 
    sqlString += "LEFT OUTER JOIN XP5FCF0F AS FASI ON FASI.XCTGTS = TRIM(PCT.C£CDVA) ";
    sqlString += "			AND FASI.XCTGMD = CASE WHEN TRIM(PAR.C£CDVA) IN (" + modelliCaduta + ") THEN 'CADUTA' "; 
    sqlString += "								   WHEN TRIM(PAR.C£CDVA) IN (" + modelliTrazione + ") THEN 'TRAZIONE' "; 
    sqlString += "                                 WHEN TRIM(TES.C£QUES) IN ('MQ','RO') AND TRIM(TES.C£CDVA) <> '' THEN 'PACCHITELO' "; 
    sqlString += "								   ELSE '' "; 
    sqlString += "							  END ";
    sqlString += "			AND (FASI.XCRTCF = CASE WHEN TRIM(CRCF.C£CDVA) = '059' THEN 'UNITO VERTICALMENTE' "; 
    sqlString += "									WHEN TRIM(CRCF.C£CDVA) = '060' THEN 'UNITO ORIZZONTALMENTE' "; 
    sqlString += "									WHEN TRIM(CRCF.C£CDVA) = '062' THEN 'TELO INTERO' "; 
    sqlString += "									ELSE '-' "; 
    sqlString += "								END "; 
    sqlString += "						OR (TRIM(TES.C£QUES) IN ('MQ','RO') AND TRIM(TES.C£CDVA) <> '' )";
    sqlString += "								) ";
    sqlString += "			AND (FASI.XTPUNI = CASE WHEN TRIM(TU.C£CDVA) = '01' THEN 'CUCITO' "; 
    sqlString += "									WHEN TRIM(TU.C£CDVA) IN ('02','03') THEN 'SALDATO' "; 
    sqlString += "									ELSE 'ND' END "; 
    sqlString += "						OR (FASI.XTPUNI = 'ND' OR TRIM(TES.C£QUES) IN ('MQ','RO') AND TRIM(TES.C£CDVA) <> '')) ";
    sqlString += "			AND (FASI.XMANTO = CASE WHEN TRIM(COALESCE(MANT.C£CDVA, '')) = '' THEN 'NO' "; 
    sqlString += "									ELSE TRIM(MANT.C£CDVA) END "; 
    sqlString += "						OR (TRIM(TES.C£QUES) IN ('MQ','RO') AND TRIM(TES.C£CDVA) <> '')) ";
    sqlString += "			AND (FASI.XCONZIP = CASE WHEN TRIM(COALESCE(ZIP.C£CDVA, '')) = '' THEN 'NO' "; 
    sqlString += "									 ELSE TRIM(ZIP.C£CDVA) END "; 
    sqlString += "						OR (TRIM(TES.C£QUES) IN ('MQ','RO') AND TRIM(TES.C£CDVA) <> '')) "; 
    sqlString += "WHERE A.C£DOMA = '_CF' AND A.C£CD01 = ?"
    */

    //console.log(conf);
    //console.log(sqlString);

    let queryResult: any;
    queryResult = await connection.query(sqlString, [conf]);

    let valore = "";
    let boolTrovato = false;

    if (queryResult[0]) {
        if (queryResult[0].FASE) {
            boolTrovato = true;
            valore = queryResult[0].FASE;
        }
    }

    if (valore == "1") {
        return 0; //non spegnere
    } else {
        return 1; //spegni
    }
};
