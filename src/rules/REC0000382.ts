import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { getCategTess4CicliFasi } from "./getCategTess4CicliFasi";
//import { getCategModello4CicliFasi } from "./getCategModello4CicliFasi";
//import { getCriterioConfezionamento } from "./getCriterioConfezionamento";


//regola dell'imballo fatta in test, quasi sicuramente va cancellata
//dato che l'ambiente di produzione avrà la sua numerazione
export const REC0000382: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    let time = 0;

    //la fase 10 TAGLIO TELO in questione è sempre attiva per i teli delle tende da sole
    let spegni = 0;


    if (spegni === 1) {
        data['*LG'] = '';
    }
    //test: 30 minuti se , altrimenti 50 minuti
    //time = 50;
    //if (tipoTessuto === 'ACPOH120') {
     //   time = 30;
    //}
    //data['*TELA'] = time * 60;
  
    return await functions.asyncFinalDataObj(data);
};