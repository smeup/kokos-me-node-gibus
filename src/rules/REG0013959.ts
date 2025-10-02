import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";

export const REG0013959: Rule = async (data) => {

  let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

  data = await functions.asyncInitDataObj(data, filterVariables, '');

  var pezzi;
  
  let TETTUCCIO, TIPO_TETTUCCIO;

  if(TETTUCCIO=='Yes'&& TIPO_TETTUCCIO=='Extruded')
    pezzi=1;
    else
    pezzi=0;

  data['*CF'] = pezzi;

  return await functions.asyncFinalDataObj(data);
};
