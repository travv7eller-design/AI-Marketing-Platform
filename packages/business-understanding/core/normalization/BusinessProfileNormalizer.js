class BusinessProfileNormalizer {

    constructor(
        schemaNormalizer,
        stringNormalizer,
        collectionNormalizer
    ) {

        this.schemaNormalizer = schemaNormalizer;
        this.stringNormalizer = stringNormalizer;
        this.collectionNormalizer = collectionNormalizer;

    }

    normalize(profile) {

        try {

            const normalized =
                this.schemaNormalizer.normalize(profile);

            normalized.company_name =
                this.stringNormalizer.normalize(
                    normalized.company_name
                );

            normalized.industry =
                this.stringNormalizer.normalize(
                    normalized.industry
                );

            normalized.products =
                this.collectionNormalizer.normalize(
                    normalized.products
                );

            normalized.services =
                this.collectionNormalizer.normalize(
                    normalized.services
                );

            normalized.target_audiences =
                this.collectionNormalizer.normalize(
                    normalized.target_audiences
                );

            normalized.locations =
                this.collectionNormalizer.normalize(
                    normalized.locations
                );

            return normalized;

        } catch (error) {

            throw new Error(
                `BusinessProfileNormalizer Error: ${error.message}`
            );

        }

    }

}

module.exports = BusinessProfileNormalizer;