export { calcModelloTenda, calcGlassType, calcParObjPedana }

import { calcPedanaInput } from "./class4DECK"

import { calcGtechLang } from "../functions/forGtech";

import { getDocData } from "../smeup/query";


function calcModelloTenda(data: any) {
    let MODELLO_TENDA;

    switch (data['TI_PED_T01']) {
        case 'SWAY':
        case 'VELVET':
        case 'TWIST':
        case 'JOY':
        case 'ZENIT':
        case 'AZIMUT':
        case 'VARIA':
            MODELLO_TENDA = data['TI_PED_T01'];
            break;
        case 'VELVETP':
            MODELLO_TENDA = 'VELVET PLUS';
            break;
        case 'LANI':
            MODELLO_TENDA = 'SIRIO';
            break;
        case 'MOVIE':
            MODELLO_TENDA = 'ECO JOY';
            break;
        default:
            MODELLO_TENDA = 'MED';
            break;
    };
    return MODELLO_TENDA;
}

function calcGlassType(smeupChoice: string) {
    //No;Yes-2 threads;Yes-3 threads;Yes-4 threads;Yes-5 threads  
    let retType = "";

    if (smeupChoice == 'NO') retType = 'No'
    else if (["2", "3", "4", "5"].includes(smeupChoice)) retType = `Yes-{smeupChoice} threads`;

    return retType;
}

