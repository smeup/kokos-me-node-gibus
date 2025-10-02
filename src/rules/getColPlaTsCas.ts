import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { getInfoCol } from "./getInfoCol.js";


export const getColPlaTsCas = async (data: any, vrStr: any) => {

    let infoCol = await getInfoCol(vrStr);

    let vrAbb = infoCol.vrAbb, ral = infoCol.ral, lucentezza = infoCol.lucentezza;
    
    let vrPlast = 'P073';
    if (vrAbb == '01') vrPlast = 'P065';
    if (['02', '03', '04', '06'].includes(vrAbb)) vrPlast = 'P068';
    if (ral === '9006') if (['01', '03'].includes(lucentezza)) vrPlast = 'P073';
    if (ral === '7035') if (['01'].includes(lucentezza)) vrPlast = 'P073';

    /*lucentezza
    ND	Altro
    01	Matt
    02	Satin
    03	Sable
    04	Metallic
    05	Gloss */

    /* vrAbb
    01	BIANCO
    02	BEIGE
    03	GRIGIO CHIARO
    04	ANTRACITE 416
    05	ANTRACITE
    06	INOX CHIARO
    07	MARRONE
    08	NERO
    09	BRONZO
    10	CORTEN
    11	BLU */

    return vrPlast;
};
