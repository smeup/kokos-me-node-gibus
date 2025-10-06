export { manageGtechBom };
import { connection01 } from "../connections";
import { RuleVariableMap } from "../../../types/general";
import { cleanData } from "../functions/forSmeup";
import { Connection } from "node-jt400";
import { readFileSync } from "fs";

type gtechBomObjType = { bomList: bomItemType[]; errorList: any[] };
type gtechStatusType = {
  validVersion: boolean;
  validData: boolean;
  errorListSent: boolean;
  record: any;
};
type childObjType = {
  level: Number;
  codArt: string;
  pos: string;
  parentPos: string;
};
type smeupChkObjType = { notFoundInSmeupList: any[] };

function initGtechBomObj() {
  let gtechBomObj: gtechBomObjType = { bomList: [], errorList: [] };
  return gtechBomObj;
}

function initGtechStatus() {
  let gtechStatus: gtechStatusType = {
    validVersion: false,
    validData: true,
    errorListSent: false,
    record: {},
  };
  return gtechStatus;
}

async function rawBomToBomObj(rawBom: any) {
  let bomObj: gtechBomObjType;
  let transcodeList: transcodeItemType[] = await loadTranscodeList();

  bomObj = createBomObj(rawBom, transcodeList);

  return bomObj;
}

async function updateGtechRecord(
  connection: Connection,
  gtechBomObj: any,
  metaDataObj: any,
  codCfg: string,
  timestamp: string,
  bomVersion: string
) {
  let updateResult: any;
  let updateString: string;

  //lettura parametro 023 Fam.Modelli per Carico Reparti dell'articolo
  updateString = "UPDATE ";
  updateString += "X_GTECH01 SET ";
  if (gtechBomObj) updateString += `JSONDOC = '${JSON.stringify(gtechBomObj)}'`;
  if (metaDataObj)
    updateString += `JSONMETADATA = '${JSON.stringify(metaDataObj)}'`;
  updateString += "WHERE CODCFG = ? AND TIMESTAMP = ? AND BOMVERSION = ?";

  updateResult = await connection.update(updateString, [
    codCfg,
    timestamp,
    bomVersion,
  ]);

  return updateResult;
}
async function insertGtechRecord(
  connection: Connection,
  gtechBomObj: gtechBomObjType,
  metaDataObj: any,
  codCfg: string,
  timestamp: string,
  bomVersion: string
) {
  //metto come non valide tutte le versioni già presenti
  let updateString: string;

  updateString = "UPDATE X_GTECH01 SET VALID = 0 WHERE CODCFG = ?";

  await connection.update(updateString, [codCfg]);

  let insertResult: any;
  let insertString: string;

  insertString = "INSERT INTO ";
  insertString += "X_GTECH01 ";
  insertString += "VALUES (?,?,?,?,?,?)";
  let jsonDoc = "";
  if (gtechBomObj) jsonDoc = JSON.stringify(gtechBomObj);
  let jsonMetadata = "";
  if (metaDataObj) jsonMetadata = JSON.stringify(metaDataObj);

  insertResult = await connection.update(insertString, [
    { type: "CLOB", value: jsonDoc },
    { type: "CLOB", value: jsonMetadata },
    codCfg,
    timestamp,
    bomVersion,
    1,
  ]);

  return insertResult;
}

async function getGtechRecord(
  connection: Connection,
  codCfg: string,
  timestamp: string,
  bomVersion: string
) {
  let selectResult: any;
  let selectString: string;

  //lettura parametro 023 Fam.Modelli per Carico Reparti dell'articolo
  selectString = "SELECT * ";
  selectString += "FROM X_GTECH01 ";
  selectString += "WHERE CODCFG = ? AND BOMVERSION = ? AND TIMESTAMP  = ?";

  selectResult = await connection.query(selectString, [
    codCfg,
    bomVersion,
    timestamp,
  ]);

  if (selectResult[0]) {
    return selectResult[0];
  } else {
    return false;
  }
}

