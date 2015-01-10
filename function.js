import after from './function/after';
import ary from './function/ary';
import before from './function/before';
import bind from './function/bind';
import bindAll from './function/bindAll';
import bindKey from './function/bindKey';
import curry from './function/curry';
import curryRight from './function/curryRight';
import debounce from './function/debounce';
import defer from './function/defer';
import delay from './function/delay';
import flow from './function/flow';
import flowRight from './function/flowRight';
import memoize from './function/memoize';
import negate from './function/negate';
import once from './function/once';
import partial from './function/partial';
import partialRight from './function/partialRight';
import rearg from './function/rearg';
import throttle from './function/throttle';
import wrap from './function/wrap';

export default {
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
