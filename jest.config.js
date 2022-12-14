/** @type {import('jest').Config} */
const config = {
    roots: ["./tests/"],
    transform: {
        '\\.[jt]s?$': 'esbuild-jest',
    },
    collectCoverage: true,
    collectCoverageFrom: ["./src/**"],
    moduleDirectories: ["node_modules"],
    coverageReporters: ["lcov"],
    coverageDirectory: "./coverage"
}

module.exports = config;