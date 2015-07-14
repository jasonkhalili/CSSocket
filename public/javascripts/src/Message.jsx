var React = require('react/addons');
$ = jQuery = require('jquery');


module.exports = React.createClass({
  render: function(){
      return(
          <div className="event">
            <div className="label">
              <img className="image top aligned" src={this.props.user._json.avatar}/>
            </div>
            <div className="content">
              <div className="summary">
                {this.props.user._json.personaname}:
              </div>
              <div className="extra text">
                {this.props.text}
              </div>
            </div>
          </div>
      );
  }
});
