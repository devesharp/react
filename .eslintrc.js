module.exports = {
    extends: ['@devesharp/typescript', 'prettier/react'],
    rules: {
        'prettier/prettier': ['warn'],
        indent: [
            'error',
            4,
            {
                ignoredNodes: [
                    'JSXElement',
                    'JSXElement > *',
                    'JSXAttribute',
                    'JSXIdentifier',
                    'JSXNamespacedName',
                    'JSXMemberExpression',
                    'JSXSpreadAttribute',
                    'JSXExpressionContainer',
                    'JSXOpeningElement',
                    'JSXClosingElement',
                    'JSXText',
                    'JSXEmptyExpression',
                    'JSXSpreadChild'
                ]
            }
        ],
        'react/prop-types': ['off'],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/destructuring-assignment': ['off', 'never'],
        'react/jsx-one-expression-per-line': ['off'],
        'react/jsx-curly-newline': ['off'],
        'no-underscore-dangle': ['off'],
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            { allowExpressions: true }
        ]
    }
};
