import { parentCfg } from "./bom/parentCfg";
import { distCfg } from "./bom/distCfg";

const vari = {
    vari: [
        {
            "intElem": {
                "key": "*CDL"
            },
            "extElem": {
                "key": "R§RISO"
            }
        }
        , {
            "intElem": {
                "key": "*NTC"
            },
            "extElem": {
                "key": "R§NOTA"
            }
        }
        , {
            "intElem": {
                "key": "*NTD"
            },
            "extElem": {
                "key": "D§NOTA"
            }
        }
    ]
}

const tempiCiclo = {
    "tempiCiclo": [{
        "intElem": {
            "key": "*CDL"
        },
        "extElem": {
            "key": "R§RISO"
        }
    }
        , {
        "intElem": {
            "key": "*TELA"
        },
        "extElem": {
            "key": "R§TE01"
        }
    }
        , {
        "intElem": {
            "key": "*TEMA"
        },
        "extElem": {
            "key": "R§TE02"
        }
    }
        , {
        "intElem": {
            "key": "*TEAT"
        },
        "extElem": {
            "key": "R§TE03"
        }
    }
    ]
}

const resto = {
    "coefficiente": {
        "newValue": "true",
        "intElem": {
            "key": "*CF"
        },
        "extElem": {
            "key": "D§COEF"
        },
        "validKey": "XFVALI"
    },
    "componente": {
        "intElem": {
            "key": "*CM"
        },
        "extElem": {
            "key": "D§COMP"
        }
    }, "exportKeyList": [
        "D§USR1",
        "D§COMP",
        "D§USR2",
        "D§COEF",
        "D§NOTA",
        "D§DISE",
        "XFVALI"
        , "*TCL"
        , "*TCN"
        , "*DES"
        , "CMM"
        , "*TCL"
        , "*D_L"
        , "*D_P"
        , "*D_H"
        , "*D_L5"
        , "*D_P5"
        , "*D_H5"
        , "*P_N"
        , "*P_L"
        , "R§RISO"
        , "R§NOTA"
        , "R§TE01"
        , "R§TE02"
        , "R§TE03"
    ],
    "extToIntConfigLogic": [
        {
            "schemaKey": "distCfg",
            "csvCodeKey": "*CSVA"
        },
        {
            "schemaKey": "parentCfg",
            "csvCodeKey": "*CSVP"
        }
    ],
    "intToExtConfigLogic": [
        {
            "schemaKey": "distCfg",
            "csvCodeKey": "*CSVA",
            "defaultExtConfigKey": "D§DISE"
        }
    ]
}

export const config: any = {
    ...vari, ...distCfg, ...parentCfg, ...tempiCiclo, ...resto
}