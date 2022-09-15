/** @type {import('jest').Config} */
const config = {
    roots: ["./tests/"],
    transform: {
        '\\.[jt]sx?$': 'esbuild-jest',
    },
    collectCoverage: true,
    collectCoverageFrom: ["./src/**"]
}

module.exports = config;