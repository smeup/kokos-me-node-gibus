
import { Variables } from "../../src/converter/variables"


describe("Variables", () => {
  let variables: Variables;

  beforeEach(() => {
    // Initialize the Variables instance with some input data
    const input = {
      "D§QUA1": 10,
      "D§QUA2": 20,
      "D§QUA3": 30,
      "D§QUA4": 40,
      "D§QUA5": 50,
      "D§COMP": "COMP_VALUE",
      "XCONFI": "XCON00001LUE",
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
    expect(variables.get("XCONFI")).toBe("XCON00001LUE");
    expect(variables.get("D§NOTA")).toBe("NOTA_VALUE");
    expect(variables.get("D§USR1")).toBe("USR1_VALUE");
    expect(variables.get("D§USR2")).toBe("USR2_VALUE");
  });

  it("should retrieve the CF value", () => {
    expect(variables.getCF()).toBe(1);
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

  it("should retrieve the number related to the characters from 4 to 9 included of XCONFI property", () => {
    expect(variables.getCON_B()).toBe(1);
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
    expect(variables.getLUNG()).toBe(1);
  });

  it("should set the value of D§COMP", () => {
    variables.setCM("NEW_COMP_VALUE");
    expect(variables.output["D§COMP"]).toBe("NEW_COMP_VALUE");
  });

  it("should set the value of D§DISE (first four chars)", () => {
    variables.setCON_A("AAAA");
    expect(variables.output["D§DISE"]).toBe("AAAA00000");
    expect(variables.output["*CON-A"]).toBe("AAAA");
  });

  it("setCON_A with undefined value", () => {
    variables.setCON_A(variables.output["UNDEFINED"]);
    expect(variables.output["D§DISE"]).toBe("    00000");
    expect(variables.output["*CON-A"]).toBe("    ");
  });

  it("should set the value of D§DISE (last five chars)", () => {
    variables.setCON_B(12);
    expect(variables.output["D§DISE"]).toBe("    00120");
    expect(variables.output["*CON-B"]).toBe(12);
  });

  it("setCON_B with undefined value", () => {
    variables.setCON_B(variables.output["UNDEFINED"]);
    expect(variables.output["D§DISE"]).toBe("    00000");
    expect(variables.output["*CON-B"]).toBe(0);
  });

  it("should set the value of §DUMMYN1", () => {
    variables.setDUMMYN1(1);
    expect(variables.get("§DUMMYN1")).toBe(1);
  });

  it("should set the value of §DUMMYN2", () => {
    variables.setDUMMYN2(2);
    expect(variables.get("§DUMMYN2")).toBe(2);
  });

  it("should set the value of §DUMMYN3", () => {
    variables.setDUMMYN3(3);
    expect(variables.get("§DUMMYN3")).toBe(3);
  });

  it("should set the value of §DUMMYN4", () => {
    variables.setDUMMYN4(4);
    expect(variables.get("§DUMMYN4")).toBe(4);
  });

  it("should set the value of §DUMMYN5", () => {
    variables.setDUMMYN5(5);
    expect(variables.get("§DUMMYN5")).toBe(5);
  });

  it("should set the value of §DUMMYB1", () => {
    variables.setDUMMYB1("DUMMYB1_VALUE");
    expect(variables.get("§DUMMYB1")).toBe("DUMMYB1_VALUE");
  });

  it("should set the value of §DUMMYB2", () => {
    variables.setDUMMYB2("DUMMYB2_VALUE");
    expect(variables.get("§DUMMYB2")).toBe("DUMMYB2_VALUE");
  });

  it("should set the value of §DUMMYB3", () => {
    variables.setDUMMYB3("DUMMYB3_VALUE");
    expect(variables.get("§DUMMYB3")).toBe("DUMMYB3_VALUE");
  });

  it("should set the value of §DUMMYB4", () => {
    variables.setDUMMYB4("DUMMYB4_VALUE");
    expect(variables.get("§DUMMYB4")).toBe("DUMMYB4_VALUE");
  });

  it("should set the value of §DUMMYB5", () => {
    variables.setDUMMYB5("DUMMYB5_VALUE");
    expect(variables.get("§DUMMYB5")).toBe("DUMMYB5_VALUE");
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

  it("test *S1='AAA'", () => {
    variables.setS1('AAA');
    expect(variables.output["D§USR1"]).toBe('AAA');
  });

  it("test*S1=0", () => {
    variables.setS1(0);
    expect(variables.output["D§USR1"]).toBe(0);
  });

  it("test *S1=1", () => {
    variables.setS1(1);
    expect(variables.output["D§USR1"]).toBe(10);
  });

  it("test *S2='AAA'", () => {
    variables.setS2('AAA');
    expect(variables.output["D§USR2"]).toBe('AAA');
  });

  it("test *S2=0", () => {
    variables.setS2(0);
    expect(variables.output["D§USR2"]).toBe(0);
  });

  it("test *S2=1", () => {
    variables.setS2(1);
    expect(variables.output["D§USR2"]).toBe(10);
  });


});

describe("Get variables starts with *", () => {
  let variables: Variables;
  beforeEach(() => {
    variables = new Variables({})
  });

  it("should retrieve the value of *CF", () => {
    variables.setCF(1);
    expect(variables.get("*CF")).toBe(1);
  });

  it("should retrieve the value of *CM", () => {
    variables.setCM(1);
    expect(variables.get("*CM")).toBe(1);
  });

  it("should retrieve the value of *CON-A", () => {
    variables.setCON_A("1");
    expect(variables.get("*CON-A")).toBe("1");
  });

  it("should retrieve the value of *CON-B", () => {
    variables.setCON_B(1);
    expect(variables.get("*CON-B")).toBe(1);
  });

  it("Default value for §DUMMYA", () => {
    expect(variables.get("§DUMMYA1")).toBe("");
    expect(variables.get("§DUMMYA2")).toBe("");
    expect(variables.get("§DUMMYA3")).toBe("");
    expect(variables.get("§DUMMYA4")).toBe("");
    expect(variables.get("§DUMMYA5")).toBe("");
    expect(variables.get("§DUMMYA6")).toBe("");
    expect(variables.get("§DUMMYA7")).toBe("");
    expect(variables.get("§DUMMYA8")).toBe("");
    expect(variables.get("§DUMMYA9")).toBe("");
  });

  it("Default value for §DUMMYB", () => {
    expect(variables.get("§DUMMYB1")).toBe("");
    expect(variables.get("§DUMMYB2")).toBe("");
    expect(variables.get("§DUMMYB3")).toBe("");
    expect(variables.get("§DUMMYB4")).toBe("");
    expect(variables.get("§DUMMYB5")).toBe("");
    expect(variables.get("§DUMMYB6")).toBe("");
    expect(variables.get("§DUMMYB7")).toBe("");
    expect(variables.get("§DUMMYB8")).toBe("");
    expect(variables.get("§DUMMYB9")).toBe("");
  });

  it("Default value for §DUMMYN", () => {
    expect(variables.get("§DUMMYN1")).toBe(0);
    expect(variables.get("§DUMMYN2")).toBe(0);
    expect(variables.get("§DUMMYN3")).toBe(0);
    expect(variables.get("§DUMMYN4")).toBe(0);
    expect(variables.get("§DUMMYN5")).toBe(0);
    expect(variables.get("§DUMMYN6")).toBe(0);
    expect(variables.get("§DUMMYN7")).toBe(0);
    expect(variables.get("§DUMMYN8")).toBe(0);
    expect(variables.get("§DUMMYN9")).toBe(0);
  });

});