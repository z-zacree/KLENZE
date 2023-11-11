const mantinePrettier = require('eslint-config-mantine/.prettierrc.js');

const config = {
    ...mantinePrettier,
    printWidth: 100,
    trailingComma: "es5",
    tabWidth: 4,
    semi: true,
    singleQuote: false,
};

module.exports = config;

