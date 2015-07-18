# piggy-sanitize-uri

Basic lib to sanitize an uri

## Usage


```
import sanitizeUri from 'tilap-sanitize-uri'

let uri = '/my/path/?arg=value';
var sanitizedUri = sanitizeUri(uri);

```

With options:

```
import sanitizeUri from 'tilap-sanitize-uri'

let uri = '/my/path/?arg=value';
let options = {
  simpleChars: true,
  lowercase: true,
  endingslash: true,
  doubleshash: true
};
var sanitizedUri = sanitizeUri(uri);

```

## Options

All options are simple boolean value to enable/disable the feature
- **simpleChars**: keep only alnum, "-" and "/" chars in the path
- **lowercase**: lowercase all the chars
- **endingslash**: force an ending slash
- **doubleshash**: remove double slash

## Developer

Installing dev dependancies, you can edit the package source. Then run:
- ```npm run dev-compile``` for babel transpilation
- ```npm run dev-check``` for jshint check
