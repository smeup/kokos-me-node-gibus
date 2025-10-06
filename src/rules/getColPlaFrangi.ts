import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { getVrAbb } from "./getVrAbb";


export const getColPlaFrangi = async (vrFrangi : any, data : any) => {

    let vrAbb = await getVrAbb(vrFrangi);

    let vrPlast = 'P072';
    if (vrAbb == '01') vrPlast = 'P055';
    if (vrAbb == '02') vrPlast = 'P053';

    return vrPlast;
};
