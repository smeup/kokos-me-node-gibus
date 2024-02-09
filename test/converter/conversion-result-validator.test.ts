import { SyntaxErrorValidator } from "../../src/converter/conversion-result-validator";
import { ConversionResult } from "../../src/converter/types";
import * as fs from 'fs';
import * as path from 'path';

afterAll(() => {
    fs.rmSync(path.resolve(process.cwd(), "src", "rules", "TESTOK.ts"), { force: true });
    fs.rmSync(path.resolve(process.cwd(), "src", "rules", "TESTKO.ts"), { force: true });
});


describe("SyntaxErrorValidator", () => {
    it("should validate a conversion result without throwing an error", () => {

        // Arrange
        const validator = new SyntaxErrorValidator();
        const result: ConversionResult = {
            ruleId: "TESTOK",
            javaScript: `
            import { Rule } from "../types/general.js";
            import { Variables } from "../converter/variables.js";

            export const TESTOK: Rule = (iv) => {

                const vars = new Variables(iv);

                if (vars.get('§L_PORTANTE2') > 0) {
                } else {
                    vars.setLG("");
                }

                return vars.output;
            };
            `,
        };

        // Act & Assert
        expect(() => validator.validateConversionResult(result)).not.toThrow();
    });

    it("should throw an error when a syntax error is detected in the conversion result", () => {
        // Arrange
        const validator = new SyntaxErrorValidator();
        const result: ConversionResult = {
            ruleId: "TESTKO",
            javaScript: `
            import { Rule } from "../types/general.js";
            import { Variables } from "../converter/variables.js";

            export const TESTKO: Rule = (iv) => {

                const vars = new Variables(iv);

                // Missing close parenthesis!!!
                if (vars.get('§L_PORTANTE2') > 0 {
                } else {
                    vars.setLG("");
                }

                return vars.output;
            };
            `,
        };

        // Act & Assert
        expect(() => validator.validateConversionResult(result)).toThrow();
    });
});