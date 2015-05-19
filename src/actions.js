class Actions {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  dispatch() {
    var [key, payload] = arguments;
    payload = payload || {};

    console.log(`Dispatching "${key}" with `, payload);

    payload.action = key;
    this.dispatcher.dispatch(payload);
  }
}

module.exports = Actions;
