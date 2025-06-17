import {dirname} from "path";
import {fileURLToPath} from "url";
import {FlatCompat} from "@eslint/eslintrc";
import prettier from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
      "next/core-web-vitals",
      "next/typescript",
      "prettier"
  ),
  {
    files: ["**/*.js", "**/*.ts", "**/*.tsx"],
    plugins: {
      prettier: prettier
    },
    rules: {
      "prettier/prettier": ["error", {
        "tabWidth": 2,
        "useTabs": false,
        "singleQuote": true,
        "backtick": false,
        "bracketSpacing": true,
        "printWidth": 150
      }]
    }
  }

];

export default eslintConfig;
