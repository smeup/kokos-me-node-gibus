import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { connection01 } from "./libGibus/connections";


export const getInfoMot = async (data: any) => {

    let tipoMot = '';
    if (data['§TIPO_MOT_HID']) tipoMot = data['§TIPO_MOT_HID']
    else tipoMot = '';

    type infoMot = { codMotore: string, tecnolMotore: string, prodMotore: string, bloccaRuota : boolean };
    let infoMot: infoMot = { codMotore: '', tecnolMotore: '', prodMotore : '', bloccaRuota : false};

    let connection = connection01();
    let queryResult: any;
    queryResult = await connection.query("SELECT TTLIBE FROM SMEDAT.TABEL00F WHERE TTSETT = 'XTM' AND TTELEM = ?", [tipoMot]);

    if (queryResult[0]) {
        if (queryResult[0].TTLIBE) {
            let TTLIBE = queryResult[0].TTLIBE;
            infoMot.codMotore = TTLIBE.substring(15, 21);
            infoMot.tecnolMotore = TTLIBE.substring(0, 15).trimEnd();
            if (['CHERUBINI_STD', 'CHERUBINI_WIRE', 'CHERUBINI_RX', 'CHERUBINI_ZRX'].includes(infoMot.tecnolMotore)) infoMot.prodMotore = 'CHERUBINI';
            if (['SOMFY_STD', 'SOMFY_IO', 'SOMFY_RTS', 'SOMFY_RTS_110'].includes(infoMot.tecnolMotore)) infoMot.prodMotore = 'SOMFY';;
            if (['FIT', 'FIT_MONO', 'STAR'].includes(infoMot.tecnolMotore)) infoMot.prodMotore = 'NICE';;
        }
    }

    queryResult = await connection.query("SELECT C£NUMP, C£CDVA, C£VALO FROM SMEDAT.C£CONR0F WHERE C£TPRC = 'XTM' AND C£CD01 = ?", [tipoMot]);

    if (Array.isArray(queryResult)) {
        queryResult.forEach(element => {
            if(element['C£NUMP']){
                if(element['C£NUMP'].trimEnd() == 'TM2'){
                    if(element['C£CDVA'].trimEnd() == '1')infoMot.bloccaRuota = true;
                } 
            }
        });
    }

    return infoMot;
};
