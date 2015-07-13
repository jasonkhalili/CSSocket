var React = require('react/addons');
var PlayersBox = require('./PlayersBox.jsx');

var chartOptions = {
  responsive: true,
  scaleIntegersOnly: false,
  tooltipTemplate: "<%if (label){%><%=label%> $<%}%><%= value %>",
};

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
  renderChart: function(data) {
    this.data = [];
    var ctx = document.getElementById("myChart").getContext("2d");
    this.myDoughnutChart = new Chart(ctx).Doughnut(data,chartOptions);
  },
  updateChart: function(data) {
    this.myDoughnutChart.addData(data);
  },
  componentDidMount: function() {
    this.renderChart([]);
  },
  handleClick: function(click) {
    var activePoints = this.myDoughnutChart.getSegmentsAtEvent(click);
    var playerIndex = chartColors.indexOf(activePoints[0].fillColor);
    var modalToShow = '.ui.modal.' + playerIndex;
    $(modalToShow)
      .modal({
        transition: 'horizontal flip'
      })
      .modal('show');
  },
  componentDidUpdate: function(prevProps) {
    var diff = this.props.itemChartData.length - prevProps.itemChartData.length;
    if(diff) {
      for(i=1; i<=diff; i++) {
        this.updateChart(this.props.itemChartData[diff-i]);
      }
    }
  },
  render: function() {
    return (
      <div className="itemsChart">
        <canvas id="myChart" width="400" height="400" onClick={this.handleClick}></canvas>
        <PlayersBox players={this.props.players}/>
      </div>
    );
  }
});
