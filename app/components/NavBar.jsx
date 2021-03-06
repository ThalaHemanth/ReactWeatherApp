var React = require('react');
var {Link,IndexLink} = require('react-router');



var NavBar = React.createClass({

    onSearch : function (e) {
      e.preventDefault();
      var location = this.refs.search.value;
      var  encodedLocation = encodeURIComponent(location);
      if(location.length > 0) {
      this.refs.search.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
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
                  <input className="search-box" type = "search" placeholder = "Search Weather" ref = "search"/>
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
