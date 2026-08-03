class InformationExtractor {

    constructor(adapter) {
        this.adapter = adapter;
    }

    async extract(assets) {

        try {

            return await this.adapter.extract(assets);

        } catch (error) {

            throw new Error(
                `InformationExtractor Error: ${error.message}`
            );

        }

    }

}

module.exports = InformationExtractor;