import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { connection01 } from "./libGibus/connections";


export const getCriterioConfezionamento = async (config : string) => {

    
    let connection = connection01();
    let queryResult: any;
    queryResult = await connection.query("SELECT TRIM(C£CDVA) AS VAL FROM CFVARI0F WHERE C£DOMA = 'PD_DIR_UNI' AND C£CD01 = ?", [config]);

    let criterio = "";
    if (queryResult[0]) {
        if (queryResult[0].VAL) {
            criterio = queryResult[0].VAL;
        }
    }
    
    return criterio;
    
};
