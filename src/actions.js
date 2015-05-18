class Actions {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  dispatch() {
    console.log(`Dispatching action: ${key}`);

    var [key, ...payload] = arguments;
    payload.action = key;
    this.dispatcher.dispatch(payload);
  }
}

module.exports = Actions;
