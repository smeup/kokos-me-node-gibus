import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { getColStr } from "./getColStr";



export const REG0013911: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

  //PROFILO SCIVOLO VOLANT
  var tmp = 1, pezzi = 0, taglio = 0;

  let TAGLIO_RULLO = 0, FRONTALE_VOLANT = 0;

  if(TAGLIO_RULLO > 400) tmp=2;
  
  pezzi=tmp*FRONTALE_VOLANT;
  taglio=parseInt(((TAGLIO_RULLO + 3) /tmp).toString());
            
data['*CF'] = pezzi;
data['*CON-B'] = taglio;
data['*CON-A'] = await getColStr(data);

    return await functions.asyncFinalDataObj(data);
};
