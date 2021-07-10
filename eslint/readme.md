# @alphaxp/eslint-config

## Installation

```sh
npm install --save-dev @alphaxp/eslint-plugin eslint prettier
```

## Usage

`.eslintrc.json`

```json
{
  "extends": "plugin:@alphaxp/recommended"
}
```

`.prettierrc.json`

```json
{
  "singleQuote": true
}
```

`package.json`

```json
{
  "scripts": {
    "lint": "eslint . && prettier --check .",
    "lint:fix": "eslint --fix . && prettier --write ."
  }
}
```
