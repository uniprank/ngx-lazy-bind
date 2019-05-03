const {
    defaults
} = require('jest-config');
// const esModules = ['[thir-party-lib]'].join('|');
const esModules = [].join('|');

module.exports = {
    reporters: ["default", ["jest-junit", {
        "outputDirectory": "./coverage/ngx-lazy-bind/test-reports-junit",
        "outputName": "./test-results.xml",
    }]],
    coverageDirectory: "<rootDir>/coverage/ngx-lazy-bind",
    coverageReporters: ["json", "html", "cobertura"],
    globals: {
        "ts-jest": {
            "allowSyntheticDefaultImports": true
        }
    },
    modulePathIgnorePatterns: ['<rootDir>/dist', '<rootDir>/coverage'],
    transformIgnorePatterns: [`<rootDir>/node_modules/(?!${esModules})`],
    collectCoverage: true,

    transform: {
        "^.+\\.js$": "babel-jest"
    },
    collectCoverageFrom: ["library/ngx-lazy-bind/src/lib/**/*.{ts,tsx}", "!library/ngx-lazy-bind/src/lib/**/*.module.{ts,tsx}", "!**/node_modules/**", "!**/lib/json/**"]
};
