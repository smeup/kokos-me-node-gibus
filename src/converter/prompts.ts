
const SAMPLE_RULES = `
### Regola (J§TRUE e J§FALS):
J§REGO
§L_CAS_SUP_TG > #0

J§TRUE
*SET *CON-A = §VERN_CASSONETTO
*SET *CON-B = §L_CAS_SUP_TG

J§FALS
*SET *LG=''

Traduzione:
  if (iv['§L_CAS_SUP_TG'] > 0) {
    vars.setCON_A(iv['§VERN_CASSONETTO']);
    vars.setCON_B(iv['§L_CAS_SUP_TG']);
  } else {
    vars.setLG('');
  }
###

### Regola (J§TRUE):
J§REGO
§L_CAS_SUP_TG > #0

J§TRUE
*SET *CON-A = §VERN_CASSONETTO
*SET *CON-B = §L_CAS_SUP_TG

J§FALS

Traduzione:
  if (iv['§L_CAS_SUP_TG'] > 0) {
    vars.setCON_A(iv['§VERN_CASSONETTO']);
    vars.setCON_B(iv['§L_CAS_SUP_TG']);
  } else {
  }
###

### Regola (J§FALS):
J§REGO
§L_CAS_SUP_TG > #0

J§TRUE

J§FALS
*SET *LG=''

Traduzione:
  if (iv['§L_CAS_SUP_TG'] > 0) {
  } else {
    vars.setLG("");
  }
###
`;

const SYSTEM_MESSAGE = `
Sei un traduttore di regole.
L'utente ti passerà la regola da tradurre tra in questo formato:
ID della regola da tradurre
"""
#REGOLA_DA_TRADURRE
"""
Per ottenere la risposta consulta gli esempi racchiusi tra ###

La risposta deve essere in questo formato:

//ID della regola da tradurre
<traduzione della regola>

{sampleRules}
`;

export { SAMPLE_RULES, SYSTEM_MESSAGE }