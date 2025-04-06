import perfectionist from "eslint-plugin-perfectionist";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import js from "./$node_modules/@eslint/js/src/index.js";
import reactHooks from "./$node_modules/eslint-plugin-react-hooks/index.js";
import globals from "./$node_modules/globals/index.js";

export default tseslint.config(
	{ ignores: ["dist"] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
			perfectionist,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			"perfectionist/sort-imports": "error",
			"perfectionist/sort-objects": [
				"error",
				{ groups: ["unknown", "method", "multiline-member"] },
			],
			"perfectionist/sort-interfaces": ["error"],
			"perfectionist/sort-jsx-props": [
				"error",
				{
					type: "alphabetical",
					order: "asc",
					fallbackSort: { type: "unsorted" },
					ignoreCase: true,
					specialCharacters: "keep",
					partitionByNewLine: false,
					newlinesBetween: "ignore",
					groups: ["multiline", "unknown", "shorthand"],
				},
			],
			"perfectionist/sort-intersection-types": [
				"error",
				{
					type: "alphabetical",
					order: "asc",
					fallbackSort: { type: "unsorted" },
					ignoreCase: true,
					specialCharacters: "keep",
					partitionByComment: false,
					partitionByNewLine: false,
					newlinesBetween: "ignore",
				},
			],
			"perfectionist/sort-object-types": [
				"error",
				{
					type: "alphabetical",
					order: "asc",
					ignoreCase: true,
					specialCharacters: "keep",
					sortBy: "name",
					groups: ["unknown", "method", "multiline-member"],
				},
			],
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true },
			],
		},
	},
);
