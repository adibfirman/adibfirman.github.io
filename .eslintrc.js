module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: [
		"plugin:react/recommended",
		"prettier",
		"eslint:recommended",
		"plugin:react/recommended"
	],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly"
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: { jsx: true },
		ecmaVersion: 2018,
		sourceType: "module"
	},
	plugins: ["react", "@typescript-eslint", "react-hooks"],
	settings: {
		react: {
			version: "latest"
		}
	},
	overrides: [
		{
			files: ["**/*.ts", "**/*.tsx"],
			rules: {
				"no-undef": "off",
				"no-unused-vars": "off",
				"spaced-comment": ["error", "always", { markers: ["/"] }],
				"import/no-unresolved": "off",
				"@typescript-eslint/camelcase": "off",
				"@typescript-eslint/explicit-function-return-type": ["off"],
				"@typescript-eslint/no-explicit-any": "off",
				"@typescript-eslint/no-unused-vars": [
					"error",
					{ argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
				]
			}
		},
		{
			files: [".eslintrc.js", "*.config.js"],
			parserOptions: { sourceType: "script" },
			env: { node: true }
		}
	],
	rules: {
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"no-console": "off",
		"import/prefer-default-export": "off",
		"import/no-unresolved": "off",
		"@typescript-eslint/explicit-function-return-type": ["off"],
		"@typescript-eslint/no-explicit-any": "off"
	}
};
