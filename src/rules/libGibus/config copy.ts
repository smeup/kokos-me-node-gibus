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

//la parte in cui si va a scrivere la configurazione del componente
const distCfg =
{
    "distCfg": [
        {
            "code": "*",
            "partList": [
                {
                    "idx": 1,
                    "extElem": {
                        "key": "D§DISE",
                        "type": "string",
                        "length": 6
                    },
                    "intElem": {
                        "key": "§_CF",
                        "type": "string"
                    }
                }
            ]
        },
        {
            "code": "003",
            "partList": [
                {
                    "idx": 1,
                    "extElem": {
                        "key": "D§DISE",
                        "type": "string",
                        "length": 4
                    },
                    "intElem": {
                        "key": "*CON-A",
                        "type": "string"
                    }
                }
            ]
        },
        {
            "code": "004",
            "partList": [
                {
                    "idx": 1,
                    "extElem": {
                        "key": "D§DISE",
                        "type": "string",
                        "length": 4
                    },
                    "intElem": {
                        "key": "*CON-A",
                        "type": "string"
                    }
                },
                {
                    "idx": 2,
                    "extElem": {
                        "key": "D§DISE",
                        "type": "string",
                        "format": "zeroPadded",
                        "length": 5,
                        "dec": 1
                    },
                    "intElem": {
                        "key": "*CON-B",
                        "type": "number"
                    }
                }
            ]
        },
        {
            "code": "005",
            "partList": [
                {
                    "idx": 1,
                    "extElem": {
                        "key": "D§DISE",
                        "type": "string",
                        "length": 4
                    },
                    "intElem": {
                        "key": "*CON-A",
                        "type": "string"
                    }
                },
                {
                    "idx": 2,
                    "extElem": {
                        "key": "D§DISE",
                        "type": "string",
                        "format": "zeroPadded",
                        "length": 5,
                        "dec": 1
                    },
                    "intElem": {
                        "key": "*CON-B",
                        "type": "number"
                    }
                },
                {
                    "idx": 3,
                    "extElem": {
                        "key": "D§DISE",
                        "type": "string",
                        "length": 6
                    },
                    "intElem": {
                        "key": "§_CF",
                        "type": "string"
                    }
                }
            ]

        },
        {
            "code": "006",
            "altPartList": true,
            "partListKey": 'XCFAL',
            "partObj": {
                "0001": {
                    "partList": [
                        {
                            "idx": 1,
                            "extElem": {
                                "key": "XTEMP",
                                "type": "string",
                                "length": 4
                            },
                            "intElem": {
                                "key": "*CON-A",
                                "type": "string"
                            }
                        },
                        {
                            "idx": 2,
                            "extElem": {
                                "key": "XTEMP",
                                "type": "string",
                                "format": "zeroPadded",
                                "length": 5,
                                "dec": 1
                            },
                            "intElem": {
                                "key": "*CON-B",
                                "type": "number"
                            }
                        },
                        {
                            "idx": 3,
                            "extElem": {
                                "key": "XTEMP",
                                "type": "string",
                                "length": 6
                            },
                            "intElem": {
                                "key": "§_CF",
                                "type": "string"
                            }
                        },
                        {
                            "idx": 4,
                            "extElem": {
                                "key": "XTEMP",
                                "type": "string",
                                "length": 15
                            },
                            "intElem": {
                                "key": "*CON-C",
                                "type": "string"
                            }
                        }
                    ]
                }
            },
            altPartObj: {
                "originalKey": "XTEMP",
                "alternativeKey": "D§DISE",
                "addKeyObjList":[{"extKey": "D§USR2", "intKey" : "D§DISE", "startPos" : 10, "endPos" : 14 }],
                "altPartList": [
                    {
                        "idx": 1,
                        "intElem": {
                            "key": "§_CF",
                            "type": "string",
                        },
                        "extElem": {
                            "key": "D§DISE",
                            "type": "string",
                            "length": 6
                        },
                    },
                    {
                        "idx": 2,
                        "intElem": {
                            "key": "XCFAL",
                            "type": "string",
                        },
                        "extElem": {
                            "key": "D§DISE",
                            "type": "string",
                            "length": 4
                        }
                    },
                    {
                        "idx": 3,
                        "intElem": {
                            "key": "autoIncrement",
                        },
                        "extElem": {
                            "key": "D§DISE",
                            "type": "string",
                            "format": "zeroPadded",
                            "length": 4,
                        }
                    }
                ]
            }
        },
        {
            "code": "007",
            "altPartList": true,
            "partListKey": 'XCFAL',
            "partObj": {
                "0001": {
                    "partList": [
                        {
                            "idx": 1,
                            "extElem": {
                                "key": "XTEMP",
                                "type": "string",
                                "format": "empty",
                                "length": 4
                            },
                            "intElem": {
                            }
                        },
                        {
                            "idx": 2,
                            "extElem": {
                                "key": "XTEMP",
                                "type": "string",
                                "format": "empty",

                                "length": 5,
                            },
                            "intElem": {
                            }
                        },
                        {
                            "idx": 3,
                            "extElem": {
                                "key": "XTEMP",
                                "type": "string",
                                "length": 6
                            },
                            "intElem": {
                                "key": "§_CF",
                                "type": "string"
                            }
                        }
                        ,
                        {
                            "idx": 4,
                            "extElem": {
                                "key": "XTEMP",
                                "type": "string",
                                "length": 15
                            },
                            "intElem": {
                                "key": "*CON-C",
                                "type": "string"
                            }
                        }
                    ]
                }
            },
            altPartObj: {
                "originalKey": "XTEMP",
                "alternativeKey": "D§DISE",
                "altPartList": [
                    {
                        "idx": 1,
                        "intElem": {
                            "key": "§_CF",
                            "type": "string",
                        },
                        "extElem": {
                            "key": "D§DISE",
                            "type": "string",
                            "length": 6
                        },
                    },
                    {
                        "idx": 2,
                        "intElem": {
                            "key": "XCFAL",
                            "type": "string",
                        },
                        "extElem": {
                            "key": "D§DISE",
                            "type": "string",
                            "length": 4
                        }
                    },
                    {
                        "idx": 3,
                        "intElem": {
                            "key": "autoIncrement",
                        },
                        "extElem": {
                            "key": "D§DISE",
                            "type": "string",
                            "format": "zeroPadded",
                            "length": 4
                        }
                    }
                ]
            }
        },
        {
            "code": "008",
            "aliasCode": "006",
        }
    ]
}

