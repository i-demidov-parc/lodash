import at from './collection/at';
import countBy from './collection/countBy';
import every from './collection/every';
import filter from './collection/filter';
import find from './collection/find';
import findLast from './collection/findLast';
import findWhere from './collection/findWhere';
import forEach from './collection/forEach';
import forEachRight from './collection/forEachRight';
import groupBy from './collection/groupBy';
import includes from './collection/includes';
import indexBy from './collection/indexBy';
import invoke from './collection/invoke';
import map from './collection/map';
import max from './collection/max';
import min from './collection/min';
import partition from './collection/partition';
import pluck from './collection/pluck';
import reduce from './collection/reduce';
import reduceRight from './collection/reduceRight';
import reject from './collection/reject';
import sample from './collection/sample';
import shuffle from './collection/shuffle';
import size from './collection/size';
import some from './collection/some';
import sortBy from './collection/sortBy';
import sortByAll from './collection/sortByAll';
import toArray from './collection/toArray';
import where from './collection/where';

export default {
  'all': every,
  'any': some,
  'at': at,
  'collect': map,
  'contains': includes,
  'countBy': countBy,
  'detect': find,
  'each': forEach,
  'eachRight': forEachRight,
  'every': every,
  'filter': filter,
  'find': find,
  'findLast': findLast,
  'findWhere': findWhere,
  'foldl': reduce,
  'foldr': reduceRight,
  'forEach': forEach,
  'forEachRight': forEachRight,
  'groupBy': groupBy,
  'include': includes,
  'includes': includes,
  'indexBy': indexBy,
  'inject': reduce,
  'invoke': invoke,
  'map': map,
  'max': max,
  'min': min,
  'partition': partition,
  'pluck': pluck,
  'reduce': reduce,
  'reduceRight': reduceRight,
  'reject': reject,
  'sample': sample,
  'select': filter,
  'shuffle': shuffle,
  'size': size,
  'some': some,
  'sortBy': sortBy,
  'sortByAll': sortByAll,
  'toArray': toArray,
  'where': where
};
