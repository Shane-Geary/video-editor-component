// Copyright 2021 Glowstik Inc. All rights reserved.
module.exports = {
	'extends': [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'react-app',
		'react-app/jest'
	],
	'rules': {
		'semi': [
			'warn',
			'never'
		],
		'camelcase': [
			'warn',
			{'properties': 'always'}
		],
		'react/prop-types': [
			'off'
		],
		'react/react-in-jsx-scope': [
			'off'
		],
		'react/display-name': [
			'off'
		],
		'curly': 'warn',
		'eqeqeq': 'warn',
		'func-name-matching': 'warn',
		'func-names': ['error', 'as-needed'],
		'func-style': ['error', 'declaration', {'allowArrowFunctions': true}],
		'guard-for-in': 'error',
		'new-cap': ['error', {'newIsCap': true, 'capIsNew': true}],
		'no-var': 'warn',
		'brace-style': ['warn', 'stroustrup'],
		'comma-spacing': ['warn', {'before': false, 'after': true}],
		'eol-last': ['warn', 'never'],
		'indent': ['warn', 'tab'],
		'jsx-quotes': ['warn', 'prefer-single'],
		'key-spacing': ['warn', {'mode': 'strict', 'beforeColon': false, 'afterColon': true}],
		'keyword-spacing': ['warn', {
			'overrides': {
				'as': {
					'before': true,
					'after': true
				},
				'case': {'after': true},
				'catch': {'after': false},
				'const': {'after': true},
				'do': {'after': false},
				'else': {'after': false},
				'for': {'after': false},
				'from': {
					'before': true,
					'after': true
				},
				'if': {'after': false},
				'import': {'after': true},
				'let': {'after': true},
				'new': {'after': true},
				'of': {
					'before': true,
					'after': true
				},
				'return': {'after': true},
				'switch': {'after': false},
				'try': {'after': false},
				'typeof': {'after': false},
				'var': {'after': true},
				'while': {'after': false}
			}
		}],
		'lines-between-class-members': ['warn', 'always'],
		'multiline-ternary': ['warn', 'always-multiline'],
		'new-parens': 'error',
		'newline-per-chained-call': ['warn', {'ignoreChainWithDepth': 3}],
		'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
		'no-multi-spaces': ['warn', {'ignoreEOLComments': true}],
		'no-multiple-empty-lines': ['warn', {'max': 2}],
		'no-trailing-spaces': 'warn',
		'no-whitespace-before-property': 'error',
		'object-curly-newline': ['warn', {
			'ObjectExpression': {'multiline': true},
			'ObjectPattern': {'multiline': true},
			'ImportDeclaration': {'multiline': true},
			'ExportDeclaration': {'multiline': true}
		}],
		'object-curly-spacing': ['warn', 'never'],
		'quotes': ['warn', 'single'],
		'rest-spread-spacing': ['error', 'never'],
		'space-in-parens': ['warn', 'never'],
		'space-infix-ops': ['warn', {'int32Hint': false}],
		'space-unary-ops': ['warn', {'words': true, 'nonwords': false}],
		'switch-colon-spacing': ['warn', {'after': true, 'before': false}],
		'template-curly-spacing': 'warn',
		'no-unused-vars': 'warn'
	}
}