class GeminiExtractionAdapter {

    constructor(
        promptLoader,
        promptBuilder,
        geminiClient,
        responseParser,
        businessProfileDraftBuilder
    ) {

        this.promptLoader = promptLoader;
        this.promptBuilder = promptBuilder;
        this.geminiClient = geminiClient;
        this.responseParser = responseParser;
        this.businessProfileDraftBuilder = businessProfileDraftBuilder;

    }

    async extract(assets) {

        try {

            const systemPrompt =
                await this.promptLoader.load(
                    "information-extraction-system.md"
                );

            const userPrompt =
                await this.promptLoader.load(
                    "information-extraction-user.md"
                );

            const prompt =
                this.promptBuilder.build({
                    systemPrompt,
                    userPrompt,
                    assets
                });

            const response =
                await this.geminiClient.generate(prompt);

            const extractedInformation =
                this.responseParser.parse(response);

            return this.businessProfileDraftBuilder.build(
                extractedInformation
            );

        } catch (error) {

            throw new Error(
                `GeminiExtractionAdapter Error: ${error.message}`
            );

        }

    }

}

module.exports = GeminiExtractionAdapter;