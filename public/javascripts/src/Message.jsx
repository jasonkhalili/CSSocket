var React = require('react/addons');
$ = jQuery = require('jquery');


module.exports = React.createClass({
  render: function(){
      return(
          <div className="message">
              {this.props.text}
          </div>
      );
  }
});
