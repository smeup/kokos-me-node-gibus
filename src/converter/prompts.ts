
const SAMPLE_RULES = `
###
Regola (COND, THEN, ELSE):
"""
#1
COND:
§L_CAS_SUP_TG > #0

THEN:
*SET *CON-A = §VERN_CASSONETTO
*SET *CON-B = §L_CAS_SUP_TG

ELSE:
*SET *LG=''

#2
COND:
§L_CAS_SUP_TG = §SI

THEN:
*SET *CON-A = §VERN_CASSONETTO
*SET *CON-B = §L_CAS_SUP_TG
*SET §DUMMYB1 = 'A'

ELSE:
*SET *LG=''
*SET §DUMMYN2 = 10

"""
Traduzione:
//#1
if (vars.get('§L_CAS_SUP_TG') > 0) {
    vars.setCON_A(vars.get('§VERN_CASSONETTO'));
    vars.setCON_B(vars.get('§L_CAS_SUP_TG'));
} else {
    vars.setLG('');
}
//#2
if (vars.get('§L_CAS_SUP_TG') == vars.get('§SI')) {
    vars.setCON_A(vars.get('§VERN_CASSONETTO'));
    vars.setCON_B(vars.get('§L_CAS_SUP_TG'));
    vars.DUMMYB1('A');
} else {
    vars.setLG('');
    vars.setDUMMYN2(10);
}
###

###
Regola (COND, THEN):
"""
#1
COND:
§L_CAS_SUP_TG > #0

THEN:
*SET *CON-A = §VERN_CASSONETTO
*SET *CON-B = §L_CAS_SUP_TG
"""
Traduzione:
//#1
if (vars.get('§L_CAS_SUP_TG') > 0) {
    vars.setCON_A(vars.get('§VERN_CASSONETTO'));
    vars.setCON_B(vars.get('§L_CAS_SUP_TG'));
} 
###

###
Regola (COND_AND, THEN):
"""
#1
COND:
(§L_PORTANTE2> #0 ) AND (§L_PORTANTE3 = #1,3 )  AND (§FS_FAM2_WALL=§SI)

THEN:
*SET *CF=#1
"""
Traduzione:
//#1
if ((vars.get('§L_PORTANTE2') > 0) && (vars.get('§L_PORTANTE3') == 1.3) && (vars.get('§FS_FAM2_WALL') == vars.get('§SI'))) {
    vars.setCF(1);
}
###

###
Regola (COND, ELSE):
"""
#1
COND:
§L_CAS_SUP_TG > #0

ELSE:
*SET *LG=''
"""
Traduzione:
//#1
if (vars.get('§L_CAS_SUP_TG') > 0) {
} else {
    vars.setLG("");
}
###

###
Regola (COND *VAR, ELSE):
"""
#1
COND:
*VAR > #0

ELSE:
*SET *LG=''
"""
Traduzione:
//#1
if (vars.getVAR() > 0) {
} else {
    vars.setLG("");
}
###

###
Regola (THEN, ELSE):
"""
#1
THEN:
*SET *CON-A = §VERN_CASSONETTO

ELSE:
*SET *CON-B = §L_CAS_SUP_TG
"""
Traduzione:
//#1
vars.setCON_A(vars.get('§VERN_CASSONETTO'));
vars.setCON_B(vars.get('§L_CAS_SUP_TG'));
###

###
Regola (THEN):
"""
#1
THEN:
*SET *CON-A = §VERN_CASSONETTO
"""
Traduzione:
//#1
vars.setCON_A(vars.get('§VERN_CASSONETTO'));
###

###
Regola (ELSE):
"""
#1
ELSE:
*SET *CON-A = §VERN_CASSONETTO
*SET §DUMMYN1 = [§L_FRONTALE + #2,2 + #1 + #5,5]
*SET *CF = [ #0,25 * §DUMMYN1 ]
*SET *CF = [#2 - §NR_CHI_GAM]
*SET *CON-A = *COL
"""
Traduzione:
//#1
vars.setCON_A(vars.get('§VERN_CASSONETTO'));
vars.setDUMMYN1(vars.get('§L_FRONTALE') + 2.2 + 1 + 5.5);
vars.setCF(0.25 * vars.get('§DUMMYN1'));
vars.setCF(2 - vars.get('§NR_CHI_GAM'));
vars.setCON_A(vars.getCOL());
###

###
Regola (COND, THEN §SI che sbaglia):
"""
#1
COND:
( §L_PORTANTE2 > #0 ) AND ( §FS_FAM2_WALL=§SI ) AND ( §FS_FAM2_165=§SI )

THEN:
SET *CF=#1
"""
Traduzione:
//#1
if ((vars.get('§L_PORTANTE2') > 0) && (vars.get('§FS_FAM2_WALL') == vars.get('§SI')) && (vars.get('§FS_FAM2_165') == vars.get('§SI'))) {
    vars.setCF(1);
}
###

###
Regola vuota:
"""
#1
"""
Traduzione:
//#1
// Empty rule
###

###
"""
// #1
// COND:
// §FS_SPA_75 = §SI AND #1 = #2
// THEN:
// *SET *CF = #1
"""
Traduzione:
//#1
if ((vars.get('§FS_SPA_75') == vars.get('§SI')) && (false)) {
    vars.setCF(1);
}
###
`;

const SYSTEM_MESSAGE = `
Sei un traduttore di regole da grammatica proprietaria a javascript.
L'utente ti passerà la regola da tradurre in questo formato:
"""
#REGOLA_DA_TRADURRE
"""
Per ottenere la risposta consulta gli esempi racchiusi tra ###

La risposta deve essere:
<regola_tradotta_solo_codice_javascript>

${SAMPLE_RULES}
`;

export { SYSTEM_MESSAGE }