function chkBomProps(bomItemValue: string, linkData: any, propsList: string[]) {
  let result = false;
  for (const prop of propsList) {
    //almeno una deve matchare
    if (linkData[prop] === bomItemValue) result = true;
  }
  return result;
}

//il validateLink sarà incaricato del calcolo configurazione del legame
//modificherà d§dise partendo da d§dise
function validateLink(
  linkData: any,
  bom: bomItemType[],
  notValidGtechBom: boolean
) {
  if (notValidGtechBom) return (linkData["XFVALI"] = "");

  //*POS, come potenzialmente *COL e *LUNG arriva popolata da INITDATAOBJ

  let keyFieldMapList = [
    { type: "onlyIfPresent", smeup: ["D§USR1"], gtech: "seq1" },
    { type: "mandatory", smeup: ["D§COMP"], gtech: "cod" },
    { type: "onlyIfPresent", smeup: ["D§PAS2", "*POS"], gtech: "ref" },
    //D§PAS2 va confrontato con ///codifica/// ref che arriva da gibustech
    //pensavamo di avere spazio illimitato per il ref ed invece il D§PAS2 è limitato a 15
  ];
  let bomItem = bom.find((bomItem: any) => {
    let found = true;
    for (const keyFieldMap of keyFieldMapList) {
      let gotToCheck = false;
      if ([undefined, "mandatory"].includes(keyFieldMap.type)) {
        gotToCheck = true;
      } else if (keyFieldMap.type === "onlyIfPresent") {
        if (bomItem[keyFieldMap.gtech]) {
          gotToCheck = true;
        }
      }
      if (gotToCheck)
        if (
          !chkBomProps(bomItem[keyFieldMap.gtech], linkData, keyFieldMap.smeup)
        )
          found = false;
    }
    return found;
  }) as bomItemType;

  if (bomItem) {
    linkData["D§COEF"] = bomItem.pezzi;
    setVarForDise(linkData, bomItem); //va a popolare CON-A CON-B CON-C
  } else {
    linkData["XFVALI"] = "";
  }
}

async function loadTranscodeList() {
  let fileNamesList = ["T01.json"];
  let transcodeList: any[] = [];

  for (const fileName of fileNamesList) {
    const data = readFileSync(`./${fileName}`, "utf-8");
    const theJson = JSON.parse(data);

    let defProps = theJson.defProps;
    let codList = theJson.codList;

    for (const item of codList) {
      if (!item.transCod) {
        item.transCod = item.cod; //sostanzialmente non c'è cambio di codice
      }
      transcodeList.push({ ...defProps, ...item });
    }
  }

  return transcodeList;
}

