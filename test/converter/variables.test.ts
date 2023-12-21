
import { Variables } from "../../src/converter/variables"


describe("Variables", () => {
  let variables: Variables;

  beforeEach(() => {
    // Initialize the Variables instance with some input data
    const input = {
      "D§QUA1": "10",
      "D§QUA2": "20",
      "D§QUA3": "30",
      "D§QUA4": "40",
      "D§QUA5": "50",
      "D§COMP": "COMP_VALUE",
      "XCONFI": "XCONFI_VALUE",
      "D§NOTA": "NOTA_VALUE",
      "D§USR1": "USR1_VALUE",
      "D§USR2": "USR2_VALUE"
    };
    variables = new Variables(input);
  });

  it("should retrieve the value of input variables", () => {
    expect(variables.get("D§QUA1")).toBe(10);
    expect(variables.get("D§QUA2")).toBe(20);
    expect(variables.get("D§QUA3")).toBe(30);
    expect(variables.get("D§QUA4")).toBe(40);
    expect(variables.get("D§QUA5")).toBe(50);
    expect(variables.get("D§COMP")).toBe("COMP_VALUE");
    expect(variables.get("XCONFI")).toBe("XCONFI_VALUE");
    expect(variables.get("D§NOTA")).toBe("NOTA_VALUE");
    expect(variables.get("D§USR1")).toBe("USR1_VALUE");
    expect(variables.get("D§USR2")).toBe("USR2_VALUE");
  });

  it("should retrieve the CF value", () => {
    expect(variables.getCF()).toBe("1");
  });

  it("should retrieve the value of D§COMP input", () => {
    expect(variables.getCM()).toBe("COMP_VALUE");
  });

  it("should retrieve the first four characters of XCONFI property", () => {
    expect(variables.getCOL()).toBe("XCON");
  });

  it("should retrieve the value of CON_A (same as COL)", () => {
    expect(variables.getCON_A()).toBe("XCON");
  });

  it("should retrieve the last five characters of XCONFI property", () => {
    expect(variables.getCON_B()).toBe("FI_VA");
  });

  it("should retrieve an empty string for LG", () => {
    expect(variables.getLG()).toBe("");
  });

  it("should retrieve the value of D§NOTA input", () => {
    expect(variables.getNT()).toBe("NOTA_VALUE");
  });

  it("should retrieve the value of D§QUA1 input", () => {
    expect(variables.getQ1()).toBe(10);
  });

  it("should retrieve the value of D§QUA2 input", () => {
    expect(variables.getQ2()).toBe(20);
  });

  it("should retrieve the value of D§QUA3 input", () => {
    expect(variables.getQ3()).toBe(30);
  });

  it("should retrieve the value of D§QUA4 input", () => {
    expect(variables.getQ4()).toBe(40);
  });

  it("should retrieve the value of D§QUA5 input", () => {
    expect(variables.getQ5()).toBe(50);
  });

  it("should retrieve the value of D§USR1 input", () => {
    expect(variables.getS1()).toBe("USR1_VALUE");
  });

  it("should retrieve the value of D§USR2 input", () => {
    expect(variables.getS2()).toBe("USR2_VALUE");
  });

  it("should retrieve the value of CON_B (same as getCON_B)", () => {
    expect(variables.getLUNG()).toBe("FI_VA");
  });

  it("should set the value of D§COEF", () => {
    variables.setCF("COEF_VALUE");
    expect(variables.output["D§COEF"]).toBe("COEF_VALUE");
  });

  it("should set the value of D§COMP", () => {
    variables.setCM("NEW_COMP_VALUE");
    expect(variables.output["D§COMP"]).toBe("NEW_COMP_VALUE");
  });

  it("should set the value of D§DISE (first four chars)", () => {
    variables.setCON_A("NEW_CON_A_VALUE");
    expect(variables.output["D§DISE"]).toBe("NEW_     ");
  });

  it("should set the value of D§DISE (last five chars)", () => {
    variables.setCON_B("NEW_CON_B_VALUE");
    expect(variables.output["D§DISE"]).toBe("    NEW_CON_B_VALUE");
  });

  it("should set the value of §DUMMYN1", () => {
    variables.setDUMMYN1("DUMMYN1_VALUE");
    expect(variables.output["§DUMMYN1"]).toBe("DUMMYN1_VALUE");
  });

  it("should set the value of §DUMMYN2", () => {
    variables.setDUMMYN2("DUMMYN2_VALUE");
    expect(variables.output["§DUMMYN2"]).toBe("DUMMYN2_VALUE");
  });

  it("should set the value of §DUMMYN3", () => {
    variables.setDUMMYN3("DUMMYN3_VALUE");
    expect(variables.output["§DUMMYN3"]).toBe("DUMMYN3_VALUE");
  });

  it("should set the value of §DUMMYN4", () => {
    variables.setDUMMYN4("DUMMYN4_VALUE");
    expect(variables.output["§DUMMYN4"]).toBe("DUMMYN4_VALUE");
  });

  it("should set the value of §DUMMYN5", () => {
    variables.setDUMMYN5("DUMMYN5_VALUE");
    expect(variables.output["§DUMMYN5"]).toBe("DUMMYN5_VALUE");
  });

  it("should set the value of §DUMMYB1", () => {
    variables.setDUMMYB1("DUMMYB1_VALUE");
    expect(variables.output["§DUMMYB1"]).toBe("DUMMYB1_VALUE");
  });

  it("should set the value of §DUMMYB2", () => {
    variables.setDUMMYB2("DUMMYB2_VALUE");
    expect(variables.output["§DUMMYB2"]).toBe("DUMMYB2_VALUE");
  });

  it("should set the value of §DUMMYB3", () => {
    variables.setDUMMYB3("DUMMYB3_VALUE");
    expect(variables.output["§DUMMYB3"]).toBe("DUMMYB3_VALUE");
  });

  it("should set the value of §DUMMYB4", () => {
    variables.setDUMMYB4("DUMMYB4_VALUE");
    expect(variables.output["§DUMMYB4"]).toBe("DUMMYB4_VALUE");
  });

  it("should set the value of §DUMMYB5", () => {
    variables.setDUMMYB5("DUMMYB5_VALUE");
    expect(variables.output["§DUMMYB5"]).toBe("DUMMYB5_VALUE");
  });

  it("should set the value of XFVALI (empty string)", () => {
    variables.setLG("");
    expect(variables.output["XFVALI"]).toBe("");
  });

  it("should set the value of XFVALI (non-empty string)", () => {
    variables.setLG("LG_VALUE");
    expect(variables.output["XFVALI"]).toBe("LG_VALUE");
  });

  it("should set the value of D§NOTA", () => {
    variables.setNT("NEW_NOTA_VALUE");
    expect(variables.output["D§NOTA"]).toBe("NEW_NOTA_VALUE");
  });

  it("should set the value of D§QUA1", () => {
    variables.setQ1(100);
    expect(variables.output["D§QUA1"]).toBe(100);
  });

  it("should set the value of D§QUA2", () => {
    variables.setQ2(200);
    expect(variables.output["D§QUA2"]).toBe(200);
  });

  it("should set the value of D§QUA3", () => {
    variables.setQ3(300);
    expect(variables.output["D§QUA3"]).toBe(300);
  });

  it("should set the value of D§QUA4", () => {
    variables.setQ4(400);
    expect(variables.output["D§QUA4"]).toBe(400);
  });

  it("should set the value of D§QUA5", () => {
    variables.setQ5(500);
    expect(variables.output["D§QUA5"]).toBe(500);
  });

  it("should set the value of D§USR1", () => {
    variables.setUSR1("NEW_USR1_VALUE");
    expect(variables.output["D§USR1"]).toBe("NEW_USR1_VALUE");
  });

  it("should set the value of D§USR2", () => {
    variables.setUSR2("NEW_USR2_VALUE");
    expect(variables.output["D§USR2"]).toBe("NEW_USR2_VALUE");
  });
});