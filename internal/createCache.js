define(['./SetCache', '../utility/constant', '../lang/isNative', './root'], function(SetCache, constant, isNative, root) {

  /** Native method references. */
  var Set = isNative(Set = root.Set) && Set;

  /**
   * Creates a `Set` cache object to optimize linear searches of large arrays.
   *
   * @private
   * @param {Array} [values] The values to cache.
   * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
   */
  var createCache = !Set ? constant(null) : function(values) {
    return new SetCache(values);
  };

  return createCache;
});