function calc003config(colPolicy: string, linkData: any) {
  //SAREBBE DA CARATTERIZZARE CHE IL 003 VALORIZZA CON-A

  //I CODICI COLORE PURTROPPO VANON PORTATI TUTTI IN UPPERCASE PERCHE' IL MAGNIFICO
  //AS400 NON ACCETTA LE MINUSCOLE

  let valueToSet: any = "";
  let vrObj: {
    VRSTR: string;
    VRLAMFRA: string;
    VRPLASTR: string;
    VRPLALAMFRA: string;
    VRLAMIERASTR: string;
    VRSPECIAL01: string;
    VRABBSTR: string;
    VRABBLAMFRA: string;
  } = {
    VRSTR: "",
    VRPLASTR: "",
    VRLAMFRA: "",
    VRPLALAMFRA: "",
    VRLAMIERASTR: "",
    VRSPECIAL01: "",
    VRABBSTR: "",
    VRABBLAMFRA: "",
  };

  vrObj.VRSTR = linkData["§VERN_1_COM"];
  vrObj.VRABBSTR = linkData["§VR_ABB"];
  vrObj.VRPLASTR = linkData["§VERN_PLAST"];
  vrObj.VRLAMIERASTR = linkData["§VR_LAM_ABB"];

  vrObj.VRLAMFRA = linkData["§VERN_FRANGI"];
  if (linkData["§VR_LAME"]) vrObj.VRLAMFRA = linkData["§VR_LAME"];

  vrObj.VRABBLAMFRA = linkData["§VR_ABB_LAM"];
  vrObj.VRPLALAMFRA = linkData["§VR_PLA_LAM"];

  vrObj.VRLAMFRA = "";
  vrObj.VRPLALAMFRA = "";
  vrObj.VRLAMIERASTR = "";
  vrObj.VRSPECIAL01 = "";

  switch (colPolicy.toUpperCase()) {
    case "VRSTR":
    case "VRLAMFRA":
    case "VRPLASTR":
    case "VRPLALAMFRA":
    case "VRLAMIERASTR":
      let index: keyof typeof vrObj =
        colPolicy.toUpperCase() as keyof typeof vrObj;
      if (typeof index === "string") valueToSet = vrObj[index];

      break;
    case "VRSPECIAL01": //abbinata al criterio 003A per azzerari i pezzi
      //,{"childCod": "230138", "cfgType" : "003A", "colPolicy" : "vrSpecial01"}
      if (
        [
          "0053",
          "0055",
          "0059",
          "0065",
          "0069",
          "0070",
          "0073",
          "0076",
          "0103",
          "0107",
          "0121",
          "0127",
          "0130",
          "0131",
          "0147",
          "0616",
          "0172",
          "0208",
          "0224",
          "0258",
          "0266",
          "0617",
          "0280",
          "0285",
          "0293",
          "0316",
          "0618",
          "0323",
          "0324",
          "0619",
          "0620",
          "0621",
        ].includes(vrObj.VRSTR)
      ) {
        valueToSet = vrObj.VRSTR;
      }
      break;
    case "0187":
    case "0000":
    case "P072":
    case "P000":
    case "0055":
    case "0050":
    case "0051":
    case "P187":
    case "0080":
    case "P073":
    case "P051":
    case "P055":
    case "0069":
      valueToSet = colPolicy;
      break;
    case "VRPLABINESTR":
      valueToSet = "P072";
      switch (vrObj.VRABBSTR) {
        case "01":
        case "02":
          valueToSet = "P055";
          break;
      }
      break;
    case "VRPLABIANSTR":
      valueToSet = "P073";
      switch (vrObj.VRABBSTR) {
        case "01":
        case "02":
          valueToSet = "P055";
          break;
      }
      break;
    case "VRPLABIBGNESTR":
      valueToSet = "P072";
      switch (vrObj.VRABBSTR) {
        case "01":
          valueToSet = "P055";
          break;
        case "02":
          valueToSet = "P053";
          break;
      }
      break;
    case "VRPLABIBGNESTRT01":
      valueToSet = "P072";
      if (linkData.modello === "SWAY") {
        //ATTUALMENTE SOLO PER IL 110210, sempre nero su SWAY
        valueToSet = "P072";
      } else {
        switch (vrObj.VRABBSTR) {
          case "01":
            valueToSet = "P055";
            break;
          case "02":
            valueToSet = "P053";
            break;
        }
      }
      break;
    case "VRPLABIGRSTR":
      valueToSet = "P098";
      switch (vrObj.VRABBSTR) {
        case "01":
        case "02":
          valueToSet = "P055";
          break;
      }
      break;
    case "VRPLABIANFRALAM":
      valueToSet = "P073";
      switch (vrObj.VRABBLAMFRA) {
        case "01":
        case "02":
          valueToSet = "P055";
          break;
      }
      break;
    case "VRALUABBPLALAM":
      valueToSet = "0055";
      switch (vrObj.VRPLALAMFRA) {
        case "P053":
          valueToSet = "0053";
          break;
        case "P073":
          valueToSet = "0073";
          break;
      }
      break;
    default:
      break;
  }
  linkData["*CON-A"] = valueToSet;
}

