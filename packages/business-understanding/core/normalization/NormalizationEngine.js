class NormalizationEngine {

    constructor(normalizer) {

        this.normalizer = normalizer;

    }

    normalize(profile) {

        return this.normalizer.normalize(profile);

    }

}

module.exports = NormalizationEngine;