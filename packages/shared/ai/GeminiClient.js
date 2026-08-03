class GeminiClient {

    constructor(model) {
        this.model = model;
    }

    async generate({ systemPrompt, userPrompt, assets }) {

        try {

            const response = await this.model.generateContent({
                systemInstruction: systemPrompt,
                contents: [
                    {
                        role: "user",
                        parts: [
                            {
                                text: userPrompt
                            },
                            ...assets
                        ]
                    }
                ]
            });

            return response;

        } catch (error) {

            throw new Error(
                `GeminiClient Error: ${error.message}`
            );

        }

    }

}

module.exports = GeminiClient;