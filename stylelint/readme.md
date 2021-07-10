# @alphaxp/stylelint-config

## Installation

```sh
npm install --save-dev stylelint stylelint-config-prettier stylelint-config-alphaxp
```

## Usage

`.stylelintrc.json`

```json
{
  "extends": ["stylelint-config-alphaxp", "stylelint-config-prettier"]
}
```

`package.json`

```json
{
  "scripts": {
    "lint:css": "prettier --list-different '**/*.css' && stylelint '**/*.css'"
  }
}
```
