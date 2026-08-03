class SchemaNormalizer {

    normalize(profile) {

        try {

            return {

                company_name:
                    profile.company_name ?? null,

                industry:
                    profile.industry ?? null,

                products:
                    profile.products ?? [],

                services:
                    profile.services ?? [],

                locations:
                    profile.locations ?? [],

                target_audiences:
                    profile.target_audiences ?? []

            };

        } catch (error) {

            throw new Error(
                `SchemaNormalizer Error: ${error.message}`
            );

        }

    }

}

module.exports = SchemaNormalizer;