import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { SETCOLSTR } from "./SETCOLSTR";



export const REG0013917: Rule = async (data) => {

  let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

  data = await functions.asyncInitDataObj(data, filterVariables, '');

  var pezzi = 0, cod = '';

  let modello, lingua;
  if (modello === 'SPAZIO 60') {
    pezzi = 1;
    if (lingua === 'IT') cod = '340286'
    else if (lingua === 'EN') cod = '340287'
    else if (lingua === 'FR') cod = '340288'
    else if (lingua === 'DE') cod = '340289'
    else if (lingua === 'ES') cod = '340290'

  }

  data['*CM'] = cod;
  data['*CF'] = pezzi;

  return await functions.asyncFinalDataObj(data);
};
