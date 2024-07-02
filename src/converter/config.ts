const CONFIG: Record<string, any> = {
    "D§COEF": "newValue",
    "defaultOutput": "input",
    "*CSVA": {
        "*": [
            {
                "idx": 1,
                "dataType": "string",
                "length": 6,
                "default": {
                    "type": "input",
                    "key": "§_CF"
                }
            }
        ],
        "003": [
            {
                "idx": 1,
                "dataType": "string",
                "length": 4,
                "parentCfg": {
                    "input": "XCONFI",
                    "key": "*COL"
                }
            }
        ],
        "004": [
            {
                "idx": 1,
                "dataType": "string",
                "length": 4,
                "parentCfg": {
                    "input": "XCONFI",
                    "key": "*COL"
                }
            },
            {
                "idx": 2,
                "dataType": "int",
                "length": 5,
                "dec": 1,
                "format": "zeroPadded",
                "parentCfg": {
                    "input": "XCONFI",
                    "key": "*LUNG"
                }
            }
        ],
        "005": [
            {
                "idx": 1,
                "dataType": "string",
                "length": 4,
                "parentCfg": {
                    "input": "XCONFI",
                    "key": "*COL"
                }
            },
            {
                "idx": 2,
                "dataType": "int",
                "length": 5,
                "dec": 1,
                "format": "zeroPadded",
                "parentCfg": {
                    "input": "XCONFI",
                    "key": "*LUNG"
                }
            },
            {
                "idx": 3,
                "dataType": "string",
                "length": 6,
                "default": {
                    "type": "input",
                    "key": "§_CF"
                },
                "parentCfg": {
                    "input": "XCONFI",
                    "key": "§_CF"
                }
            }
        ]
    }
}

export { CONFIG };