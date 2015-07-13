var React =  require('react/addons');

module.exports = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="/stylesheets/css/style.css"/>
        </head>
        <body>
          <div id="main"></div>
          <div id="chat"></div>
          <script src="/socket.io/socket.io.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.min.js"></script>
          <script src="/javascripts/build/app.js"></script>
        </body>
      </html>
    );
  }
});
