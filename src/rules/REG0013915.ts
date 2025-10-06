import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { SETCOLSTR } from "./SETCOLSTR";



export const REG0013915: Rule = async (data) => {

  let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

  data = await functions.asyncInitDataObj(data, filterVariables, '');

  //PROFILO FRONTALE LED
  var tmp = 0;
  var vol = 0;
  var led = 0;
  var tag = 0;
  var pezzi = 0;

  let TENDA_DIVISA, LIMITE_LARGHEZZA = 0, VOLANT, LED_FRONTALE, LARGHEZZA = 0, TAGLIO_RULLO = 0;

  if (TENDA_DIVISA == 'Yes')
    tmp = 2;
  else
    tmp = LIMITE_LARGHEZZA;

  if (VOLANT == 'No') vol = 1;
  if (LED_FRONTALE == 'Yes') led = 1;

  pezzi = tmp * vol * led;

  if (540 >= LARGHEZZA) tag = TAGLIO_RULLO / tmp;
  if (LARGHEZZA > 540) tag = (TAGLIO_RULLO + 0.5) / tmp;
  if (LARGHEZZA > 830) tag = (TAGLIO_RULLO + 1) / tmp;

  data['*CF'] = pezzi;
  data['*CON-A'] = SETCOLSTR(data, true);
  data['*CON-B'] = tag;

  return await functions.asyncFinalDataObj(data);
};
