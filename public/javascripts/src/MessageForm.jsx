var React = require('react/addons');
$ = jQuery = require('jquery');

var socket = io.connect();

module.exports = React.createClass({

  getInitialState: function(){
      return {text: ''};
  },

  handleSubmit : function(e){
      e.preventDefault();
      var message = {
          user : this.props.user,
          text : this.state.text
      };
      this.props.onMessageSubmit(message);
      this.setState({ text: '' });
  },

  changeHandler : function(e){
      this.setState({ text : e.target.value });
  },

  render: function(){
      return(
          <div className='ui bound bottom sticky message_form'>
              <form className="ui fluid mini input" onSubmit={this.handleSubmit}>
                  <input onChange={this.changeHandler} placeholder="chat" value={this.state.text} />
              </form>
          </div>
      );
  }
});
