class BusinessProfileDraftBuilder {

    build(data) {

        try {

            return {

                schemaVersion: "1.0",

                generatedAt: new Date().toISOString(),

                status: "draft",

                profile: data

            };

        } catch (error) {

            throw new Error(
                `BusinessProfileDraftBuilder Error: ${error.message}`
            );

        }

    }

}

module.exports = BusinessProfileDraftBuilder;