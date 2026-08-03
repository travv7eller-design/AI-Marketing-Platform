class ResponseParser {

    parse(response) {

        try {

            const text =
                response.candidates[0]
                    .content.parts[0]
                    .text;

            return JSON.parse(text);

        } catch (error) {

            throw new Error(
                `ResponseParser Error: ${error.message}`
            );

        }

    }

}

module.exports = ResponseParser;