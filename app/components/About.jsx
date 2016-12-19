var React = require('react');


// var About = React.createClass({
//   render : function () {
//     return (
//       <h3> About Component</h3>
//     );
//   }
// });

var About = (props) => {
  return (
       <div className="text-center">
         <h1 className="main-heading">About</h1>
         <p>This is my first weather app which is created using <a href="https://facebook.github.io/react">React</a> </p>
         <h4>Contact us</h4>
         <ul className="menu">
           <li>
             <a  href="https://facebook.com/yoursthala">Facebook</a>
           </li>
           <li>
            <a href="https://twitter.com/viruhemanth">Twitter</a>
           </li>
          </ul>
       </div>
      );
};

module.exports = About;