function calc004config(colPolicy: string, linkData: any, lunghezza: number) {
  calc003config(colPolicy, linkData);

  let valueToSet = lunghezza;

  linkData["*CON-B"] = valueToSet;
}

function calc005config(colPolicy: string, linkData: any, lunghezza: number) {
  calc004config(colPolicy, linkData, lunghezza);
  //la configurazione si popola di default con _CF
}

function calc006config(colPolicy: string, linkData: any, lunghezza: number) {
  calc005config(colPolicy, linkData, lunghezza);

  if (linkData["*POS"]) linkData["*CON-C"] = linkData["*POS"];
  else if (linkData["D§PAS2"]) linkData["*CON-C"] = linkData["D§PAS2"];
}

type rawItemType = {
  index: number;
  name: string;
  smeup: string;
  counter: number;
  ref: string;
  codifica: string;
  lunghezza: number;
};

function setVarForDise(linkData: any, bomItem: any) {
  let cfgType = linkData["*CSVA"];
  let colPolicy = linkData["D§DISE"];
  if (cfgType) {
    switch (cfgType) {
      case "003":
        calc003config(colPolicy, linkData);
        break;
      case "004":
        calc004config(colPolicy, linkData, bomItem.lunghezza);
        break;
      case "005":
        calc005config(colPolicy, linkData, bomItem.lunghezza);
        break;
      case "006":
      case "008":
        calc006config(colPolicy, linkData, bomItem.lunghezza);
        break;
      default:
        //todo decidere come trattare gli errori
        console.dir({ setVarForDise: "criterio non gestito" });
        break;
    }
  }
}

type transcodeItemType = {
  cod: string;
  blackListed: boolean;
  transCod: string;
  forceSumQty: boolean;
};

function createBomObj(
  rawBomList: rawItemType[],
  transcodeList: transcodeItemType[]
) {
  let retBomObj: gtechBomObjType = { bomList: [], errorList: [] };
  let bomItemList: bomItemType[] = [];

  for (const rawItem of rawBomList) {
    if (rawItem.counter) {
      let transcodeItem = transcodeList.find(
        (item: transcodeItemType) => rawItem.smeup === item.cod
      ) as transcodeItemType;
      if (transcodeItem) if (transcodeItem.blackListed) continue;
      let bomItem = calcBomItem(rawItem, transcodeItem);

      if (bomItem.forceSumQty) {
        bomItem.ref = ""; //pulisco l'etichetta di gibustech
        bomItem.codifica = ""; //pulisco l'etichetta di smeup
        let foundItem = bomItemList.find((elem) => elem.cod === bomItem.cod);
        if (foundItem) foundItem.pezzi += bomItem.pezzi;
        else bomItemList.push(bomItem);
      } else bomItemList.push(bomItem);
    }
  }

  retBomObj.bomList = bomItemList;

  return retBomObj;
}

type bomItemType = {
  cod: string;
  ref: string;
  codifica: string;
  pezzi: number;
  lunghezza: number;
  forceSumQty: boolean;
};

function calcBomItem(rawItem: rawItemType, transcodeItem: transcodeItemType) {
  let bomItem = {} as bomItemType;
  if (rawItem.smeup) bomItem.cod = rawItem.smeup;
  if (rawItem.ref) bomItem.ref = rawItem.ref;
  if (rawItem.codifica) bomItem.codifica = rawItem.codifica;
  if (rawItem.lunghezza) bomItem.lunghezza = rawItem.lunghezza;
  if (rawItem.counter) bomItem.pezzi = rawItem.counter;
  if (transcodeItem) {
    if (transcodeItem.transCod) bomItem.cod = transcodeItem.transCod;
    if (transcodeItem.forceSumQty)
      bomItem.forceSumQty = transcodeItem.forceSumQty;
  }

  return bomItem;
}

