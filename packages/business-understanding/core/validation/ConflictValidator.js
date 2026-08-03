class ConflictValidator {

    validate(profile) {

        try {

            const warnings = [];

            // Framework for future deterministic conflict checks.

            return warnings;

        } catch (error) {

            throw new Error(
                `ConflictValidator Error: ${error.message}`
            );

        }

    }

}

module.exports = ConflictValidator;