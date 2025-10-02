import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";

export const REG0013960: Rule = async (data) => {

  let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

  data = await functions.asyncInitDataObj(data, filterVariables, '');

let LARGHEZZA = 0, TETTUCCIO, TIPO_TETTUCCIO,taglio

  var pezzi;

  var tmp=2;
var tmp1=1;

if(LARGHEZZA>710) tmp1=2;

if(LARGHEZZA>240) tmp=5;

if(TETTUCCIO=='Yes'&& TIPO_TETTUCCIO=='Extruded')
pezzi=1*tmp1;
else
pezzi=0;

taglio=(LARGHEZZA+tmp)/tmp1;
      

  data['*CF'] = pezzi;

  return await functions.asyncFinalDataObj(data);
};
