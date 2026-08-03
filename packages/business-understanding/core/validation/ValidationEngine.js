class ValidationEngine {

    constructor(validator) {

        this.validator = validator;

    }

    validate(profile) {

        return this.validator.validate(profile);

    }

}

module.exports = ValidationEngine;