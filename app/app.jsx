var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var NavBar = require('NavBar');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');


// Loading foundation

require('style!css!foundation-sites/dist/foundation.min.css')

$(document).foundation();

require('style!css!sass!applicationStyles')

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path = '/' component={Main}>
        <Route path = 'about' component={About}/>
        <Route path = 'examples' component = {Examples}/>
        <IndexRoute component = {Weather}/>
      </Route>
    </Router>,
document.getElementById('app'));
