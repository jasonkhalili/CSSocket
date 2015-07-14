var React = require('react/addons');
$ = jQuery = require('jquery');

var MessageList = require('./MessageList.jsx');
var MessageForm = require('./MessageForm.jsx');

var socket = io.connect();

var Users = [];
var Messages = [];

module.exports = React.createClass({
  getInitialState: function(){
      socket.on('send message', this.messageRecieve);
      return {users: [], messages:[], text: ''};
  },
  messageRecieve: function(message){
      Messages.push(message);
      this.setState({ messages : Messages });
  },
  handleMessageSubmit : function(message){
      Messages.push(message);
      this.setState({ messages : Messages });
      socket.emit('send message', message);
  },
  render : function(){
    if(user === 'no user') {
      return (
        <div>
          <MessageList messages={this.state.messages} />
        </div>
      );
    }
    else {
      return (
        <div>
          <MessageList messages={this.state.messages} />
          <MessageForm onMessageSubmit={this.handleMessageSubmit} user={user}/>
        </div>
      );
    }
  }
});
