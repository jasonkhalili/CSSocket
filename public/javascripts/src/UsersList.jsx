var React = require('react/addons');
$ = jQuery = require('jquery');

module.exports = React.createClass({
  render: function(){
      var renderUser = function(user){
          return <li> { user} </li>
      };
      return (
          <div class='users'>
              <h3> Online Users </h3>
              <ul>{ this.props.users.map(renderUser)} </ul>
          </div>
      );
  }
});
