module.exports = {
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": [
        'airbnb-base',
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        'plugin:prettier/recommended',
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "prettier/prettier": ["error"],
        "import/extensions": ['error', {'ts': 'never'}],
        "@typescript-eslint/no-explicit-any": "off",
    }
};
