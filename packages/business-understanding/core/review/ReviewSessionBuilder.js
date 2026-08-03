class ReviewSessionBuilder {

    build(profile, validationReport) {

        try {

            return {

                profile,

                validationReport,

                editableFields: [],

                requiredFields: [],

                disclaimer:
                    "Please review the generated Business Profile carefully before approval. Approved information becomes trusted knowledge throughout the Creative Intelligence Platform."

            };

        } catch (error) {

            throw new Error(
                `ReviewSessionBuilder Error: ${error.message}`
            );

        }

    }

}

module.exports = ReviewSessionBuilder;