
const SAMPLE_RULES = `
###
Regola (COND, THEN, ELSE):
"""
COND:
§L_CAS_SUP_TG > #0

THEN:
*SET *CON-A = §VERN_CASSONETTO
*SET *CON-B = §L_CAS_SUP_TG

ELSE:
*SET *LG=''
"""
Traduzione:
if (iv['§L_CAS_SUP_TG'] > 0) {
    vars.setCON_A(iv['§VERN_CASSONETTO']);
    vars.setCON_B(iv['§L_CAS_SUP_TG']);
} else {
    vars.setLG('');
}
###

###
Regola (COND, THEN):
"""
COND:
§L_CAS_SUP_TG > #0

THEN:
*SET *CON-A = §VERN_CASSONETTO
*SET *CON-B = §L_CAS_SUP_TG
"""
Traduzione:
if (iv['§L_CAS_SUP_TG'] > 0) {
    vars.setCON_A(iv['§VERN_CASSONETTO']);
    vars.setCON_B(iv['§L_CAS_SUP_TG']);
} 
###

###
Regola (COND, ELSE):
"""
COND:
§L_CAS_SUP_TG > #0

ELSE:
*SET *LG=''
"""
Traduzione:
if (iv['§L_CAS_SUP_TG'] > 0) {
} else {
    vars.setLG("");
}
###

###
Regola (THEN, ELSE):
"""
THEN:
*SET *CON-A = §VERN_CASSONETTO

ELSE:
*SET *CON-B = §L_CAS_SUP_TG
"""
Traduzione:
vars.setCON_A(iv['§VERN_CASSONETTO']);
vars.setCON_B(iv['§L_CAS_SUP_TG']);
###

###
Regola (THEN):
"""
THEN:
*SET *CON-A = §VERN_CASSONETTO
"""
Traduzione:
vars.setCON_A(iv['§VERN_CASSONETTO']);
###

###
Regola (ELSE):
"""
ELSE:
*SET *CON-A = §VERN_CASSONETTO
"""
Traduzione:
vars.setCON_A(iv['§VERN_CASSONETTO']);
###
`;

const SYSTEM_MESSAGE = `
Sei un traduttore di regole.
L'utente ti passerà la regola da tradurre tra in questo formato:
"""
#REGOLA_DA_TRADURRE
"""
Per ottenere la risposta consulta gli esempi racchiusi tra ###

La risposta deve essere in questo formato:
Traduzione:

Se non riesci a tradurre la regola devi rispondere KO


${SAMPLE_RULES}
`;

export { SYSTEM_MESSAGE }