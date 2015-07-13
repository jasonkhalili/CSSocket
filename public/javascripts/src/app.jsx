// Libraries
$ = jQuery = require('jquery');
require("../../libraries/semantic-ui/dist/semantic.js");
var request = require('browser-request');

var React = require('react/addons');

// React Components
var RoundBox = require('./RoundBox.jsx');
var Chat = require('./Chat.jsx');

React.render(
  <RoundBox />,
  document.getElementById('main')
);

React.render(
  <Chat />,
  document.getElementById('chat')
);

console.log(user);
