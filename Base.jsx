var React = require('react/addons');

module.exports = React.createClass({
  render: function() {
    return (
      <p>User Logged In {this.props.user}</p>
    );
  }
});
