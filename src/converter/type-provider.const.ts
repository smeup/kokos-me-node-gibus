import { ITypeProvider } from "./types";

/**
 * List of variables names that are numeric.
 */
const NUMERIC_VARS = [
    "§N_MODULI",
    "§NR_GAM_NOR_CEN1",
    "§NR_GAM_NOR_CEN2",
    "§L_GUI_TG1",
    "§L_GUI_TG2",
    "§FRONTALE_ANT1",
    "§N_VIE",
    "§L_SBA_ANT1",
    "§L_SPO_MON_ANT1",
    "§L_SBA_ANT2",
    "§L_SPO_MON_ANT2",
    "§L_SBA_POS1",
    "§L_SPO_MON_POS1",
    "§L_SBA_POS2",
    "§L_SPO_MON_POS2",
    "§H_ANT_M2",
    "§TS_ALT_MANTO",
    "§LARG",
    "§H_POS_M2",
    "§TS_TIPO_TETT",
    "§L_TR1_SP",
    "§L_TR2_SP",
    "§NR_MON_ANG_MAN",
    "§N_GAM_ANT_N_ANG",
    "§N_GAM_POS_N_ANG",
    "§PROLUNGA_FRONT1"
];

/**
 * Represents a type provider that provides information about the type of variables from a constant list NUMERIC_VARS.
 */
class TypeProviderConst implements ITypeProvider {

    /**
    * Checks if a given name is numeric.
    * @param name The name of the variable.
    * @returns True if the variable is a numeric type, false otherwise.
    */
    isNumericType(name: string): boolean {
        return NUMERIC_VARS.includes(name);
    }
}

export { TypeProviderConst }