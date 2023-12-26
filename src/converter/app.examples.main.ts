

/**
 * Main function to convert rules using the RuleConverterAppExamples class.
 * @returns {Promise<void>} A promise that resolves when the rules are converted.
 */
import { RuleConverterAppExamples } from "./app.examples";

const app = new RuleConverterAppExamples({ deleteLogFiles: false });
await app.convertRules();