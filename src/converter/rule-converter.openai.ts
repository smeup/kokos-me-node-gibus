import { ChatOpenAI } from "langchain/chat_models/openai";
import { SystemMessage, HumanMessage } from "langchain/schema";
import { Condition, ConversionResult, IRuleConverterService, Rule } from "./types";
import { PromptTemplate } from "langchain/prompts";
import { SYSTEM_MESSAGE } from "./prompts";

class OpenAIRuleConverter implements IRuleConverterService {


    private openai = new ChatOpenAI(
        {
            openAIApiKey: process.env.OPENAI_API_KEY,
            modelName: "gpt-3.5-turbo",
            temperature: 0
        }
    );

    constructor() {
    }

    async convertRule(rule: Rule): Promise<ConversionResult> {
        const prompt = PromptTemplate.fromTemplate(SYSTEM_MESSAGE);
        const messages = [new SystemMessage({ content: SYSTEM_MESSAGE }), new HumanMessage({ content: this.transformRuleToText(rule) })];
        const result = await this.openai.predictMessages(messages)
        const messageContent = result.content[0];
        let text: string;
        if (typeof messageContent === 'string') {
            text = messageContent;
        } else if (messageContent.type === 'text') {
            text = messageContent.text;
        } else {
            throw new Error(`Unexpected message content type: ${messageContent.type}`);
        }
        return new ConversionResult(rule.id, text);
    };


    transformRuleToText(rule: Rule): string {
        return `
        //${rule.id}
        """
        ${rule.conditions.map((condition) => this.transformConditionToText(condition)).join("\n")}
        """
        `;
    }


    transformConditionToText(condition: Condition): string {
        return `
        J§REGO
        ${condition.ifCondition} 

        J§TRUE
        ${condition.thenCondition}

        J§FALS
        ${condition.elseCondition}
        `;
    }

}

export { OpenAIRuleConverter }

