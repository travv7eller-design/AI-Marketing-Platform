class ApprovalProcessor {

    process(reviewSession, decision, changes = {}) {

        try {

            const profile = {
                ...reviewSession.profile,
                ...changes
            };

            return {

                status: decision,

                profile

            };

        } catch (error) {

            throw new Error(
                `ApprovalProcessor Error: ${error.message}`
            );

        }

    }

}

module.exports = ApprovalProcessor;