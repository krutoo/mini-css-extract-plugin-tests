# MiniCssExtractPlugin tests

Based on docs:
https://webpack.js.org/plugins/mini-css-extract-plugin/#extracting-css-based-on-entry

Looks like there is a bug - plugin overwrites some css files and throws errors/warnings

### Reproduce

1. Build

```bash
$ npm i && npm run build
```

2. Check the `dist` folder.
