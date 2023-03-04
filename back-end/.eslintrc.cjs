module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	// plugins: ['@typescript-eslint'],
	extends: [
		'airbnb',
		'eslint:recommended',
		// 'plugin:@typescript-eslint/recommended',
	],
	// parser: '@typescript-eslint/parser',
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	rules: {
		'no-tabs': 'off',
		indent: ['error', 'tab', { SwitchCase: 1 }],
		// '@typescript-eslint/semi': 'off',
		// '@typescript-eslint/indent': ['error', 'tab'],
		'comma-dangle': 'off',
		'linebreak-style': 'off',
	},
};
