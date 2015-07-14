var React = require('react/addons');

module.exports = React.createClass({
  componentDidMount: function() {
  },
  render: function() {
    if(this.props.user === 'no user'){
      return (
        <a className="ui basic button" href="auth/steam">
          <i className="sign in icon"/>
          Login
        </a>
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
