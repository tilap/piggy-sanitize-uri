# piggy-sanitize-uri

Basic lib to sanitize an uri

## Usage


```js
import sanitizeUri from 'piggy-sanitize-uri'

let uri = '/my/path/?arg=value';
let sanitizedUri = sanitizeUri(uri);
```

With options:

```js
import sanitizeUri from 'piggy-sanitize-uri'

let uri = '/my/path/?arg=value';
let options = {
  simpleChars: true,
  lowercase: true,
  endingslash: true,
  doubleshash: true
};
let sanitizedUri = sanitizeUri(uri);
```

## Options

All options are simple boolean values to enable/disable the feature
- **simpleChars**: keep only alnum, "-" and "/" chars in the path
- **lowercase**: lowercase all the chars
- **endingslash**: force an ending slash
- **doubleshash**: remove double slash

## Developer

Installing dev dependencies, you can edit the package source. Then run:
- ```npm run dev-compile``` for babel transpilation
- ```npm run dev-check``` for jshint check
