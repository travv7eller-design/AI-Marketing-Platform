class CollectionNormalizer {

    constructor(stringNormalizer) {

        this.stringNormalizer = stringNormalizer;

    }

    normalize(collection = []) {

        try {

            const normalized = collection
                .map(item => this.stringNormalizer.normalize(item))
                .filter(Boolean);

            return [...new Set(normalized)];

        } catch (error) {

            throw new Error(
                `CollectionNormalizer Error: ${error.message}`
            );

        }

    }

}

module.exports = CollectionNormalizer;
