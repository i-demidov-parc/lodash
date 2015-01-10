import chain from './chain/chain';
import lodash from './chain/lodash';
import tap from './chain/tap';
import thru from './chain/thru';
import wrapperChain from './chain/wrapperChain';
import wrapperReverse from './chain/wrapperReverse';
import wrapperToString from './chain/wrapperToString';
import wrapperValue from './chain/wrapperValue';

export default {
  'chain': chain,
  'lodash': lodash,
  'reverse': wrapperReverse,
  'tap': tap,
  'thru': thru,
  'toJSON': wrapperValue,
  'value': wrapperValue,
  'valueOf': wrapperValue,
  'wrapperChain': wrapperChain,
  'wrapperReverse': wrapperReverse,
  'wrapperToString': wrapperToString,
  'wrapperValue': wrapperValue
};
