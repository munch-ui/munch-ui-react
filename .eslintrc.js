module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
    ],
    plugins: ['react', '@typescript-eslint', 'jest'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        },
        project: './tsconfig.json'
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                parser: 'flow',
                endOfLine: 'auto',
                tabWidth: 4
            }
        ],
        quotes: [
            2,
            'single',
            {
                avoidEscape: true
            }
        ],
        'react/prop-types': 0,
        'react/require-default-props': 0,
        '@typescript-eslint/no-shadow': 0,
        '@typescript-eslint/no-redeclare': 0,
        'import/extensions': 0,
        'jsx-a11y/label-has-associated-control': 'off',
        'jsx-a11y/label-has-for': 'off'
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};
