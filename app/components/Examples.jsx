var React = require('react');

var {Link} = require('react-router');

// var Examples = React.createClass({
//   render : function () {
//     return (
//       <h3> Examples Component</h3>
//     );
//   }
// });
var Examples = (props) => {
  return (
      <div>
        <h1 className="text-center main-heading">Examples</h1>
        <ol>
          <li>
            <Link to= '/?location=Chittoor'> Chittoor,AP</Link>
          </li>
          <li>
            <Link to='/?location=Hyderabad'> Hyderabad,TA</Link>
          </li>
        </ol>
      </div>
      );
};

module.exports = Examples;
