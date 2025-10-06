import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";

export const REG0013919: Rule = async (data) => {

  let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

  data = await functions.asyncInitDataObj(data, filterVariables, '');

  var tmp = 2, pezzi = 0, taglio = 0;

  let TETTUCCIO, TIPO_TETTUCCIO, LARGHEZZA = 0;

  if (TETTUCCIO == 'Yes' && TIPO_TETTUCCIO == 'Extruded')
    pezzi = 1;
  else
    pezzi = 0;

  if (LARGHEZZA > 240) tmp = 5;

  taglio = LARGHEZZA + tmp;

  data['*CF'] = taglio * pezzi / 100;

  return await functions.asyncFinalDataObj(data);
};
