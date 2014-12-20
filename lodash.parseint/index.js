/**
 * Lo-Dash 3.0.0-pre (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var isIterateeCall = require('lodash._isiterateecall'),
    trim = require('lodash.trim');

/** Used to detect hexadecimal string values. */
var reHexPrefix = /^0[xX]/;

/** Used to detect and test for whitespace. */
var whitespace = (
  // Basic whitespace characters.
  ' \t\x0b\f\xa0\ufeff' +

  // Line terminators.
  '\n\r\u2028\u2029' +

  // Unicode category "Zs" space separators.
  '\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000'
);

/* Native method references for those with the same name as other `lodash` methods. */
var nativeParseInt = global.parseInt;

/**
 * Converts `string` to an integer of the specified radix. If `radix` is
 * `undefined` or `0`, a `radix` of `10` is used unless `value` is a hexadecimal,
 * in which case a `radix` of `16` is used.
 *
 * **Note:** This method aligns with the ES5 implementation of `parseInt`.
 * See the [ES5 spec](http://es5.github.io/#E) for more details.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} string The string to parse.
 * @param {number} [radix] The radix to interpret `value` by.
 * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.parseInt('08');
 * // => 8
 *
 * _.map(['6', '08', '10'], _.parseInt);
 * // => [6, 8, 10]
 */
function parseInt(string, radix, guard) {
  if (guard && isIterateeCall(string, radix, guard)) {
    radix = 0;
  }
  return nativeParseInt(string, radix);
}
// Fallback for environments with pre-ES5 implementations.
if (nativeParseInt(whitespace + '08') != 8) {
  parseInt = function(string, radix, guard) {
    // Firefox < 21 and Opera < 15 follow ES3 for `parseInt` and
    // Chrome fails to trim leading <BOM> whitespace characters.
    // See https://code.google.com/p/v8/issues/detail?id=3109.
    if (guard ? isIterateeCall(string, radix, guard) : radix == null) {
      radix = 0;
    } else if (radix) {
      radix = +radix;
    }
    string = trim(string);
    return nativeParseInt(string, radix || (reHexPrefix.test(string) ? 16 : 10));
  };
}

module.exports = parseInt;
