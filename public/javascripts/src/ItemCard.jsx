var React = require('react/addons');

module.exports = React.createClass({
  componentDidMount: function() {
    $('.card')
      .popup();
  },
  render: function() {
    var item=this.props.item;
    var itemURL = "http://steamcommunity-a.akamaihd.net/economy/image/"+item.icon_url;
    var itemPrice = item.median_price;
    var cardStyle = {borderBottom: "4px solid #" + item.name_color};
    return (
      <div className="ui card" data-content={item.name} style={cardStyle}>
        <div className="ui image content">
          <img src={itemURL}/>
          <div className="center aligned">
            ${itemPrice}
          </div>
        </div>
      </div>
    );
  }
});
