define(['./function/after', './function/ary', './function/before', './function/bind', './function/bindAll', './function/bindKey', './function/curry', './function/curryRight', './function/debounce', './function/defer', './function/delay', './function/flow', './function/flowRight', './function/memoize', './function/negate', './function/once', './function/partial', './function/partialRight', './function/rearg', './function/throttle', './function/wrap'], function(after, ary, before, bind, bindAll, bindKey, curry, curryRight, debounce, defer, delay, flow, flowRight, memoize, negate, once, partial, partialRight, rearg, throttle, wrap) {

  return {
    'after': after,
    'ary': ary,
    'backflow': flowRight,
    'before': before,
    'bind': bind,
    'bindAll': bindAll,
    'bindKey': bindKey,
    'compose': flowRight,
    'curry': curry,
    'curryRight': curryRight,
    'debounce': debounce,
    'defer': defer,
    'delay': delay,
    'flow': flow,
    'flowRight': flowRight,
    'memoize': memoize,
    'negate': negate,
    'once': once,
    'partial': partial,
    'partialRight': partialRight,
    'rearg': rearg,
    'throttle': throttle,
    'wrap': wrap
  };
});
