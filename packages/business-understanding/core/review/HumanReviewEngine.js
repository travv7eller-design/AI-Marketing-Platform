class HumanReviewEngine {

    constructor(
        reviewSessionBuilder,
        approvalProcessor
    ) {

        this.reviewSessionBuilder =
            reviewSessionBuilder;

        this.approvalProcessor =
            approvalProcessor;

    }

    review(
        profile,
        validationReport,
        decision,
        changes = {}
    ) {

        try {

            const session =
                this.reviewSessionBuilder.build(
                    profile,
                    validationReport
                );

            return this.approvalProcessor.process(
                session,
                decision,
                changes
            );

        } catch (error) {

            throw new Error(
                `HumanReviewEngine Error: ${error.message}`
            );

        }

    }

}

module.exports = HumanReviewEngine;