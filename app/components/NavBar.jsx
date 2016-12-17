var React = require('react');
var {Link,IndexLink} = require('react-router');

// var NavBar = React.createClass({
//   render : function () {
//     return (
//       <div>
//           <h2> This Navigation Bar</h2>
//           <IndexLink activeClassName = "active" activeStyle = {{fontWeight: 'bold'}} to='/'>Get Weather</IndexLink>
//           <Link activeClassName = "active" activeStyle = {{fontWeight: 'bold'}} to= '/about'>About</Link>
//           <Link activeClassName = "active" activeStyle = {{fontWeight: 'bold'}} to = '/examples'>Examples</Link>
//       </div>
//     );
//   }
// });

var NavBar = (props) => {
  return (
    <div>
        <h2>  Navigation Bar</h2>
        <IndexLink activeClassName = "active" activeStyle = {{fontWeight: 'bold'}} to='/'>Get Weather</IndexLink>
        <Link activeClassName = "active" activeStyle = {{fontWeight: 'bold'}} to= '/about'>About</Link>
        <Link activeClassName = "active" activeStyle = {{fontWeight: 'bold'}} to = '/examples'>Examples</Link>
    </div>
  );
};
module.exports = NavBar;
