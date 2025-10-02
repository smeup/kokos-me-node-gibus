export const dimP90 = (model: String, data: any) => {
    type dimObjType = {
        interassi: { larghezza: number, sporgenza: number },
        nominali: { larghezza: number, sporgenza: number },
        tagli: { guida: number }
    };

    let dimObj: dimObjType = {
        interassi: { larghezza: 0, sporgenza: 0 },
        nominali: { larghezza: 0, sporgenza: 0 },
        tagli: { guida: 0 }
    };

    if (model === 'LANI') {
        let larghezza = data['§LARG'] - 13;
        let sporgenza = data['§SPOR'] - 13;
        if (data['FS_FAM2_ADDF'] == 'SI') larghezza -= 3.4;

        dimObj.interassi.larghezza = larghezza;
        dimObj.interassi.sporgenza = sporgenza;
        dimObj.nominali.larghezza = data['§LARG'];
        dimObj.nominali.sporgenza = data['§SPOR'];

        if (data['§FS_FAM2_ISOLA'] === 'SI') dimObj.tagli.guida = data['§SPOR'] - 26
        else if (data['§FS_FAM2_ADDF'] === 'SI') {
            if (data['§ATTACCO'] == '01') dimObj.tagli.guida = data['§SPOR'] - 29.4
            if (data['§ATTACCO'] == '02') dimObj.tagli.guida = data['§SPOR'] - 30;
        }
    }

    return dimObj;
}