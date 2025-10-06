import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { SETCOLSTR } from "./SETCOLSTR";



export const REG0013918: Rule = async (data) => {

  let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

  data = await functions.asyncInitDataObj(data, filterVariables, '');

  var pezzi = 0, cod = '';

  let modello, lingua = '';
  
  if (modello === 'SPAZIO 60') {
    pezzi = 1;
    if (['IT', 'EN'].includes(lingua)) cod = '340283'
    else if(['FR', 'DE'].includes(lingua)) cod = '340284'
    else if(['ES'].includes(lingua)) cod = '340285'

  }

  data['*CM'] = cod;
  data['*CF'] = pezzi;

  return await functions.asyncFinalDataObj(data);
};
