var React = require('react');
var NavBar = require('NavBar');

var Main = React.createClass({
    render: function() {
        return (
            <div>
                <NavBar/>
                <div className="row">
                    <div className="columns medium-6 large-4 small-centered">
                      {this.props.children}
                    </div>
                  </div>
                </div>
              );
    }      
});

module.exports = Main;