async function getCodBom(connection: Connection, codArt: string) {
  let selectResult: any;
  let selectString: string;
  let codBom = codArt;

  //lettura parametro 023 Fam.Modelli per Carico Reparti dell'articolo
  selectString = "SELECT * ";
  selectString += "FROM BRARTI0F ";
  selectString += "WHERE A§ARTI = ?";

  selectResult = await connection.query(selectString, [codArt]);

  if (selectResult[0]) {
    if (selectResult[0]["A§GRDI"]) {
      codBom = selectResult[0]["A§GRDI"];
    }
  }

  return codBom;
}
function createChildObj(
  level: number,
  codArt: string,
  pos: string,
  parentPos: string
) {
  let childObj: childObjType = {
    level: level,
    codArt: codArt,
    pos: pos,
    parentPos: parentPos,
  };
  return childObj;
}

async function getBomChildrenList(
  connection: Connection,
  codBom: string,
  maxLevel: number
) {
  let bomChildrenList: childObjType[] = [];
  let parentPos = "";
  let pos = "";
  bomChildrenList.push(createChildObj(1, codBom, pos, parentPos));

  if (!maxLevel) maxLevel = 1;

  for (let index = 1; index < maxLevel; index++) {
    let childrenListLevel = bomChildrenList.filter(
      (elem) => elem.level === index
    );
    for (const element of childrenListLevel) {
      let codArt = element.codArt;
      let parentPos = element.pos; //ma cosa sto scrivendo?
      bomChildrenList = bomChildrenList.concat(
        await getChildrenList(connection, codArt, index + 1, parentPos)
      );
    }
  }
  return bomChildrenList;
}

async function getChildrenList(
  connection: Connection,
  codArt: string,
  level: number,
  parentPos: string
) {
  let selectString;
  //lettura parametro 023 Fam.Modelli per Carico Reparti dell'articolo
  selectString = "SELECT * ";
  selectString += "FROM BRDIST0F ";
  selectString += "WHERE D§ASSI = ?";

  let selectResult: any[] = await connection.query(selectString, [codArt]);

  let childrenList: childObjType[] = [];
  for (let element of selectResult) {
    let childrenObj: childObjType = {
      level: level,
      codArt: element["D§COMP"],
      pos: element["D§PAS2"],
      parentPos: parentPos,
    };
    childrenList.push(childrenObj);
  }

  return childrenList;
}

async function chkSmeupBom(
  connection: Connection,
  gtechBomObj: gtechBomObjType,
  codArt: string
) {
  let codBom = await getCodBom(connection, codArt);
  let chkResultObj: smeupChkObjType = { notFoundInSmeupList: [] };
  let bomChildrenList = await getBomChildrenList(connection, codBom, 5);

  let gtechBomList = gtechBomObj.bomList;
  for (const element of gtechBomList) {
    let found = true;
    let firstChildrenList = bomChildrenList.filter(
      (elem) => elem.codArt === element.cod
    );
    if (!firstChildrenList) {
      found = false;
    } else if (element.ref) {
      //do per scontato che... adesso usiamo il ref
      let refFound = false;
      if (firstChildrenList.find((elem) => elem.parentPos === element.ref))
        refFound = true;
      if (firstChildrenList.find((elem) => elem.pos === element.ref))
        refFound = true;
      if (refFound == false) found = false;
      // if(element.cod === 'TG_PR0073'){ console.dir(firstChildrenList); console.dir(codificaFound);}
    }
    if (!found) chkResultObj.notFoundInSmeupList.push(element);
  }

  return chkResultObj;
}

