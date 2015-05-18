var Dispatcher = require('flux').Dispatcher;

var dispatcher = new Dispatcher();

module.exports = {
  Actions: require('./src/actions'),
  dispatcher: dispatcher,
  listenToStore: require('./src/listenToStore'),
  Store: require('./src/store')
}
