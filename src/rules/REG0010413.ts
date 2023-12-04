import { Rule } from "../types/general";

export const REG0010413: Rule = (variables) => {
  let D_COEF = "0";
  var FS_FAM2_CLI_ZIP = variables["§FS_FAM2_CLI_ZIP"];
  var FS_FAM2_CLI_TWI = variables["§FS_FAM2_CLI_TWI"];
  var FS_CLI_TWI_BG = variables["§FS_CLI_TWI_BG"];
  var MANUALE_CE = variables["§MANUALE_CE"];
  if (FS_FAM2_CLI_ZIP == "SI") {
    D_COEF = "1";
  }
  if (FS_FAM2_CLI_TWI == "SI") {
    D_COEF = "0";
  }
  if (FS_CLI_TWI_BG == "SI") {
    D_COEF = "0";
  }
  if (MANUALE_CE == "") {
    D_COEF = "0";
  }
  return {
    "D§COEF": D_COEF,
  };
};
