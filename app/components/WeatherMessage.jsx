var React = require('react');

// var WeatherMessage = React.createClass({
//
//       render : function () {
//         var {location,temp} = this.props;
//         return (
//           <div>
//             <p> its {temp}C in {location}</p>
//           </div>
//         );
//       }
//
// });

var WeatherMessage = ({location,temp}) => {
  return (
  <div>
    <p> its {temp}C in {location}</p>
  </div>
);
};
module.exports = WeatherMessage;
