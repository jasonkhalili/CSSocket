var React = require('react/addons');
var User = require('./User.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="ui three item menu">
        <div className="ui header item">
          <a href="/">
            CSGO: Website
          </a>
        </div>
        <div className="ui item" onClick={this.handleClick1}>
          <div id="chatToggle"></div>
        </div>
        <div className="ui item">
          <User user={this.props.user}/>
        </div>
      </div>
    );
  }
});
