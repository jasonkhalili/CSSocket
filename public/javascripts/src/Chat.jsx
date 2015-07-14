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
      this.scrollCont();
  },
  handleMessageSubmit : function(message){
      Messages.push(message);
      this.setState({ messages : Messages });
      socket.emit('send message', message);
      this.scrollCont();
  },
  scrollCont: function() {
    var objDiv = document.getElementById("chat");
    objDiv.scrollTop = objDiv.scrollHeight;
  },
  render : function(){
    if(user === 'no user') {
      return (
        <div className="chatContent">
          <MessageList messages={this.state.messages} />
        </div>
      );
    }
    else {
      return (
        <div className="chatContent">
          <MessageList messages={this.state.messages} />
          <MessageForm onMessageSubmit={this.handleMessageSubmit} user={user}/>
        </div>
      );
    }
  }
});
