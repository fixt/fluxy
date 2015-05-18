import React from 'react'
import {Action, dispatcher, Store} from './index'

class MessageActions extends Actions {
  createMessage(message) {
    this.dispatch('new-message', message);
  }
}

class MessageStore extends Store {
  constructor(dispatcher) {
    super(dispatcher);

    this._messages = [];

    this.register('new-message', ({message}) => {
      this._messages.push(message)
    }
  }

  all() {
    return this._messages;
  }
}

var messageActionCreator = new MessageActions(dispatcher)
var messageStore = new MessageStore(dispatcher)

class MessageList extends React.Component {
  render() {
    return (
      <button onClick={() => this.create()}>Create</button>

      <ul>
        {this.props.messages.map(message => {
          return <li>{message.body}</li>
        })
      </ul>
    )
  }

  create() {
    let body = `Message #${this.props.messages.length}`;
    messageActionCreator.createMessage({body: body})
  }
}

let MessageListContainer = listenToStores(MessageList, [messageStore], (props) => {
  messages: messageStore.all()
});

React.render(<MessageList {...state} />, document.body);
