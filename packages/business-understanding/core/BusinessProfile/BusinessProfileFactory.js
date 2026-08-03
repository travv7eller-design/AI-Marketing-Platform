const BusinessProfile = require("./BusinessProfile");
const BusinessProfileMetadata = require("./BusinessProfileMetadata");
const BusinessProfileVersion = require("./BusinessProfileVersion");

class BusinessProfileFactory {

    build({

        clientId,

        approvedBy,

        profile

    }) {

        try {

            return new BusinessProfile({

                metadata: new BusinessProfileMetadata({

                    clientId,

                    approvedAt: new Date().toISOString(),

                    approvedBy

                }),

                version: new BusinessProfileVersion(),

                profile

            });

        } catch (error) {

            throw new Error(
                `BusinessProfileFactory Error: ${error.message}`
            );

        }

    }

}

module.exports = BusinessProfileFactory;