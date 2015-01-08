define(['./chain/chain', './chain/lodash', './chain/tap', './chain/thru', './chain/wrapperChain', './chain/wrapperReverse', './chain/wrapperToString', './chain/wrapperValue'], function(chain, lodash, tap, thru, wrapperChain, wrapperReverse, wrapperToString, wrapperValue) {

  return {
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
});
