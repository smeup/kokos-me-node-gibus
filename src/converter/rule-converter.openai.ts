import { ChatOpenAI } from "langchain/chat_models/openai";
import { SystemMessage, HumanMessage } from "langchain/schema";
import { Condition, ConversionResult, IRuleConverterService, Rule } from "./types";
import { PromptTemplate } from "langchain/prompts";
import { SYSTEM_MESSAGE } from "./prompts";

class OpenAIRuleConverter implements IRuleConverterService {

    constructor() {
    }

    async convertRule(rule: Rule): Promise<ConversionResult> {
        const openai = new ChatOpenAI(
            {
                openAIApiKey: process.env.OPENAI_API_KEY,
                modelName: "gpt-3.5-turbo",
                temperature: 0
            }
        );
        const payloadSentToLLM = this.transformRuleToText(rule);
        const commentedPayloadSentToLLM = `// REQUEST:\n// ${this.insertStringAfterNewLine(payloadSentToLLM, "// ")}\n// RESPONSE:`;
        const messages = [new SystemMessage({ content: SYSTEM_MESSAGE }), new HumanMessage({ content: payloadSentToLLM })];
        const result = await openai.predictMessages(messages)
        const messageContent = `// RULE: ${rule.id}\n${commentedPayloadSentToLLM}\n${result.content.toString().trim()}`;
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
        ${condition.thenCondition.trim().length > 0 ? `THEN:\n${condition.thenCondition}` : ""}
        ${condition.elseCondition.trim().length > 0 ? `ELSE:\n${condition.elseCondition}` : ""}
        `);
    }

    private removeSpacesAfterNewline(input: string): string {
        return input.replace(/\n\s+/g, "\n").trim();
    }

    private insertStringAfterNewLine(input: string, stringToInsert: string): string {
        return input.replace(/\n/g, "\n" + stringToInsert);
    }

}

export { OpenAIRuleConverter }

