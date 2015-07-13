var React = require('react/addons');
var ItemCard = require('./ItemCard.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="ui cards">
        {this.props.items.map(function(item) {
          return (
            <ItemCard item={item}/>
          );
        })}
      </div>
    );
  }
});
