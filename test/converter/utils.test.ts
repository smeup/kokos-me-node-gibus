import { removeUnnecessaryChars } from "../../src/converter/utils";

describe("removeUnnecessaryChars", () => {
    it("should remove unnecessary characters from code", () => {
        // define input
        const code = `
            // This is a comment
            const a = 5;
            const b = 10;
        `;

        // call function
        const result = removeUnnecessaryChars(code);

        // check values
        expect(result).toBe("const a = 5; const b = 10;");
    });

    it("should remove unnecessary characters and trim whitespace", () => {
        // define input
        const code = `
            // This is a comment
            const a     = 5;
            const b = 10;
        `;

        // call function
        const result = removeUnnecessaryChars(code);

        // check values
        expect(result).toBe("const a = 5; const b = 10;");
    });
});