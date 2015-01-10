import cachePush from './cachePush';
import isNative from '../lang/isNative';
import root from './root';

/** Native method references. */
var Set = isNative(Set = root.Set) && Set;

/**
 *
 * Creates a cache object to store unique values.
 *
 * @private
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var length = values ? values.length : 0;

  this.data = { 'number': {}, 'set': new Set };
  while (length--) {
    this.push(values[length]);
  }
}

// Add functions to the `Set` cache.
SetCache.prototype.push = cachePush;

export default SetCache;
