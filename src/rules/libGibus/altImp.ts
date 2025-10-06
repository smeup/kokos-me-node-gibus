//ricalcoliamo l'impegno alternativo per le barre
import { config } from "./config";
import { connection01 } from "./connections";

export const altImpT01 = async (data: any) => {
  //funzione ultraspecifica che altera *CON-B e *CF che è delicato... in quanto un 
  //set su  *CF va a sovrascrivere il coefficiente e non va fatto
  //utilizza *CON-A 

  let col = data['*CON-A']
  let lung = data['*CON-B']
  let art = data['D§COMP']
  let nFrazionamenti = 1;
  let lIntestazione = 0;
  let configList: tConfigList = [];

  let connection = connection01();
  let queryResult: any;
  queryResult = await connection.query("SELECT C£VALO FROM SMEDAT.C£CONR0F WHERE C£NUMP = '030' AND C£CD01 = ?", [art]);
  if (queryResult[0]) {
    nFrazionamenti = queryResult[0]['C£VALO'];
  }
  queryResult = await connection.query("SELECT C£VALO FROM SMEDAT.C£CONR0F WHERE C£NUMP = '029' AND C£CD01 = ?", [art]);
  if (queryResult[0]) {
    lIntestazione = queryResult[0]['C£VALO'];
  }

  queryResult = await connection.query("SELECT C£CDPR FROM SMEDAT.C£VARI0F WHERE C£CDTR = ?", [art]);

  configList = createConfigObjList(queryResult, nFrazionamenti, lIntestazione);

  //qui ho la configList che ha tutte le configurazioni ordinate per colore e poi per misuraFrazionata
  let colConfigList = configList.find((elem) => elem.col === col)

  if (colConfigList) {//il colore è in lista
    calcAltImp(data, colConfigList.lungObjList, lung, lIntestazione)
  } else {
    let defLungObjList = calcDefLungObjList(configList);
    calcAltImp(data, defLungObjList, lung, lIntestazione)
  }

}

function calcAltImp(data: any, lungObjList: tLungObjList, lung: number, lIntestazione: number) {

  //lungObjList deve arrivare già ordinato

  let bestObjElem = lungObjList.find((lungObjElem) => (lungObjElem.lungDiv >= lung));

  if (bestObjElem) {
    //se supera metà barra il coefficiente diventa l'intero
    //magari si può opzionare tramite un parametro inserito in data
    if(bestObjElem.div > 0.5){
      bestObjElem.div = 1;
    }
    data['*CON-B'] = bestObjElem.lungPR;
    if (data['*CF']) {
      data['*CF'] = data['*CF'] / bestObjElem.div;
    } else {
      data['D§COEF'] = data['D§COEF'] * bestObjElem.div;
    }
  } else {
    data['*CON-B'] = lung + lIntestazione / 10;
  }

}

function calcDefLungObjList(filtConfigList: tConfigList) {
  let defLungObjList: tLungObjList = []

  filtConfigList.forEach((filtElem) => {
    filtElem.lungObjList.forEach((lungObjElem) => {
      let found = defLungObjList.find((defLungObjElem) => (JSON.stringify(defLungObjElem) === JSON.stringify(lungObjElem)));
      if (!found) { defLungObjList.push(lungObjElem) };
    })
  })

  //riordino perchè potrebbe succedere che non siano ordinate le misure frazionate
  defLungObjList.sort((a, b) => a.lungDiv - b.lungDiv);

  return defLungObjList;
}

function createConfigObjList(queryResult: any, nFrazionamenti: number, lIntestazione: number) {
  let configList: tConfigList = [];

  queryResult.forEach((queryElem: any) => {
    let colQueryElem = queryElem['C£CDPR'].substring(0, 4);
    let lungQueryElem = parseFloat(queryElem['C£CDPR'].substring(4, 9)) / 10;
    let found = false;

    configList.forEach((configElem) => {
      if (configElem.col === colQueryElem) {
        configElem.lungObjList = populateLungObjList(configElem.lungObjList, lungQueryElem, nFrazionamenti, lIntestazione);
        found = true;
      }
    })

    if (!found) {
      configList.push({ col: colQueryElem, lungObjList: populateLungObjList([], lungQueryElem, nFrazionamenti, lIntestazione) });
    }
  });

  return configList;

}

function populateLungObjList(lungObjList: tLungObjList, lung: number, nFrazionamenti: number, lIntestazione: number) {
  let additional = [];
  for (let index = 1; index <= nFrazionamenti; index++) {
    additional.push({ lungPR: lung, lungDiv: (lung - lIntestazione / 10) * index / nFrazionamenti, div: index / nFrazionamenti });

  }

  lungObjList = [...lungObjList, ...additional];
  lungObjList.sort((a, b) => a.lungDiv - b.lungDiv);

  return lungObjList;
}

type tLungObjList = Array<{ lungPR: number, lungDiv: number, div: number }>;
type tConfigList = Array<{ col: string, lungObjList: tLungObjList }>;