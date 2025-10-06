import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { getVrAbb } from "./getVrAbb";


export const getColPlaStr = async (vrStr: any, data : any) => {

    //data serve se mai dovrò fare distingui in base al modello
    let vrAbb = await getVrAbb(vrStr);

    let vrPlast = 'P073';
    if (vrAbb == '01') vrPlast = 'P055';
    if (vrAbb == '02') vrPlast = 'P053';
    if (vrAbb == '06') vrPlast = 'P069';

    return vrPlast;
};
