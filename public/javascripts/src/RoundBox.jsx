var React = require('react/addons');
var request = require('browser-request');
var RoundItems = require('./RoundItems.jsx');
var ItemsChart = require('./ItemsChart.jsx');

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var chartColors = [
  '#3182bd',
  '#6baed6',
  '#9ecae1',
  '#c6dbef',
  '#e6550d',
  '#fd8d3c',
  '#fdae6b',
  '#fdd0a2',
  '#31a354',
  '#74c476',
  '#a1d99b',
  '#c7e9c0',
  '#756bb1',
  '#9e9ac8',
  '#bcbddc',
  '#dadaeb',
  '#636363',
  '#969696',
  '#bdbdbd',
  '#d9d9d9'
];

module.exports = React.createClass({
  loadCurrentRoundFromServer: function () {
    request({url: 'http://csrest.herokuapp.com/api/currentround', json:true}, function(error, response, data) {
      if(error) {
        console.log(error);
      }
      var players = data[0].players;
      var roundId = data[0].game_id;
      var allItems = [];
      var itemChartData = [];
      for(i = 0; i < players.length; i++) {
        itemChartData.push({
          value: players[i].total_item_value,
          label: players[i].personaname + " deposited " + players[i].items.length + " skin worth ",
          color: chartColors[i]
        });
        for(j = 0; j < players[i].items.length; j++) {
          allItems.push(players[i].items[j]);
        }
      }
      this.setState({
        players: players,
        roundId: roundId,
        itemChartData: itemChartData,
        allItems: allItems
      });
    }.bind(this));
  },
  getInitialState: function () {
    return {
      players: [],
      roundId: null,
      itemChartData: [],
      allItems: []
    };
  },
  componentDidMount: function () {
    this.loadCurrentRoundFromServer();
    setInterval(this.loadCurrentRoundFromServer, 2000);
  },
  render: function () {
    return (
      <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}>
        <h1 className="ui header">Round # {this.state.roundId}</h1>
        <div>
          <div>
            <RoundItems items={this.state.allItems}/>
          </div>
          <ItemsChart itemChartData={this.state.itemChartData} players={this.state.players}/>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
});
