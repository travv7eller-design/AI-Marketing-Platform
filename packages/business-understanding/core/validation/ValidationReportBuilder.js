class ValidationReportBuilder {

    build(messages) {

        try {

            const errors =
                messages.filter(m => m.type === "error");

            const warnings =
                messages.filter(m => m.type === "warning");

            return {

                status:
                    errors.length > 0
                        ? "failed"
                        : "review_required",

                errors,

                warnings,

                disclaimer:
                    "Please review the generated Business Profile carefully before approval. Approved information becomes trusted knowledge for future Creative Intelligence."

            };

        } catch (error) {

            throw new Error(
                `ValidationReportBuilder Error: ${error.message}`
            );

        }

    }

}

module.exports = ValidationReportBuilder;