var React = require('react/addons');
$ = jQuery = require('jquery');


module.exports = React.createClass({
  render: function(){
      return(
          <div className="message">
            <img className="ui image avatar" src={this.props.user._json.avatar}/>
            <strong>{this.props.user._json.personaname}</strong> :
            {this.props.text}
          </div>
      );
  }
});
