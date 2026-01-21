import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
	js.configs.recommended,
	prettierConfig,
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				console: 'readonly',
				process: 'readonly',
				__dirname: 'readonly',
				__filename: 'readonly',
				Buffer: 'readonly',
				global: 'readonly',
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
