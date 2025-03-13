// @ts-check

import path from "node:path"
import { fileURLToPath } from "node:url"
import { includeIgnoreFile } from "@eslint/compat"
import eslint from "@eslint/js"
import prettier from "eslint-config-prettier"
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript"
import importX from "eslint-plugin-import-x"
import globals from "globals"
import tseslint from "typescript-eslint"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, ".gitignore")

export default tseslint.config(
  includeIgnoreFile(gitignorePath),
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  importX.flatConfigs.recommended,
  importX.flatConfigs.react,
  importX.flatConfigs.typescript,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    settings: {
      "import-x/resolver-next": [
        createTypeScriptImportResolver({
          // resolver options
        })
        // other resolvers
      ]
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports" }
      ],
      "@typescript-eslint/no-deprecated": "warn",
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: false
        }
      ],
      "@typescript-eslint/restrict-template-expressions": [
        "warn",
        {
          allowNumber: true
        }
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_"
        }
      ],
      "import-x/consistent-type-specifier-style": ["warn", "prefer-top-level"],
      "import-x/no-unresolved": ["error", { ignore: ["\\?url$"] }], // Allow imports with ?url
      "import-x/order": [
        "warn",
        {
          "newlines-between": "never",
          groups: [
            "builtin",
            "external",
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
        "warn",
        {
          ignoreDeclarationSort: true
        }
      ]
    }
  },
  /**
   * Config files
   */
  {
    files: ["*.config.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: { ...globals.node }
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "import-x/default": "off",
      "import-x/no-named-as-default-member": "off"
    }
  },
  /**
   * Javascript files
   *
   * Ignore type-checking
   */
  {
    files: ["**/*.{js,mjs,cjs}"],
    ...tseslint.configs.disableTypeChecked
  },
  /**
   * Disable rules that could conflict with prettier. This should be the last
   * rule.
   */
  prettier
)
