/**
 * Lo-Dash 3.0.0-pre (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var baseValues = require('lodash._basevalues'),
    keysIn = require('lodash.keysin');

/**
 * Creates an array of the own and inherited enumerable property values
 * of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Shape(x, y) {
 *   this.x = x;
 *   this.y = y;
 * }
 *
 * Shape.prototype.z = 0;
 *
 * _.valuesIn(new Shape(2, 1));
 * // => [2, 1, 0] (iteration order is not guaranteed)
 */
function valuesIn(object) {
  return baseValues(object, keysIn(object));
}

module.exports = valuesIn;
