import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { manageGtechBom } from "./libGibus/bom/bomLib.js";

//queste righe non funzionano più
//import { pedanaClass } from "./libGibus/products/class4DECK";
//import { calcParObjPedana } from "./libGibus/products/deckLib.js";


const DECK: Rule = async (linkData) => {

    let bomVersion: string = '001';
    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;
    let pedanaClass = (await import("./libGibus/products/class4DECK.js")).pedanaClass;
    let calcParObjPedana = (await import("./libGibus/products/deckLib.js")).calcParObjPedana;

    linkData = await functions.asyncInitDataObj(linkData, filterVariables, '');

    linkData['XCFAL'] = '0001'; //per i semilavorati 006 usiamo la transcodifica 0001 su CXCONF0F

    await manageGtechBom(linkData, bomVersion, calcParObjPedana, pedanaClass);

    return await functions.asyncFinalDataObj(linkData);
};

export { DECK };


