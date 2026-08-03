class PromptBuilder {

    build({ systemPrompt, userPrompt, assets }) {

        const assetContent = assets
            .map(asset => asset.content)
            .join("\n\n");

        return {
            systemPrompt,
            userPrompt: `${userPrompt}\n\n${assetContent}`
        };

    }

}

module.exports = PromptBuilder;