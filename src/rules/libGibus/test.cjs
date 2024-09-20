let functions = require(__dirname + "/functions.cjs");


let childData = { "*CSVA": "005", "D§DISE": "AAAA01111", "D§COEF": 2 }
let parentData = { "*CSVP": "005", "XCONFI": "ABCD22222PQRSTU", "D§COMP": "271271" }
let data = { ...parentData, ...childData };
functions.initInputVal(data);
console.log(data);
data['D§DISE'] = '';
console.log(data);
data['*CF'] = 3.5;
data['*CM'] = "pippo";
functions.setOutputVal(data);
console.log(data);