var EventEmitter = require('events').EventEmitter;

const CHANGE_EVENT = 'CHANGE_EVENT';

class Store extends EventEmitter {
  constructor(dispatcher) {
    this._handlers = [];

    this.dispatchToken = dispatcher.register(payload => {

      this._handlers.forEach(handler => {
        console.log(payload.action, handler.key);
        if(payload.action == handler.key) {
          handler.fn(payload)

          if(handler.change) {
            this.emitChange();
          }
        }
      });
    })
  }

  register(key, fn, change) {
    change = typeof change === 'undefined' ? true : change;
    this._handlers.push({key: key, fn: fn, change: change });
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(fn) {
    this.on(CHANGE_EVENT, fn);
  }

  removeChangeListener(fn) {
    this.removeListener(CHANGE_EVENT, fn);
  }
}

module.exports = Store;
