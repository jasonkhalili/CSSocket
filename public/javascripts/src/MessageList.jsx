var React = require('react/addons');
var Message = require('./Message.jsx');

module.exports = React.createClass({
  render: function(){
      var renderMessage = function(message){
          return (
            <Message text={message.text} user={message.user} />
          );
      };
      return (
          <div className='messages'>
              <h2> Conversation: </h2>
              { this.props.messages.map(renderMessage)}
          </div>
      );
  }
});
