import { connection01 } from "../../libGibus/connections";

export { readCfgData, getDocData };

async function readCfgData(codCfg: string) {

    let queryResult;
    //TODO leggere le variabili di configurazione usando gtech02, il getDomande(codCfg)
    //per ottenere questo va fatto un get /getCfgData?codCfg=AAAAAA
    //in gtech02 va aggiornato wsSmeup.js e ws.js 
    //da testare tramite browser
    let thePort = "3030"; //di produzione
    //di test
   // thePort = "9090"
    let theUrl = `http://gtech02.gibus.it:${thePort}/getCfgData?codCfg=`;
    //theUrl = 'http://gtech02.gibus.it:9090/getCfgData?codCfg=';//solo per fare le prove
    theUrl += codCfg;
    try {
        queryResult = await (await fetch(theUrl, {
            method: 'get'
        })).json();
    } catch (e) {
        console.dir(e);
        //todo, informare qualcuno dell'errore
    }
    return queryResult;

}

async function getDocData(codCfg: string) {

    let connection = connection01();

    //lettura parametro C09 (Tipo tessuto per cicli fasi) della categoria tessuto, relativa al tessuto di configurazione
    let sqlString = "SELECT * FROM smedat.V5RDOC0F a WHERE r§tdoc IN ('OA', 'PA') AND R§TPOG = 'AR' AND R§CONF = ?";

    let queryResult: any;
    queryResult = await connection.query(sqlString, [codCfg]);

    let docData: any = {};
    if (queryResult[0]) {
        docData.tDoc = queryResult[0]['R§TDOC'].trim();
        docData.nDoc = queryResult[0]['R§NDOC'].trim();
        docData.nRig = queryResult[0]['R§NRIG'].trim();
    }

    return docData;

}