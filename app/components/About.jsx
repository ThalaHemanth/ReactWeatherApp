var React = require('react');

var About = (props) => {
  return (
       <div className="text-center">
         <h1 className="main-heading">About</h1>
         <p>Most Accurate Weather Prediction App Created Using <a href="https://facebook.github.io/react">React</a> </p>
         <h4>Contact</h4>
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
