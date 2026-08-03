class BusinessProfileValidator {

    constructor(
        requiredFieldValidator,
        conflictValidator,
        validationReportBuilder
    ) {

        this.requiredFieldValidator =
            requiredFieldValidator;

        this.conflictValidator =
            conflictValidator;

        this.validationReportBuilder =
            validationReportBuilder;

    }

    validate(profile) {

        try {

            const messages = [

                ...this.requiredFieldValidator.validate(profile),

                ...this.conflictValidator.validate(profile)

            ];

            return this.validationReportBuilder.build(messages);

        } catch (error) {

            throw new Error(
                `BusinessProfileValidator Error: ${error.message}`
            );

        }

    }

}

module.exports = BusinessProfileValidator;