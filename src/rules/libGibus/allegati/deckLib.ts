import { calcParObjPedana } from "../products/deckLib";
import { pedanaClass } from "../products/class4DECK";


export { calcSvgList };

const calcSvgList = async function (cfgData: any, docData: any) {
    //await perchè legge l'ordine dal DB

    let addParms: any = { grafica: true };

    addParms.docData = docData;

    let parObj = await calcParObjPedana(cfgData, addParms);
    //console.dir(JSON.stringify(parObj));

    let pedanaInstance: any = new pedanaClass(parObj);


    pedanaInstance.preparaListaSVG()

    let svgList: any[] = pedanaInstance.grafica.lista_SVG;

    return svgList;

}