async function calcParObjPedana(data: any, addParms: any) {
    let MODELLO_TENDA = calcModelloTenda(data);
    let DIM_X = data.LARG;
    let DIM_Y = data.SPOR;
    let TYPE_ANG_A = calcAngleType(data['FS_MON_POS1'], data['LA_ADD_MUR_POS1']);
    let TYPE_ANG_B = calcAngleType(data['FS_MON_ANT1'], data['LA_ADD_MUR_ANT1']);
    let TYPE_ANG_C = calcAngleType(data['FS_MON_ANT2'], data['LA_ADD_MUR_ANT2']);
    let TYPE_ANG_D = calcAngleType(data['FS_MON_POS2'], data['LA_ADD_MUR_POS2']);
    let TOP_ANG_A = "1";
    let TOP_ANG_B = "2";
    let TOP_ANG_C = "3";
    let TOP_ANG_D = "4";
    if (data['FS_ANG_PO1_ALA'] === 'SI') TOP_ANG_A = "5";
    if (data['FS_ANG_PO1_AFR'] === 'SI') TOP_ANG_A = "7";
    if (data['FS_ANG_AN1_ALA'] === 'SI') TOP_ANG_B = "6";
    if (data['FS_ANG_AN1_AFR'] === 'SI') TOP_ANG_B = "7";
    if (data['FS_ANG_AN2_ALA'] === 'SI') TOP_ANG_C = "6";
    if (data['FS_ANG_AN2_AFR'] === 'SI') TOP_ANG_C = "8";
    if (data['FS_ANG_PO2_ALA'] === 'SI') TOP_ANG_D = "5";
    if (data['FS_ANG_PO2_AFR'] === 'SI') TOP_ANG_D = "8";
    let OPTIONAL_ANG_A = "1";//nessun optional, il resto è ininfluente per la pedana
    let OPTIONAL_ANG_B = "1";
    let OPTIONAL_ANG_C = "1";
    let OPTIONAL_ANG_D = "1";
    let LATO_SBALZO_A = "";
    let LATO_SBALZO_B = "";
    let LATO_SBALZO_C = "";
    let LATO_SBALZO_D = "";
    let NUM_GAMBE_AGG_AB = "1"; //"1" = none, oppure "2" con (1 agg), oppure "3" (con 2 agg) 
    if (data['FS_SX_AGG2_CAM1'] == 'SI') NUM_GAMBE_AGG_AB = "3";
    else if (data['FS_SX_AGG1_CAM1'] == 'SI') NUM_GAMBE_AGG_AB = "2";
    let NUM_GAMBE_AGG_BC = "1";
    if (data['FS_AN_AGG2_CAM1'] == 'SI') NUM_GAMBE_AGG_BC = "3";
    else if (data['FS_AN_AGG1_CAM1'] == 'SI') NUM_GAMBE_AGG_BC = "2";
    let NUM_GAMBE_AGG_CD = "1";
    if (data['FS_DX_AGG2_CAM1'] == 'SI') NUM_GAMBE_AGG_CD = "3";
    else if (data['FS_DX_AGG1_CAM1'] == 'SI') NUM_GAMBE_AGG_CD = "2";
    let NUM_GAMBE_AGG_AD = "1";
    if (data['FS_PO_AGG2_CAM1'] == 'SI') NUM_GAMBE_AGG_AD = "3";
    else if (data['FS_PO_AGG1_CAM1'] == 'SI') NUM_GAMBE_AGG_AD = "2";
    let DISTANZA_Y_SBALZO_A = 0;
    let DISTANZA_Y_SBALZO_B = 0;
    let DISTANZA_Y_SBALZO_C = 0;
    let DISTANZA_Y_SBALZO_D = 0;
    let DISTANZA_X_SBALZO_A = 0;
    let DISTANZA_X_SBALZO_B = 0;
    let DISTANZA_X_SBALZO_C = 0;
    let DISTANZA_X_SBALZO_D = 0;
    let DELTA_SP_VAR = 0;
    let DISTANZA_LGBC1 = data.LUC_X1_CHI_CAS ? parseFloat(parseFloat(data.LUC_X1_CHI_CAS).toFixed(1)) : 0;
    let DISTANZA_LGAD1 = data.LUC_X2_CHI_CAS ? parseFloat(parseFloat(data.LUC_X2_CHI_CAS).toFixed(1)) : 0;
    let DISTANZA_LGAB1 = data.LUC_Y1_CHI_CAS ? parseFloat(parseFloat(data.LUC_Y1_CHI_CAS).toFixed(1)) : 0;
    let DISTANZA_LGCD1 = data.LUC_Y2_CHI_CAS ? parseFloat(parseFloat(data.LUC_Y2_CHI_CAS).toFixed(1)) : 0;
    let DISTANZA_LGBC2 = data.LUC_X3_CHI_CAS ? parseFloat(parseFloat(data.LUC_X3_CHI_CAS).toFixed(1)) : 0;
    let DISTANZA_LGAD2 = data.LUC_X4_CHI_CAS ? parseFloat(parseFloat(data.LUC_X4_CHI_CAS).toFixed(1)) : 0;
    let DISTANZA_LGAB2 = data.LUC_Y3_CHI_CAS ? parseFloat(parseFloat(data.LUC_Y3_CHI_CAS).toFixed(1)) : 0;
    let DISTANZA_LGCD2 = data.LUC_Y4_CHI_CAS ? parseFloat(parseFloat(data.LUC_Y4_CHI_CAS).toFixed(1)) : 0;
    //chiusuraX1 indica le vie della vetrata
    let CHIUSURA_X1 = calcGlassType(data.VET_X1_T01);
    let CHIUSURA_X2 = calcGlassType(data.VET_X2_T01);
    let CHIUSURA_X3 = calcGlassType(data.VET_X3_T01);
    let CHIUSURA_X4 = calcGlassType(data.VET_X4_T01);
    let CHIUSURA_X5 = calcGlassType(data.VET_X5_T01);
    let CHIUSURA_X6 = calcGlassType(data.VET_X6_T01);
    let CHIUSURA_Y1 = calcGlassType(data.VET_Y1_T01);
    let CHIUSURA_Y2 = calcGlassType(data.VET_Y2_T01);
    let CHIUSURA_Y3 = calcGlassType(data.VET_Y3_T01);
    let CHIUSURA_Y4 = calcGlassType(data.VET_Y4_T01);
    let CHIUSURA_Y5 = calcGlassType(data.VET_Y5_T01);
    let CHIUSURA_Y6 = calcGlassType(data.VET_Y6_T01);
    let CHIUS_SUCCESSIVA_B = false;
    let CHIUS_SUCCESSIVA_C = false;
    let CHIUS_SUCCESSIVA_D = false;
    let OFFSET_A = data.OFF_Y1_T01 ? data.OFF_Y1_T01 : 0;
    let OFFSET_B = data.OFF_X1_T01 ? data.OFF_X1_T01 : 0;
    let OFFSET_C = data.OFF_Y2_T01 ? data.OFF_Y2_T01 : 0;
    let OFFSET_D = data.OFF_X2_T01 ? data.OFF_X2_T01 : 0;

    let TIPO_PAVIMENTAZIONE = "1-Floor tiles";
    let FLOOR_EL_DIMENSION_W = 0;//0 così va in default
    let FLOOR_EL_DIMENSION_H = 0;//0 così va in default
    let FLOOR_EL_DIMENSION_T = 0;//0 così va in default
    let PEDANA_ADD_IN_AB = data.ADD_Y1_T01;;
    let PEDANA_ADD_IN_BC = data.ADD_X1_T01;
    let PEDANA_ADD_IN_CD;
    let PEDANA_ADD_IN_AD;
    let FLOOR_EL_WEIGHT = 0; //0 così va in default
    let FLOOR_EL_ORIENTATION = undefined;//al momento undefined
    let FLOOR_EL_PHASE_DISP = -1;
    let TIPO_BALLAST = '0-none';
    let BALLAST_EL_DIMENSION_W = 0;
    let BALLAST_EL_DIMENSION_H = 0;
    let BALLAST_EL_DIMENSION_T = 0;
    let BALLAST_EL_WEIGHT = 0;
    let REQUIRED_BALLAST = 0;//servirebbe solo in '2-Customized'
    let TAILORED_BALLAST = 'No';//serve solo se required ballast > 0
    let LINGUA = calcGtechLang(data['_LIN']);

    let docData;
    if (addParms.docData) docData = addParms.docData
    else docData = await getDocData(data['_CF']);
    let ORDINE = docData.nDoc + ' ' + docData.nRig;

    let MOTORIZZAZIONE;
    let motMapping = [{ gTech: '1-Teleco', smeup: ['CC3', 'TELECO', 'TELECO_WLESS', 'TV_ALL_TUBOLAR'] },
    { gTech: '2-Somfy IO', smeup: ['HYBRID_IO', 'SOMFY_IO', 'SOMFY_SMOOV_IO'] },
    { gTech: '3-Somfy RTS', smeup: ['SOMFY_RTS', 'SOMFY_RTS_110', 'SOMFY_SMOOV_RTS'] },
    { gTech: '4-Cherubini', smeup: ['CHERUBINI_RX', 'CHERUBINI_STD', 'CHERUBINI_WIRE', 'CHERUBINI_ZRX'] },
    { gTech: '5-NEXTA', smeup: ['NEXTA'] },
    { gTech: '6-Nice', smeup: ['FIT', 'FIT_MONO', 'STAR'] },
    { gTech: '7-Only Power', smeup: [] },
    { gTech: '8-None', smeup: [] },
    ];
    for (const elem of motMapping) {
        if (elem.smeup.includes(data.TECNOL_MOTORE)) { MOTORIZZAZIONE = elem.gTech; break; }
    }
    //DEVO METTERGLI UN DEFAULT...
    if (!MOTORIZZAZIONE) MOTORIZZAZIONE = '8-none';

    let STRIP_LED_AB = '1-none', STRIP_LED_BC = '1-none', STRIP_LED_CD = '1-none', STRIP_LED_AD = '1-none';
    if (data.TI_STRIP) {
        let gtechTiStrip = '1-none';
        switch (data.TI_STRIP) {
            case '01':
                gtechTiStrip = '2';
                break;
            case '02':
                gtechTiStrip = '3';
                break;
            case '03':
                gtechTiStrip = '4';
                break;
            default:
                break;
        }
        if (data.FS_LED_RGB_FRA) STRIP_LED_AD = gtechTiStrip;
        if (data.FS_LED_RGB_FRB) STRIP_LED_BC = gtechTiStrip;
        if (data.FS_LED_RGB_SX) STRIP_LED_AB = gtechTiStrip;
        if (data.FS_LED_RGB_DX) STRIP_LED_CD = gtechTiStrip;
    }

    let POWER_A = '2-No', POWER_B = '2-No', POWER_C = '2-No', POWER_D = '2-No';
    switch (data.USC_230V) {
        case '1':
        case '8':
            POWER_B = '1-Yes'
            break;
        case '6':
        case '7':
            POWER_A = '1-Yes'
            break;
        case '4':
        case '5':
            POWER_D = '1-Yes'
            break;
        case '2':
        case '3':
            POWER_C = '1-Yes'
            break;

        default:
            break;
    }

    let DISLIVELLO_A = 0, DISLIVELLO_B = 0, DISLIVELLO_C = 0, DISLIVELLO_D = 0;
    let MARTINETTI_PREMIUM = 'O-No';

    let TABELLA_COSTI = '';
    if (addParms.grafica) TABELLA_COSTI = 'No';
    let TIPO_RGB = '1-Standard';
    //'2-Master'
    //'3-Slave'
    //'4-None'

    let retObj = calcPedanaInput(ORDINE, LINGUA, MODELLO_TENDA, DIM_X, DIM_Y,
        TYPE_ANG_A, TYPE_ANG_B, TYPE_ANG_C, TYPE_ANG_D,
        TOP_ANG_A, TOP_ANG_B, TOP_ANG_C, TOP_ANG_D,
        OPTIONAL_ANG_A, OPTIONAL_ANG_B, OPTIONAL_ANG_C, OPTIONAL_ANG_D,
        LATO_SBALZO_A, LATO_SBALZO_B, LATO_SBALZO_C, LATO_SBALZO_D,
        NUM_GAMBE_AGG_AB, NUM_GAMBE_AGG_BC, NUM_GAMBE_AGG_CD, NUM_GAMBE_AGG_AD,
        DISTANZA_Y_SBALZO_A, DISTANZA_Y_SBALZO_B, DISTANZA_Y_SBALZO_C, DISTANZA_Y_SBALZO_D,
        DISTANZA_X_SBALZO_A, DISTANZA_X_SBALZO_B, DISTANZA_X_SBALZO_C, DISTANZA_X_SBALZO_D,
        DISTANZA_LGAD1, DISTANZA_LGAB1, DISTANZA_LGBC1, DISTANZA_LGCD1, DISTANZA_LGAD2, DISTANZA_LGAB2, DISTANZA_LGBC2, DISTANZA_LGCD2,
        DELTA_SP_VAR,
        CHIUSURA_X1, CHIUSURA_X2, CHIUSURA_Y1, CHIUSURA_Y2, CHIUSURA_X3, CHIUSURA_X4, CHIUSURA_Y3, CHIUSURA_Y4, CHIUSURA_X5, CHIUSURA_X6, CHIUSURA_Y5, CHIUSURA_Y6,
        CHIUS_SUCCESSIVA_B, CHIUS_SUCCESSIVA_C, CHIUS_SUCCESSIVA_D, //todo metterle a false
        OFFSET_A, OFFSET_B, OFFSET_C, OFFSET_D,
        TIPO_PAVIMENTAZIONE,
        FLOOR_EL_DIMENSION_W, FLOOR_EL_DIMENSION_H, FLOOR_EL_DIMENSION_T, FLOOR_EL_WEIGHT, FLOOR_EL_ORIENTATION, FLOOR_EL_PHASE_DISP,
        PEDANA_ADD_IN_AB, PEDANA_ADD_IN_BC, PEDANA_ADD_IN_CD, PEDANA_ADD_IN_AD,
        TIPO_BALLAST, BALLAST_EL_DIMENSION_W, BALLAST_EL_DIMENSION_H, BALLAST_EL_DIMENSION_T, BALLAST_EL_WEIGHT, REQUIRED_BALLAST, TAILORED_BALLAST,
        STRIP_LED_AB, STRIP_LED_BC, STRIP_LED_CD, STRIP_LED_AD, POWER_A, POWER_B, POWER_C, POWER_D, MOTORIZZAZIONE,
        DISLIVELLO_A, DISLIVELLO_B, DISLIVELLO_C, DISLIVELLO_D, MARTINETTI_PREMIUM,
        TABELLA_COSTI,
        TIPO_RGB
        //DA GESTIRE TIPO_RGB

    );
    return retObj;
    let parObj: any = {};
    parObj.OFFSET_A = data.OFF_Y1_T01;
    parObj.OFFSET_B = data.OFF_X1_T01;
    parObj.OFFSET_C = data.OFF_Y2_T01;
    parObj.OFFSET_D = data.OFF_X2_T01;
    parObj.TIPO_PAVIMENTAZIONE = "1-Floor tiles";
    //1-Floor tiles
    //2-Wooden strips

    parObj.FLOOR_EL_DIMENSION_W = 0;//0 così va in default
    parObj.FLOOR_EL_DIMENSION_H = 0;//0 così va in default
    parObj.FLOOR_EL_DIMENSION_T = 0;//0 così va in default
    parObj.PEDANA_ADD_IN_AB = data.ADD_Y1_T01;;
    parObj.PEDANA_ADD_IN_BC = data.ADD_X1_T01;
    parObj.PEDANA_ADD_IN_CD;
    parObj.PEDANA_ADD_IN_AD;
    parObj.FLOOR_EL_WEIGHT = 0; //0 così va in default
    return parObj;
}

function calcAngleType(latoAddossatoMuro: string, aggiuntivaMuro: string) {
    let type = "1";

    if (latoAddossatoMuro === '01') {//frontale
        type = "2";
        if (aggiuntivaMuro === 'SI') {
            type = "6";
        }
    } else if (latoAddossatoMuro === '02') {
        type = "3";
        if (aggiuntivaMuro === 'SI') {
            type = "7";
        }
    }
    return type;
}