async function manageGtechBom(
  linkData: RuleVariableMap,
  bomVersion: string,
  calcParObj: any,
  bomClass: any
) {
  cleanData(linkData);
  let connection = connection01();
  let timestamp = linkData["TIMESTAMP"];
  let codCfg = linkData["_CF"];

  let gtechBomObj = initGtechBomObj();

  let gtechStatus = await manageGtechStatus(
    connection,
    codCfg,
    timestamp,
    bomVersion
  );

  if (!gtechStatus.validVersion) {
    let gtechBomObj = await createGtechBom(
      linkData,
      codCfg,
      timestamp,
      calcParObj,
      bomClass
    );
    let jsonMetadata: any = { errorList: [] };
    if (gtechBomObj.errorList.length > 0) {
      jsonMetadata.errorList = gtechBomObj.errorList;
    } else {
      //non ci sono errori alla base della distinta gibustech
      let chkBomObj: smeupChkObjType = await chkSmeupBom(
        connection,
        gtechBomObj,
        linkData["_AR"]
      );
      if (chkBomObj.notFoundInSmeupList) {
        if (chkBomObj.notFoundInSmeupList.length > 0) {
          jsonMetadata.errorList.push({
            notFoundInSmeup: chkBomObj.notFoundInSmeupList,
          });
        }
      }
    }
    let result = await insertGtechRecord(
      connection,
      gtechBomObj,
      jsonMetadata,
      codCfg,
      timestamp,
      bomVersion
    );
    gtechStatus = await manageGtechStatus(
      connection,
      codCfg,
      timestamp,
      bomVersion
    );
  }

  //forziamo che sia valida... per fare una prova
  //gtechStatus.validVersion = true; gtechStatus.validData = true;

  if (gtechStatus.validVersion && gtechStatus.validData) {
    let gtechRecord = gtechStatus.record;
    gtechBomObj = JSON.parse(gtechRecord["JSONDOC"]);
    validateLink(linkData, gtechBomObj.bomList, false);
  } else {
    validateLink(linkData, gtechBomObj.bomList, true); //not valid gtechbom
  }
}

async function manageGtechStatus(
  connection: Connection,
  codCfg: string,
  timestamp: string,
  bomVersion: string
) {
  let gtechStatus = initGtechStatus();
  let gtechRecord = await getGtechRecord(
    connection,
    codCfg,
    timestamp,
    bomVersion
  );

  let jsonMetadata: any;

  if (gtechRecord) {
    gtechStatus.record = gtechRecord;
    jsonMetadata = gtechRecord["JSONMETADATA"]
      ? JSON.parse(gtechRecord["JSONMETADATA"])
      : "";
    if (jsonMetadata) {
      let errorList = jsonMetadata.errorList;
      if (Array.isArray(errorList)) {
        if (errorList.length > 0) gtechStatus.validData = false;
      }
      if (jsonMetadata.errorListSent) {
        gtechStatus.errorListSent = true;
      }

      if (gtechRecord["BOMVERSION"] === bomVersion)
        gtechStatus.validVersion = true;
    }
  }

  if (gtechStatus.validVersion) {
    if (!gtechStatus.validData) {
      if (!gtechStatus.errorListSent) {
        //todo mandare l'errore a jira
        jsonMetadata.errorListSent = true;
        updateGtechRecord(
          connection,
          "",
          jsonMetadata,
          codCfg,
          timestamp,
          bomVersion
        );
      }
    }
  }

  return gtechStatus;
}

async function createGtechBom(
  linkData: RuleVariableMap,
  codCfg: string,
  timestamp: string,
  calcParObj: any,
  bomClass: any
) {
  //await perchè legge l'ordine dal DB
  let addParms = {};
  let parObj = await calcParObj(linkData, addParms); //il secondo parametro serve per modificare il comportamento delle classi di gtech

  // console.dir(parObj, { depth: null });

  let instanceClass = new bomClass(parObj);

  let rawBom = instanceClass.BOM;

  let gtechBomObj = await rawBomToBomObj(rawBom);

  return gtechBomObj;
}
