import { readCfgData, getDocData } from "../smeup/query";
import { calcSvgList as calcSvgListDeck } from "../allegati/deckLib";

export const upAllDeck = async (data: any) => {

    //in linea di massima basta il codice articolo e il codice configurazione
    //data.codCfg
    //data.codArt
    let reqParams = JSON.parse(data.INPUT);

    
    //questa qua è da fare
    let cfgData = await readCfgData(reqParams.codCfg);

    //let calcSvgList : any = 'pippo';

   /*  console.log(cfgData);
    try {
       calcSvgList = (await import("../allegati/deckLib")).calcSvgList;

    
    } catch (error) {
        
    }
    */

    //await perchè dentro viene letto dal db il numero documento commerciale
    let docData = await getDocData(cfgData['_CF']);

    let svgList = await calcSvgListDeck(cfgData, docData);
    
    let reportServer = process.env.reportServer;
    
    //override per andare in effettivo
    reportServer = "http://gtech02.gibus.it:3030";

    let theUrl = `${reportServer}/mkPdfT008`;

    let theJsonData : any = {};
    theJsonData.codCfg = reqParams.codCfg;
    theJsonData.hn = docData.nDoc;
    theJsonData.rn = docData.nRig;
    theJsonData.templateId = 'ALGPRO';
    theJsonData.svgList = svgList;
    theJsonData.repName = 'pedana';
  
    
    let uploadResult;
    uploadResult = await fetch(theUrl, {
        headers: {
            "Content-Type": "application/json",
          },
        method: 'POST',
        body: JSON.stringify({jsonData : theJsonData})
    });
console.dir({uploadResultBody : uploadResult.body});

    //TODO caricare gli allegati su globe usando Gtech02

    //jsonData viene preso da qua
    //this.reqParams.jsonData = JSON.parse(req.body.jsonData);
   /*  if (this.reqParams.jsonData.cfg) {
        this.cfg = this.reqParams.jsonData.cfg;
    }
    if (this.reqParams.jsonData.hn) {
        this.hn = this.reqParams.jsonData.hn;
    }
    if (this.reqParams.jsonData.rn) {
        this.rn = this.reqParams.jsonData.rn;
    }
    if (this.reqParams.jsonData.codCfg) {
        this.codCfg = this.reqParams.jsonData.codCfg;
    }
    if (this.reqParams.jsonData.templateId) {
        this.templateId = this.reqParams.jsonData.templateId;
    }
    if (this.reqParams.jsonData.repName) {
        this.repName = this.reqParams.jsonData.repName;
    }
    if (this.reqParams.jsonData.delReport) {
        this.delReport = (this.reqParams.jsonData.delReport === 'true');
    }
    if (this.reqParams.jsonData.xCli) {
        this.xCli = this.reqParams.jsonData.xCli;
    }
    if (this.reqParams.jsonData.xProd) {
        this.xProd = this.reqParams.jsonData.xProd;
    }
    if (this.reqParams.jsonData.svgList) {
        this.svgList = this.reqParams.jsonData.svgList;
    }

    if (this.reqParams.jsonData.sndCliTo) {
        this.sndCliTo = this.reqParams.jsonData.sndCliTo;
    }
    if (!Array.isArray(this.sndCliTo)) {
        this.sndCliTo = [];
    }
    if (this.reqParams.jsonData.sndProdTo) {
        this.sndProdTo = this.reqParams.jsonData.sndProdTo;
    }
    if (!Array.isArray(this.sndProdTo)) {
        this.sndProdTo = [];
    }

    if (this.reqParams.jsonData.fileIdxList) {
        this.fileIdxList = this.reqParams.jsonData.fileIdxList;
    }
    if (this.reqParams.jsonData.additionalHTML) {
        this.additionalHTML = this.reqParams.jsonData.additionalHTML;
    }
    if (this.reqParams.jsonData.tagList) {
        this.tagList = this.reqParams.jsonData.tagList;
    } */

};

