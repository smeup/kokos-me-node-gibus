import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";

export const REG0013966: Rule = async (data) => {

  let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

  data = await functions.asyncInitDataObj(data, filterVariables, '');

let  LARGHEZZA = 0, taglio = 0, TETTUCCIO, TIPO_TETTUCCIO, VOLANT;

  var pezzi;
  var tmp=0;
  var tmp2=2;
  var tmp3=1;
   
  if(TETTUCCIO=='Yes'&& TIPO_TETTUCCIO=='Plate' && VOLANT=='Yes')
  tmp=1;
  else
  tmp=0;
  
  if(LARGHEZZA>240) tmp2=5;
  if(LARGHEZZA>590) tmp3=2;
  
  pezzi=tmp*tmp3;
  taglio=(LARGHEZZA+tmp2)/tmp3;
        
      

  data['*CF'] = pezzi;

  return await functions.asyncFinalDataObj(data);
};
