import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { calcParObjTense } from "./libGibus/products/tenseLib";
import { tenseClass } from "./libGibus/products/class4tense";
//import { rawBomToBom, validateLink } from "./libGibus/bom/bomLib";
import { cleanData } from "./libGibus/functions/forSmeup";

export const TENSE: Rule = async (linkData) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;
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
