import root from '../internal/root';

/** Native method references. */
var floor = Math.floor;

/* Native method references for those with the same name as other `lodash` methods. */
var nativeIsFinite = root.isFinite;

/**
 * Repeats the given string `n` times.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to repeat.
 * @param {number} [n=0] The number of times to repeat the string.
 * @returns {string} Returns the repeated string.
 * @example
 *
 * _.repeat('*', 3);
 * // => '***'
 *
 * _.repeat('abc', 2);
 * // => 'abcabc'
 *
 * _.repeat('abc', 0);
 * // => ''
 */
function repeat(string, n) {
  var result = '';
  n = +n;

  if (n < 1 || string == null || !nativeIsFinite(n)) {
    return result;
  }
  string = (string + '');

  // Leverage the exponentiation by squaring algorithm for a faster repeat.
  // See http://en.wikipedia.org/wiki/Exponentiation_by_squaring.
  do {
    if (n % 2) {
      result += string;
    }
    n = floor(n / 2);
    string += string;
  } while (n);

  return result;
}

export default repeat;
