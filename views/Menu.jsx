var React = require('react/addons');
var User = require('./User.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="ui text menu">
        <div className="header item">
          CSGO: Website
        </div>
        <div className="ui right item">
          <User user={this.props.user}/>
        </div>
      </div>
    );
  }
});