//aliascode, ricordarsi anche di cambiare il setVarForDise, altrimenti..... andrebbe cambiato direttamente
//data['*CSVA']
//la parte in cui si va a leggere la configurazione del padre e si portano i valori nel componente
const parentCfg = {
    "parentCfg": [
        {
            "code": "*",
            "partList": [
                {
                    "idx": 1,
                    "extElem": {
                        "key": "XCONFI",
                        "type": "string",
                        "length": 6
                    },
                    "intElem": {
                        "key": "§_CF",
                        "type": "string"
                    }
                }
            ]
        },
        {
            "code": "003",
            "partList": [
                {
                    "idx": 1,
                    "extElem": {
                        "key": "XCONFI",
                        "type": "string",
                        "length": 4
                    },
                    "intElem": {
                        "key": "*COL",
                        "type": "string"
                    }
                }
            ]
        },
        {
            "code": "004",
            "partList": [
                {
                    "idx": 1,
                    "extElem": {
                        "key": "XCONFI",
                        "type": "string",
                        "length": 4
                    },
                    "intElem": {
                        "key": "*COL",
                        "type": "string"
                    }
                },
                {
                    "idx": 2,
                    "extElem": {
                        "key": "XCONFI",
                        "type": "string",
                        "format": "zeroPadded",
                        "length": 5,
                        "dec": 1
                    },
                    "intElem": {
                        "key": "*LUNG",
                        "type": "number"
                    }
                }
            ]
        },
        {
            "code": "005",
            "partList": [
                {
                    "idx": 1,
                    "extElem": {
                        "key": "XCONFI",
                        "type": "string",
                        "length": 4
                    },
                    "intElem": {
                        "key": "*COL",
                        "type": "string"
                    }
                },
                {
                    "idx": 2,
                    "extElem": {
                        "key": "XCONFI",
                        "type": "string",
                        "format": "zeroPadded",
                        "length": 5,
                        "dec": 1
                    },
                    "intElem": {
                        "key": "*LUNG",
                        "type": "number"
                    }
                },
                {
                    "idx": 3,
                    "extElem": {
                        "key": "XCONFI",
                        "type": "string",
                        "length": 6
                    },
                    "intElem": {
                        "key": "§_CF",
                        "type": "string"
                    }
                }
            ]
        },
        {
            "code": "006",
            "altPartList": true,
            "altElemKey": "XCONFI",
            "altParStart": 6,
            "altParEnd": 10,
            "altParObj": {
                '0001': {
                    "partList": [
                        {
                            "idx": 1,
                            "extElem": {
                                "key": "XCONFI",
                                "type": "string",
                                "length": 4
                            },
                            "intElem": {
                                "key": "*COL",
                                "type": "string"
                            }
                        },
                        {
                            "idx": 2,
                            "extElem": {
                                "key": "XCONFI",
                                "type": "string",
                                "format": "zeroPadded",
                                "length": 5,
                                "dec": 1
                            },
                            "intElem": {
                                "key": "*LUNG",
                                "type": "number"
                            }
                        },
                        {
                            "idx": 3,
                            "extElem": {
                                "key": "XCONFI",
                                "type": "string",
                                "length": 6
                            },
                            "intElem": {
                                "key": "§_CF",
                                "type": "string"
                            }
                        },
                        {
                            "idx": 4,
                            "extElem": {
                                "key": "XCONFI",
                                "type": "string",
                                "length": 15
                            },
                            "intElem": {
                                "key": "*POS",
                                "type": "string"
                            }
                        }
                    ]
                }
            }
        },
        {
            "code": "007",
            "altPartList": true,
            "altElemKey": "XCONFI",
            "altParStart": 6,
            "altParEnd": 10,
            "altParObj": {
                '0001': {
                    "partList": [
                        {
                            "idx": 1,
                            "extElem": {
                                "key": "XCONFI",
                                "type": "string",
                                "length": 4
                            },
                            "intElem": {
                                "key": "*COL",
                                "type": "string"
                            }
                        },
                        {
                            "idx": 2,
                            "extElem": {
                                "key": "XCONFI",
                                "type": "string",
                                "format": "zeroPadded",
                                "length": 5,
                                "dec": 1
                            },
                            "intElem": {
                                "key": "*LUNG",
                                "type": "number"
                            }
                        },
                        {
                            "idx": 3,
                            "extElem": {
                                "key": "XCONFI",
                                "type": "string",
                                "length": 6
                            },
                            "intElem": {
                                "key": "§_CF",
                                "type": "string"
                            }
                        },
                        {
                            "idx": 4,
                            "extElem": {
                                "key": "XCONFI",
                                "type": "string",
                                "length": 15
                            },
                            "intElem": {
                                "key": "*POS",
                                "type": "string"
                            }
                        }
                    ]
                }
            }
        },
        {
            "code": "008",
            "aliasCode": "006",
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