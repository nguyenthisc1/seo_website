export default {
    printWidth: 250,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    jsxSingleQuote: true,
    trailingComma: 'none',
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: 'always',
    endOfLine: 'lf',
    plugins: ['@ianvs/prettier-plugin-sort-imports']
    // importOrder: ['^react$', '', '<TYPES>', '<TYPES>^[.]', '', '<THIRD_PARTY_MODULES>', '', '^[@]/', '', '^[.]']
};
