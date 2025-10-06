import { ChatOpenAI } from "@langchain/openai";
import { SystemMessage, HumanMessage } from "@langchain/core/messages";
import { Condition, ConversionResult, IRuleConverterService, Rule } from "./types";
import { SYSTEM_MESSAGE } from "./prompts";

class OpenAIRuleConverter implements IRuleConverterService {
   
    constructor() {
    }

    async convertRule(rule: Rule, modelName: string = "gpt-3.5-turbo"): Promise<ConversionResult> {
        const openai = new ChatOpenAI(
            {
                openAIApiKey: process.env.OPENAI_API_KEY,
                modelName: modelName,
                temperature: 0
            }
        );
        const payloadSentToLLM = this.transformRuleToText(rule);
        const commentedPayloadSentToLLM = `// REQUEST:\n// ${this.insertStringAfterNewLine(payloadSentToLLM, "// ")}\n// RESPONSE:`;
        const messages = [new SystemMessage({ content: SYSTEM_MESSAGE }), new HumanMessage({ content: payloadSentToLLM })];
        const result = await openai.predictMessages(messages)
        const messageContent = `// RULE: ${rule.id}\n${commentedPayloadSentToLLM}\n${result.content.toString().trim().replace(/^###|^Traduzione:/gm, "")}`;
        return new ConversionResult(rule.id, messageContent);
    };


    transformRuleToText(rule: Rule): string {
        return this.removeSpacesAfterNewline(`
        """
        ${rule.conditions.map((condition, index) => `#${index + 1}\n${this.transformConditionToText(condition)}`).join("\n")}
        """
        `);
    }


    transformConditionToText(condition: Condition): string {
        return this.removeSpacesAfterNewline(`
        ${condition.ifCondition.trim().length > 0 ? `COND:\n${condition.ifCondition}` : ""}
        ${condition.thenCondition.trim().length > 0 ? `THEN:\n${this.splitBranch(condition.thenCondition)}` : ""}
        ${condition.elseCondition.trim().length > 0 ? `ELSE:\n${this.splitBranch(condition.elseCondition)}` : ""}
        `);
    }

    private splitBranch(input: string): string {
        const chuncks: string[] = (input.match(new RegExp(`.{1,125}`, "g")) || [])
        const trimmmedChuncks = chuncks.map((chunck) => chunck.trim());
        return trimmmedChuncks.join("\n");
    }

    private removeSpacesAfterNewline(input: string): string {
        return input.replace(/\n\s+/g, "\n").trim();
    }

    private insertStringAfterNewLine(input: string, stringToInsert: string): string {
        return input.replace(/\n/g, "\n" + stringToInsert);
    }

}

export { OpenAIRuleConverter }

