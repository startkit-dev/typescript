/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    require.resolve("@vercel/style-guide/eslint/node"),
    require.resolve("@vercel/style-guide/eslint/browser"),
    require.resolve("@vercel/style-guide/eslint/typescript")
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: true
  },
  overrides: [
    /**
     * Config files (ex: prettier.config.js, tsup.config.ts, etc)
     */
    {
      files: ["*.config.{ts,js}"],
      env: {
        node: true
      },
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "import/no-default-export": "off"
      }
    },
    /**
     * Test Configuration
     */
    {
      files: ["**/__tests__/**/*.{ts,tsx}", "**/*.test.{ts,tsx}"],
      plugins: ["vitest"],
      extends: ["plugin:vitest/all"],
      rules: {
        /**
         * Allow non-null assertions in tests
         */
        "@typescript-eslint/no-non-null-assertion": "off",
        "eslint-comments/require-description": "off",
        "vitest/prefer-expect-assertions": "off"
      }
    }
  ],
  rules: {
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports", fixStyle: "inline-type-imports" }
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          arguments: false,
          attributes: false
        }
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        caughtErrors: "none",
        varsIgnorePattern: "^_"
      }
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          ["builtin", "external"],
          "internal",
          ["sibling", "parent"],
          "index",
          "object",
          "type"
        ],
        alphabetize: {
          order: "asc"
        }
      }
    ],
    "sort-imports": [
      "error",
      {
        ignoreDeclarationSort: true
      }
    ]
  }
}
