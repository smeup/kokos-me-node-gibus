export const distCfg =
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
            "code": "008",
            "altPartList": true,
            "partListKey": 'XCFAL',
            "partObjs": {
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
                    ],
                    altPartObj: {
                        "originalKey": "XTEMP",
                        "alternativeKey": "D§DISE",
                        "addKeyObjList": [{ "extKey": "D§USR2", "intKey": "D§DISE", "startPos": 10, "endPos": 14 }],
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
                "0002": {
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
                    , altPartObj: {
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
                }
            }
        }
    ]
}