var React = require('react/addons');

module.exports = React.createClass({
  render: function() {
    if(typeof this.props.user === 'undefined'){
      return (
        <a className="ui button inverted blue" href="auth/steam">Login</a>
      );
    }
    else {
      return (
        <div className="item">
          <img className="ui image avatar" src={this.props.user._json.avatarmedium}/>
          <div className="content middle aligned">
            <div className="ui header">
              {this.props.user._json.personaname}
            </div>
          </div>
        </div>
      );
    }
  }
});
