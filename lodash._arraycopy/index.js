/**
 * Lo-Dash 3.0.0-pre (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Copies the values of `array` to `other`.
 *
 * @private
 * @param {Array} array The array to copy.
 * @param {Array} [other=[]] The array to copy values to.
 * @returns {Array} Returns `other`.
 */
function arrayCopy(array, other) {
  var index = -1,
      length = array.length,
      result = other || Array(length);

  while (++index < length) {
    result[index] = array[index];
  }
  return result;
}

module.exports = arrayCopy;
