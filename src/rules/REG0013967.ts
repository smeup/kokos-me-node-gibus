import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";

export const REG0013967: Rule = async (data) => {

  let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

  data = await functions.asyncInitDataObj(data, filterVariables, '');

  let TETTUCCIO, TIPO_TETTUCCIO, VOLANT;

  var pezzi;

  if (TETTUCCIO == 'Yes' && TIPO_TETTUCCIO == 'Plate' && VOLANT == 'No')
    pezzi = 1;
  else
    pezzi = 0;

  data['*CF'] = pezzi;

  return await functions.asyncFinalDataObj(data);
};
