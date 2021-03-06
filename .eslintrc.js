// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        'indent': ['error', 4, {'SwitchCase': 1}],
        'no-extra-semi': 2,
        'no-new-func': 0,
        'no-return-await': 0,
        'no-unused-vars': 0,
        'no-undef': 0,
        'no-template-curly-in-string': 0,
        'prefer-default-export': 0,
        'semi': ['error', 'always'],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}
