import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { SETCOLSTR } from "./SETCOLSTR.js";

export const REG0013938: Rule = async (data) => {

  let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

  data = await functions.asyncInitDataObj(data, filterVariables, '');

  var pezzi, taglio;

  let TAGLIO_RULLO_VOLANT = 0, VOLANT;

  //  RULLO Ø49
  var tmp = 0;
  if (620 >= TAGLIO_RULLO_VOLANT) tmp = 30;
  if (TAGLIO_RULLO_VOLANT > 620) tmp = TAGLIO_RULLO_VOLANT - 590;
  taglio = tmp;
  if ((VOLANT == 'Yes') && (TAGLIO_RULLO_VOLANT > 590)) pezzi = 1;
  else pezzi = 0;

  data['*CF'] = pezzi;
  data['*CON-A'] = await SETCOLSTR(data, true);
  data['*CON-B'] = taglio;

  return await functions.asyncFinalDataObj(data);
};
