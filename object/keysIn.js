define(['../lang/isArguments', '../lang/isArray', '../internal/isIndex', '../internal/isLength', '../lang/isObject', '../support'], function(isArguments, isArray, isIndex, isLength, isObject, support) {

  /** Used for native method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Shape() {
   *   this.x = 0;
   *   this.y = 0;
   * }
   *
   * Shape.prototype.z = 0;
   *
   * _.keysIn(new Shape);
   * // => ['x', 'y', 'z'] (iteration order is not guaranteed)
   */
  function keysIn(object) {
    if (object == null) {
      return [];
    }
    if (!isObject(object)) {
      object = Object(object);
    }
    var length = object.length;
    length = (length && isLength(length) &&
      (isArray(object) || (support.nonEnumArgs && isArguments(object))) && length) || 0;

    var Ctor = object.constructor,
        index = -1,
        isProto = typeof Ctor == 'function' && Ctor.prototype == object,
        result = Array(length),
        skipIndexes = length > 0;

    while (++index < length) {
      result[index] = (index + '');
    }
    for (var key in object) {
      if (!(skipIndexes && isIndex(key, length)) &&
          !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }

  return keysIn;
});
