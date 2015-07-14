var React = require('react/addons');

module.exports = React.createClass({
  handleClick: function() {
    console.log('in show');
    $('.sidebar.chat')
      .sidebar(({
        transition: 'overlay',
        exclusive: true,
        dimPage: false
      }))
      .sidebar('toggle')
    ;
  },
  render: function() {
    return (
      <div className="ui button blue inverted" onClick={this.handleClick}>
        Chat Toggle
      </div>
    );
  }
});
