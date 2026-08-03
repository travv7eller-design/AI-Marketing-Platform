class StringNormalizer {

    normalize(value) {

        try {

            if (!value) {
                return value;
            }

            return value
                .trim()
                .replace(/\s+/g, " ");

        } catch (error) {

            throw new Error(
                `StringNormalizer Error: ${error.message}`
            );

        }

    }

}

module.exports = StringNormalizer;