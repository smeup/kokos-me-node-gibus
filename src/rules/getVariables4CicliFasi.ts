import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { connection01 } from "./libGibus/connections.js";

export const getVariables4CicliFasi = async (data : any) => {

    let returnVariables: {
        [key: string]: string
    } = {
        "TIPO_TESSUTO": "",
        "CATEGORIA_MODELLO": "",
        "CATEGORIA_MODELLO_DESC": "",
        "CRITERIO_CONFEZIONE": "",
        "TIPO_UNIONE": "",
        "MANTOVANA": "",
        "ZIP": "",
    };

    
    let connection = connection01();
    let queryResult: any;
    let sqlString, config: string;
    
    config = data['§_CF'];

    sqlString = "SELECT ";
    sqlString += "TRIM(A.C£CD01) AS CONF, ";
    sqlString += "TRIM(PCT.C£CDVA) AS TIPOTESSUTO, ";
    sqlString += "TRIM(PAR.C£CDVA) AS CATEG_MODELLO, ";
    sqlString += "CASE WHEN TRIM(PAR.C£CDVA) IN ('TDS01','TDS02','TDS08','TDS13','TDS18') THEN 'CADUTA' ";
    sqlString += "     WHEN TRIM(PAR.C£CDVA) IN ('TDS03','TDS04','TDS05','TDS07') THEN 'TRAZIONE' ";
    sqlString += "     ELSE '' ";
    sqlString += "END CATEG_MODELLO_DESC, "; 
    sqlString += "TRIM(CRCF.C£CDVA) AS CRITERIO_CONF, ";
    sqlString += "CASE WHEN TRIM(CRCF.C£CDVA) = '059' THEN 'Unito Verticalmente' "; 
    sqlString += "						  WHEN TRIM(CRCF.C£CDVA) = '060' THEN 'Unito Orizzontalmente' "; 
    sqlString += "						  WHEN TRIM(CRCF.C£CDVA) = '062' THEN 'Telo Intero no unione' ";
    sqlString += "						  ELSE '-' ";
    sqlString += "				     END AS DES_CRITERIO_CONF, ";
    sqlString += "TRIM(TU.C£CDVA) AS TIPO_UNIONE, ";
    sqlString += "CASE WHEN TRIM(TU.C£CDVA) = '01' THEN 'CUCITO' WHEN TRIM(TU.C£CDVA) IN ('02','03') THEN 'SALDATO' ELSE 'ND' END AS DES_TIPO_UNIONE, ";
    sqlString += "TRIM(COALESCE(MANAM.C£CDVA, '')) AS MANTOVANA_AMMESSA, ";
    sqlString += "TRIM(COALESCE(ZIPAM.C£CDVA, '')) AS ZIP_AMMESSA ";
    sqlString += "FROM CFVARI0F AS A ";
    sqlString += "LEFT OUTER JOIN CFVARI0F AS CRCF ON CRCF.C£CD01 = A.C£CD01 AND CRCF.C£DOMA = 'PD_DIR_UNI' ";
    sqlString += "LEFT OUTER JOIN CFVARI0F AS TU ON TU.C£CD01 = A.C£CD01 AND TU.C£DOMA = 'TS_LAV_TESS' ";
    sqlString += "LEFT OUTER JOIN CFVARI0F AS TES ON TES.C£CD01 = A.C£CD01 AND TES.C£DOMA = 'TESS_HID' ";
    sqlString += "LEFT OUTER JOIN C£CONR0F AS PT ON PT.C£TPRC = 'AR' AND PT.C£NUMP = '007' AND PT.C£CD01 = TRIM(TES.C£CDVA) ";
    sqlString += "LEFT OUTER JOIN C£CONR0F AS PCT ON PCT.C£TPRC = 'XCT' AND PCT.C£NUMP = 'C09' AND PT.C£CDVA = PCT.C£CD01 ";
    sqlString += "LEFT OUTER JOIN CFVARI0F AS AR ON AR.C£CD01 = A.C£CD01 AND AR.C£DOMA = '_AR' ";
    sqlString += "LEFT OUTER JOIN C£CONR0F AS PAR ON PAR.C£TPRC = 'AR' AND PAR.C£NUMP = '023' AND PAR.C£CD01 = TRIM(AR.C£CDVA) ";
    sqlString += "LEFT OUTER JOIN CFVARI0F AS MANAM ON MANAM.C£CD01 = A.C£CD01 AND MANAM.C£DOMA = 'FA_MANTOVANA' ";
    sqlString += "LEFT OUTER JOIN CFVARI0F AS ZIPAM ON ZIPAM.C£CD01 = A.C£CD01 AND ZIPAM.C£DOMA = 'FA_ZIP' ";
    sqlString += "WHERE A.C£DOMA = '_CF' AND A.C£CD01 = ?";
    
    //console.log("Eseguo query con CF=" + config);
    //console.log(sqlString);
    queryResult = await connection.query(sqlString, [config]);
    
    returnVariables['TIPO_TESSUTO'] = "";
    returnVariables['CATEGORIA_MODELLO'] = "";
    returnVariables['CATEGORIA_MODELLO_DESC'] = "";
    returnVariables['CRITERIO_CONFEZIONE'] = "";
    returnVariables['TIPO_UNIONE'] = "";

    let mantovana: string;
    let zip: string;

    mantovana = data['§FP_MANTOVANA'];
    zip = data['§FS_ZIP'];
    //returnVariables['MANTOVANA'] = data['§FP_MANTOVANA'];
    //returnVariables['ZIP'] = data['§FS_ZIP'] ;

    
    if (queryResult[0]) {
        if (queryResult[0].CONF) {
            returnVariables['TIPO_TESSUTO'] = queryResult[0].TIPOTESSUTO;
            returnVariables['CATEGORIA_MODELLO'] = queryResult[0].CATEG_MODELLO;
            returnVariables['CATEGORIA_MODELLO_DESC'] = queryResult[0].CATEG_MODELLO_DESC;
            returnVariables['CRITERIO_CONFEZIONE'] = queryResult[0].CRITERIO_CONF;

            //se tipo unione non era valorizzato, lo già forzato a ND
            returnVariables['TIPO_UNIONE'] = queryResult[0].DES_TIPO_UNIONE;

            //returnVariables['MANTOVANA'] = mantovana;
            //returnVariables['ZIP'] = zip;

            
            //-----------------------------------------------------------------------------------------------
            //se la mantovana è ammessa, allora devo aspettarmi una risposta SI/No e se blank la forzo a No
            if (queryResult[0].MANTOVANA_AMMESSA == 'SI') {
                if ((mantovana != 'SI') && (mantovana != 'NO')) {
                    returnVariables['MANTOVANA'] = 'NO';
                }
            } else {
                //mantovana non ammessa, forzo a ND se vuota
                if ((mantovana != 'SI') && (mantovana != 'NO')) {
                    returnVariables['MANTOVANA'] = 'ND';
                }
            }

            //-----------------------------------------------------------------------------------------------
            //se la zip è ammessa, allora devo aspettarmi una risposta SI/No e se blank la forzo a No
            if (queryResult[0].ZIP_AMMESSA == 'SI') {
                if ((zip != 'SI') && (zip != 'NO')) {
                    returnVariables['ZIP'] = 'NO';
                }
            } else {
                //mantovana non ammessa, forzo a ND se vuota
                if ((zip != 'SI') && (zip != 'NO')) {
                    returnVariables['ZIP'] = 'ND';
                }
            }
            
        }
    }

    return returnVariables;
};
