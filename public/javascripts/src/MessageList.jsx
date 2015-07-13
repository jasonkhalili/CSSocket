var React = require('react/addons');
var Message = require('./Message.jsx');

module.exports = React.createClass({
  render: function(){
      var renderMessage = function(message){
          return (
            <Message user={message.user} text={message.text} />
          );
      };
      return (
          <div class='messages'>
              <h2> Conversation: </h2>
              { this.props.messages.map(renderMessage)}
          </div>
      );
  }
});
