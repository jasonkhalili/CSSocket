var React = require('react/addons');
$ = jQuery = require('jquery');


module.exports = React.createClass({
  render: function(){
      return(
          <div class="message">
              <strong>{this.props.user}</strong> :
              {this.props.text}
          </div>
      );
  }
});
