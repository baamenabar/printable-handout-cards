module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json', 'vue', 'ts', 'tsx'],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
            'jest-transform-stub',
        '^.+\\.(tsx|ts)?$': 'ts-jest',
    },
    transformIgnorePatterns: ['/node_modules/'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    snapshotSerializers: ['jest-serializer-vue'],
    testMatch: ['**/src/**/*.spec.ts'],
    testURL: 'http://localhost/',
    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname',
    ],
    collectCoverage: true,
    coverageReporters: ['json', 'lcov', 'text', 'text-summary', 'clover'],
    collectCoverageFrom: [
        '**/src/**/*.{ts,vue}',
        '!src/main.js', // No need to cover bootstrap file
    ],
    globals: {
        'ts-jest': {
            babelConfig: true,
        },
    },
};
