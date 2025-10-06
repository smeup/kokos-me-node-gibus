/**
 * This rule represents a template implementation of a rule.
 * It takes an input value and performs some operations on it using the Variables class.
 * The result is returned as the output value.
 * 
 * @param iv The input value for the rule.
 * @returns The output value after applying the rule.
 */
import { Rule } from "../types/general";
import { Variables } from "../converter/variables";

export const IMP0000003: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: IMP0000003
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = '0103'
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_DIM_250 = §SI OR §FS_DIM_300 = §SI OR §FS_DIM_400 = §SI OR §FS_COMBI_250 = §SI OR §FS_COMBI_60 = §SI
    // THEN:
    // *SET *CF =  #1
    // #3
    // COND:
    // (§FS_MAR_30_13 = §SI) OR (§FS_MAR_30_50 = §SI) OR (§FS_MAR_35_13 = §SI)
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // (§FS_COMBI_250 = §SI OR §FS_COMBI_60 = §SI)  AND §FS_COM_ARGANO = §SI
    // THEN:
    // *SET *LG = ''
    // #5
    // COND:
    // §FS_MOT_DOP = §SI AND *CF = #1
    // THEN:
    // *SET *CF = #2
    // #6
    // COND:
    // §VERN_1_COM = '0055' OR §VERN_1_COM = '0323' OR §VERN_1_COM = '0131' OR §VERN_1_COM = '0280' OR §VR_ABB = '01'
    // THEN:
    // *SET *CON-A = '0055'
    // #7
    // COND:
    // §VR_ABB = '03'
    // THEN:
    // *SET *CON-A = '0103'
    // #8
    // COND:
    // §VERN_1_COM = '0065'
    // THEN:
    // *SET *CON-A = '0055'
    // #9
    // COND:
    // §VERN_1_COM='0053' OR §VR_ABB='02'
    // THEN:
    // *SET *CON-A='0055'
    // #10
    // COND:
    // §FS_TS_SMO = §SI
    // THEN:
    // *SET *NT = 'TENDA SMONTATA'
    // #11
    // COND:
    // §FS_TEN_2PZ = §SI
    // THEN:
    // *SET *NT = 'TENDA DIVISA, KIT RIVETTI'
    // #12
    // COND:
    // §FS_TS_SMO = §SI AND §FS_TS_MET = §SI
    // THEN:
    // *SET *NT = 'TENDA SMONTATA E DIVISA A META'
    // #13
    // COND:
    // §FS_COMBI_60 = §SI AND *CF = #1 AND §FS_LED_FRO = §SI AND §FS_AL_LED_T01 = §SI
    // THEN:
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('0103');
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_DIM_250') == vars.get('§SI') || vars.get('§FS_DIM_300') == vars.get('§SI') || vars.get('§FS_DIM_400') == vars.get('§SI') || vars.get('§FS_COMBI_250') == vars.get('§SI') || vars.get('§FS_COMBI_60') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_MAR_30_13') == vars.get('§SI') || vars.get('§FS_MAR_30_50') == vars.get('§SI') || vars.get('§FS_MAR_35_13') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#4
    if ((vars.get('§FS_COMBI_250') == vars.get('§SI') || vars.get('§FS_COMBI_60') == vars.get('§SI')) && vars.get('§FS_COM_ARGANO') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#5
    if (vars.get('§FS_MOT_DOP') == vars.get('§SI') && vars.getCF() == 1) {
        vars.setCF(2);
    }
    
    //#6
    if (vars.get('§VERN_1_COM') == '0055' || vars.get('§VERN_1_COM') == '0323' || vars.get('§VERN_1_COM') == '0131' || vars.get('§VERN_1_COM') == '0280' || vars.get('§VR_ABB') == '01') {
        vars.setCON_A('0055');
    }
    
    //#7
    if (vars.get('§VR_ABB') == '03') {
        vars.setCON_A('0103');
    }
    
    //#8
    if (vars.get('§VERN_1_COM') == '0065') {
        vars.setCON_A('0055');
    }
    
    //#9
    if (vars.get('§VERN_1_COM') == '0053' || vars.get('§VR_ABB') == '02') {
        vars.setCON_A('0055');
    }
    
    //#10
    if (vars.get('§FS_TS_SMO') == vars.get('§SI')) {
        vars.setNT('TENDA SMONTATA');
    }
    
    //#11
    if (vars.get('§FS_TEN_2PZ') == vars.get('§SI')) {
        vars.setNT('TENDA DIVISA, KIT RIVETTI');
    }
    
    //#12
    if (vars.get('§FS_TS_SMO') == vars.get('§SI') && vars.get('§FS_TS_MET') == vars.get('§SI')) {
        vars.setNT('TENDA SMONTATA E DIVISA A META');
    }
    
    //#13
    if (vars.get('§FS_COMBI_60') == vars.get('§SI') && vars.getCF() == 1 && vars.get('§FS_LED_FRO') == vars.get('§SI') && vars.get('§FS_AL_LED_T01') == vars.get('§SI')) {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
