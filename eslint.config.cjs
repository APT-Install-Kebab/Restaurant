const js = require('@eslint/js');
const prettier = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
	js.configs.recommended,
	prettierConfig,
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'commonjs',
			globals: {
				console: 'readonly',
				process: 'readonly',
				__dirname: 'readonly',
				__filename: 'readonly',
				Buffer: 'readonly',
				global: 'readonly',
				module: 'readonly',
				require: 'readonly',
				exports: 'readonly',
			},
		},
		plugins: {
			prettier,
		},
		rules: {
			indent: ['error', 'tab'],
			'no-tabs': 'off',
			quotes: ['error', 'single'],
			semi: ['error', 'always'],
			'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'no-console': 'off',
			'prettier/prettier': 'error',
		},
	},
	{
		ignores: ['node_modules/**', 'dist/**', 'build/**', 'coverage/**', '*.log'],
	},
];
