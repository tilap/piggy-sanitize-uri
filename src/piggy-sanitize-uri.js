/**
 * Sanitize a uri with following options (boolean to enable/disable it):
 * - simpleChars: keep only alphanum and - chars
 * - lowercase: force all alpha char to be lowercase
 * - endingslash: force the uri to end with a / (and queue querystring if any)
 * - doubleshash: replace all double slash (or more) by a single one
 */
export default function sanitizeUri(uri='', options={}) {

  options = {
    simpleChars : options.simpleChars!==undefined ? options.simpleChars : true,
    endingslash : options.endingslash!==undefined ? options.endingslash : true,
    doubleshash : options.doubleshash!==undefined ? options.doubleshash : true,
    lowercase : options.lowercase!==undefined ? options.lowercase : true,
  };

  let base = uri;
  let queryStr = '';

  // Extract query string if any
  if(uri.indexOf('?') > -1) {
    base = uri.split('?')[0];
    queryStr = '?' + uri.split('?')[1];
  }

  if(options.simpleChars) {
    base = base.replace(/[^a-zA-Z0-9\/\-]/g, '-');
  }

  if(options.endingslash) {
    if(base.substr(base.length - 1, 1) !== '/') {
      base = base + '/';
    }
  }

  if(options.lowercase) {
    base = base.toLowerCase();
  }

  if(options.doubleshash) {
    while(base.indexOf('//') > -1) {
      base = base.replace('//', '/');
    }
  }

  return base + queryStr;
}
