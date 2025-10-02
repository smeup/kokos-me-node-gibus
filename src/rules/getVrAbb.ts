import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { getInfoCol } from "./getInfoCol.js";


export const getVrAbb = async (codCol : any) => {

    let vrAbb = (await getInfoCol(codCol)).vrAbb;

    return vrAbb;
};
