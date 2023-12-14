
import { Variables } from "../../src/converter/variables"

describe("Variables", () => {
    let variables: Variables;

    beforeEach(() => {
        const ruleVariableMap = {
            "D§COMP": "COMP_VALUE",
            "XCONFI": "XCONFI_VALUE",
            "D§NOTA": "NOTA_VALUE",
            "D§QUA1": "QUA1_VALUE",
            "D§QUA2": "QUA2_VALUE",
            "D§QUA3": "QUA3_VALUE",
            "D§QUA4": "QUA4_VALUE",
            "D§QUA5": "QUA5_VALUE",
            "D§USR1": "USR1_VALUE",
            "D§USR2": "USR2_VALUE"
        };

        variables = new Variables(ruleVariableMap);
    });

    it("should return the correct CF value", () => {
        const result = variables.getCF();
        expect(result).toBe("1");
    });

    it("should return the correct CM value", () => {
        const result = variables.getCM();
        expect(result).toBe("COMP_VALUE");
    });

    it("should return the correct COL value", () => {
        const result = variables.getCOL();
        expect(result).toBe("XCON");
    });

    it("should return the correct CON_A value", () => {
        const result = variables.getCON_A();
        expect(result).toBe("XCON");
    });

    it("should return the correct CON_B value", () => {
        const result = variables.getCON_B();
        expect(result).toBe("FI_VA");
    });

    it("should return the correct LG value", () => {
        const result = variables.getLG();
        expect(result).toBe("");
    });

    it("should return the correct NT value", () => {
        const result = variables.getNT();
        expect(result).toBe("NOTA_VALUE");
    });

    it("should return the correct Q1 value", () => {
        const result = variables.getQ1();
        expect(result).toBe("QUA1_VALUE");
    });

    it("should return the correct Q2 value", () => {
        const result = variables.getQ2();
        expect(result).toBe("QUA2_VALUE");
    });

    it("should return the correct Q3 value", () => {
        const result = variables.getQ3();
        expect(result).toBe("QUA3_VALUE");
    });

    it("should return the correct Q4 value", () => {
        const result = variables.getQ4();
        expect(result).toBe("QUA4_VALUE");
    });

    it("should return the correct Q5 value", () => {
        const result = variables.getQ5();
        expect(result).toBe("QUA5_VALUE");
    });

    it("should return the correct S1 value", () => {
        const result = variables.getS1();
        expect(result).toBe("USR1_VALUE");
    });

    it("should return the correct S2 value", () => {
        const result = variables.getS2();
        expect(result).toBe("USR2_VALUE");
    });

    it("should return the correct LUNG value", () => {
        const result = variables.getLUNG();
        expect(result).toBe("FI_VA");
    });

    it("should set the CF value correctly", () => {
        variables.setCF("NEW_CF_VALUE");
        expect(variables.output["D§COEF"]).toBe("NEW_CF_VALUE");
    });

    it("should set the CM value correctly", () => {
        variables.setCM("NEW_CM_VALUE");
        expect(variables.output["D§COMP"]).toBe("NEW_CM_VALUE");
    });

    it("should set the CON_A value correctly", () => {
        variables.setCON_A("NEW_CON_A_VALUE");
        expect(variables.output["D§DISE"]).toBe("NEW_     ");
    });

    it("should set the CON_B value correctly", () => {
        variables.setCON_B("NEW_CON_B_VALUE");
        expect(variables.output["D§DISE"]).toBe("    NEW_CON_B_VALUE");
    });

    it("should set the LG value correctly", () => {
        variables.setLG("NEW_LG_VALUE");
        expect(variables.output["XFVALI"]).toBe("NEW_LG_VALUE");
    });

    it("should set the NT value correctly", () => {
        variables.setNT("NEW_NT_VALUE");
        expect(variables.output["D§NOTA"]).toBe("NEW_NT_VALUE");
    });

    it("should set the Q1 value correctly", () => {
        variables.setQ1("NEW_Q1_VALUE");
        expect(variables.output["D§QUA1"]).toBe("NEW_Q1_VALUE");
    });

    it("should set the Q2 value correctly", () => {
        variables.setQ2("NEW_Q2_VALUE");
        expect(variables.output["D§QUA2"]).toBe("NEW_Q2_VALUE");
    });

    it("should set the Q3 value correctly", () => {
        variables.setQ3("NEW_Q3_VALUE");
        expect(variables.output["D§QUA3"]).toBe("NEW_Q3_VALUE");
    });

    it("should set the Q4 value correctly", () => {
        variables.setQ4("NEW_Q4_VALUE");
        expect(variables.output["D§QUA4"]).toBe("NEW_Q4_VALUE");
    });

    it("should set the Q5 value correctly", () => {
        variables.setQ5("NEW_Q5_VALUE");
        expect(variables.output["D§QUA5"]).toBe("NEW_Q5_VALUE");
    });

    it("should set the USR1 value correctly", () => {
        variables.setUSR1("NEW_USR1_VALUE");
        expect(variables.output["D§USR1"]).toBe("NEW_USR1_VALUE");
    });

    it("should set the USR2 value correctly", () => {
        variables.setUSR2("NEW_USR2_VALUE");
        expect(variables.output["D§USR2"]).toBe("NEW_USR2_VALUE");
    });
});