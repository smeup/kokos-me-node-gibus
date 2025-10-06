/**
 * Main function to convert rules using the RuleConverterAppExamples class.
 * @returns {Promise<void>} A promise that resolves when the rules are converted.
 * @see RuleConverterAppExamples
 */
import { RuleConverterAppExamples } from "./app.examples";

(async () => {
  const rulesFileNameIndex = process.argv.indexOf("--ruleFileName");
  let rulesFileName;
  if (rulesFileNameIndex === -1) {
    throw new Error("The --ruleFileName argument is required");
  } else {
    rulesFileName = process.argv[rulesFileNameIndex + 1];
  }
  const app = new RuleConverterAppExamples({
    deleteLogFiles: false,
    rulesFileName: rulesFileName,
  });
  await app.convertRules();
})();
