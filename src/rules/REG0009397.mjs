import { defZero } from "./utils/util.mjs";

(function (params, context) {
  //la require non funziona
  //let defZero = require('./utils/util.mjs').defZero;
  //console.log(params.get("variables").asString().getValue());
  var iv = JSON.parse(
    params.get("variables").asString().getValue()
  );

  let qty = 0;
  let CON_A = '';
  let CON_B = '';
  let dise = '';

  let index = parseInt(iv["D§USR2"]);

  let largM1 = parseFloat(iv["§LARG_M1"]);
  let largM2 = defZero(parseFloat(iv["§LARG_M2"]));
  let largM3 = defZero(parseFloat(iv["§LARG_M3"]));
  let sbalzoSx = defZero(parseFloat(iv["§SBALZO_SX"]));
  let sbalzoDx = defZero(parseFloat(iv["§SBALZO_DX"]));
  let famLuce = (iv["§FS_FAM2_LUCE"] === 'SI');
  let pteLuce = (iv["§FS_PTE_LUC"] === 'SI');
  let luce = (famLuce || pteLuce);
  let lMaxFrangi = 700;
  let nModuli = parseInt(iv["§N_MODULI"]);
  let nDivFra = 1;
 //let frangiTotale = largM1 + largM2 + largM3 - 2 + sbalzoSx  + 3.2 ;
  
   let frangiTotale = largM1 + largM2 + largM3 - 2 + sbalzoSx - 3.2 + sbalzoDx - 3.2;
  
   
   let frangiList = [0];
   let tgGroLuc = 0;
 
   if (luce) {
     tgGroLuc = largM1 + largM2 + largM3 + 5.6 + sbalzoDx - 3.2 + sbalzoSx - 3.2;
   }
 
   let pteDiviso = (iv["§FS_MED_DIV"] === 'SI');
   tgGroLuc > lMaxFrangi ? pteDiviso = true : null;
   frangiTotale > lMaxFrangi ? pteDiviso = true : null;

   if (pteDiviso) {
     nDivFra = nModuli;
   }

   nDivFra === 1 ? frangiList.push(frangiTotale) : null;
   nDivFra > 1 & [2, 3].includes(nModuli) ? frangiList.push(largM1 - 2 + sbalzoSx - 3.2) : null;
   
   nDivFra >= 2 & nModuli === 2 ? frangiList.push(largM2 - 2 + sbalzoDx - 3.2) : null;
   nDivFra >= 2 & nModuli === 3 ? frangiList.push(largM2 - 2) : null;
 
   nDivFra >= 2 & nModuli === 3 ? frangiList.push(largM3 - 2 + sbalzoDx - 3.2) : null;

   if (frangiList[index]) {
     qty = 1;
     CON_A = iv["§VERN_FRANGI"];
     CON_B = frangiList[index] * 10;
     dise = CON_A + CON_B.toString().replace('.', '').padStart(5, '0') + iv["§_CF"];
   }else{
    dise = 'undefined';
   }
 
  // build result
  var variables = {
    "D§COEF": qty
    , "D§DISE": dise
    , "D§NOTA": frangiTotale
  };
  

  var StringValue = Java.type("com.smeup.rpgparser.interpreter.StringValue");
  var outputVariables = new StringValue(JSON.stringify(variables), true);
  params.put("variables", outputVariables);
});

  //

