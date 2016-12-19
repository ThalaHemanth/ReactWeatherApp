var React = require('react');
var {Link,IndexLink} = require('react-router');



var NavBar = React.createClass({

    onSearch : function (e) {
      e.preventDefault();
      alert("On Process")
    },
  render : function () {
    return (
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li>
                <IndexLink activeClassName = "active" activeStyle = {{fontWeight: 'bold'}} to='/'>Get Weather</IndexLink>
              </li>
              <li>
                <Link activeClassName = "active" activeStyle = {{fontWeight: 'bold'}} to= '/about'>About</Link>
              </li>
              <li>
                <Link activeClassName = "active" activeStyle = {{fontWeight: 'bold'}} to = '/examples'>Examples</Link>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <form onSubmit={this.onSearch}>
              <ul className="menu">
                <li>
                  <input className="search-box" type = "search" placeholder = "Search Weather"/>
                </li>
                <li>
                  <input type = "submit" className="button" value="Get Weather"/>
                </li>
              </ul>
            </form>
          </div>
        </div>
    );
  }
});
module.exports = NavBar;
