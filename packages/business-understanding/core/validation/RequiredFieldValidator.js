class RequiredFieldValidator {

    validate(profile) {

        try {

            const warnings = [];

            if (!profile.company_name) {
                warnings.push({
                    type: "warning",
                    field: "company_name",
                    message: "Company name is missing."
                });
            }

            if (!profile.industry) {
                warnings.push({
                    type: "warning",
                    field: "industry",
                    message: "Industry is missing."
                });
            }

            if (!profile.products?.length) {
                warnings.push({
                    type: "warning",
                    field: "products",
                    message: "No products found."
                });
            }

            return warnings;

        } catch (error) {

            throw new Error(
                `RequiredFieldValidator Error: ${error.message}`
            );

        }

    }

}

module.exports = RequiredFieldValidator;