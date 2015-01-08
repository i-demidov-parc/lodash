define([], function() {

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

  return arrayCopy;
});
