module.exports = {
    extends: ["plugin:@typescript-eslint/recommended", "airbnb"],
    root: false,
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    rules: {
        "indent": ["error", 2],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "no-console": "off",
        "arrow-parens": 0
    },
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"]
}
