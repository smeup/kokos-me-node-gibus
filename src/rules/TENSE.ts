import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { calcParObjTense } from "./libGibus/products/tenseLib";
import { tenseClass } from "./libGibus/products/class4tense";
//import { rawBomToBom, validateLink } from "./libGibus/bom/bomLib.js";
import { cleanData } from "./libGibus/functions/forSmeup.js";

export const TENSE: Rule = async (linkData) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;
    cleanData(linkData);

    let parObj = await calcParObjTense(linkData);
    //todo
    //controllare che il componente in data.XXX sia presente in tenseBom
    let rawBom = new tenseClass(parObj);

  //  let bom = await rawBomToBom(rawBom, linkData);

    //validateLink(linkData, bom);

    linkData = await functions.asyncInitDataObj(linkData, filterVariables, '');

    return await functions.asyncFinalDataObj(linkData);
};
