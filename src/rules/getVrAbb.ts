import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { getInfoCol } from "./getInfoCol";


export const getVrAbb = async (codCol : any) => {

    let vrAbb = (await getInfoCol(codCol)).vrAbb;

    return vrAbb;
};
