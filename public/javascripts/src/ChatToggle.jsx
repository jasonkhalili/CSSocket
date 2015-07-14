var React = require('react/addons');

module.exports = React.createClass({
  handleClick: function() {
    console.log('in show');
    $('.sidebar.chat')
      .sidebar('toggle')
    ;
  },
  componentDidMount: function() {
    $('.sidebar.chat')
      .sidebar(({
        transition: 'overlay',
        exclusive: true,
        dimPage: false
      }))
    ;
  },
  render: function() {
    return (
      <div className="ui basic button" onClick={this.handleClick}>
        <i className="comment icon"/>
        Chat
      </div>
    );
  }
});
