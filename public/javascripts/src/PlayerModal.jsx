var React = require('react/addons');
var Modal = require('react-semantify').Modal;

module.exports = React.createClass({
  // componentDidMount: function() {
  //   $('.ui.modal').modal('show');
  // },
  render: function() {
    var className = this.props.index.toString();
    return (
      <Modal className={className} init={false}>
        <div className="header">
          <img className="ui middle aligned avatar image" src={this.props.player.avatar}/>
          {this.props.player.personaname}
        </div>
        <div className="content">
          <div className="description">
            <div className="ui items">
              {this.props.player.items.map(function(item) {
                var itemURL = "http://steamcommunity-a.akamaihd.net/economy/image/"+item.icon_url;
                var imageStyle = {borderBottom: "4px solid #" + item.name_color};
                return (
                  <div className="item">
                    <div className="image">
                      <img style={imageStyle} src={itemURL}/>
                    </div>
                    <div className="content middle aligned">
                      <div className="header">
                        {item.name}
                      </div>
                      <div className="description">
                        Median price at time of deposit: ${item.median_price}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Modal>
    );
  }
});
