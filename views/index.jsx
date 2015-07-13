var React =  require('react/addons');
var Menu = require('./Menu.jsx');

function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}

module.exports = React.createClass({
  render: function() {
    var userString = safeStringify(this.props.user);
    return (
      <html>
        <head>
          <link rel="stylesheet" href="/stylesheets/css/style.css"/>
        </head>
        <body>
          <Menu user={this.props.user} />
          <div id="main"></div>
          <div id="chat"></div>

          <script dangerouslySetInnerHTML={{__html:
                'var user = ' + userString + ';'
          }} />
          <script src="/socket.io/socket.io.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.min.js"></script>
          <script src="/javascripts/build/app.js"></script>
        </body>
      </html>
    );
  }
});
