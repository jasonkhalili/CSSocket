var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var PlayerModal = require('./PlayerModal.jsx');

module.exports = React.createClass({
  render: function() {
    var players=this.props.players;
    return (
      <div>
        {this.props.players.map(function(player) {
          return (
            <div>
              <PlayerModal player={player} index={players.indexOf(player)}/>
            </div>
          );
        })}
      </div>
    );
  }
});
