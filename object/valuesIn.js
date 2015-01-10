import baseValues from '../internal/baseValues';
import keysIn from './keysIn';

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

export default valuesIn;
