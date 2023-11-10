const mantinePrettier = require('eslint-config-mantine/.prettierrc.js');

const config = {
    ...mantinePrettier,
    trailingComma: "es5",
    tabWidth: 4,
    semi: true,
    singleQuote: false,
};

module.exports = config;

