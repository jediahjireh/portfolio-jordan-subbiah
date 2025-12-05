import pluginQuery from "@tanstack/eslint-plugin-query";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import pluginN from "eslint-plugin-n";
import noRelativeImportPaths from "eslint-plugin-no-relative-import-paths";
import pluginUnusedImports from "eslint-plugin-unused-imports";
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**",
    ".git/**",
  ]),
  {
    plugins: {
      "no-relative-import-paths": noRelativeImportPaths,
      "@tanstack/query": pluginQuery,
      "unused-imports": pluginUnusedImports,
      n: pluginN,
    },
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "no-relative-import-paths/no-relative-import-paths": [
        "error",
        {
          prefix: "@",
        },
      ],
      "@tanstack/query/exhaustive-deps": "error",
      // TODO: turn "off" if unwanted

      // disable the ghost rule
      "node/no-process-env": "off",
      // use the maintained rule
      "n/no-process-env": "warn",
    },
  },
]);

export default eslintConfig;
