//aliascode, ricordarsi anche di cambiare il setVarForDise, altrimenti..... andrebbe cambiato direttamente
//data['*CSVA']
//la parte in cui si va a leggere la configurazione del padre e si portano i valori nel componente
export const parentCfg = {
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
            "code": "008",
            "altPartList": true,
            "altElemKey": "XCONFI",
            "altPartStart": 6,
            "altPartEnd": 10,
            "altPartObjs": {
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
                },
                '0002': {
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
        }
    ]
}