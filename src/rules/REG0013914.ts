import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { SETCOLPLAFRA } from "./SETCOLPLAFRA.js";



export const REG0013914: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

  //GURNIZIONE CAVA BRACCI 
  var tmp=0;
  var tmp1=0;
  var pezzi = 0;
  var taglio = 0;
  let VOLANT, LED_BRACCI, LED_FRONTALE, SPORGENZA = 0;
  
  if((LED_FRONTALE=='Yes')||(VOLANT=='Yes')) tmp=1;
  if(LED_BRACCI=='No') tmp1=1;
  
  pezzi=tmp*tmp1;
  taglio=SPORGENZA;

  data['*CF'] = pezzi * taglio / 100;

    return await functions.asyncFinalDataObj(data);
};
