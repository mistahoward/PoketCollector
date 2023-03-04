module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	plugins: ['react', '@typescript-eslint'],
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	rules: {
		'no-tabs': 'off',
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'@typescript-eslint/semi': 'off',
		'@typescript-eslint/indent': ['error', 'tab'],
		'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
		'react/jsx-indent': ['error', 'tab'],
		'comma-dangle': 'off',
		'linebreak-style': 'off',
		'react/jsx-indent-props': ['error', 'tab'],
		'react/require-default-props': 'off',
		'react/function-component-definition': [2, { "namedComponents": "arrow-function" }]
	},
};
