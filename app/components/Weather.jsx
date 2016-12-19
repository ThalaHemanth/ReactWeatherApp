var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({

  getInitialState : function () {
    return {
      // location : 'Chittoor',
      // temp : 20
      isLoading : false
    }
  },

  handleSearch : function (location) {
    // we use "that" instead of "this" because of some scope problems occurs inside function
    var that = this;

    this.setState ({
      isLoading : true,
      errorMessage : "Error"
    });

    OpenWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location : location,
        temp : temp,
        isLoading : false
      });
    }, function (e) {
      that.setState({
        isLoading :false,
        errorMessage : e.message
      });

    });

  },
  render : function () {
    var {isLoading,location,temp,errorMessage} = this.state;


    function renderMessage() {
      if(isLoading) {
        return <h3 className="text-center">Fetching..</h3>;
      } else if (temp && location) {
      return  <WeatherMessage location = {location} temp = {temp}/>;
      }
    }

    function renderError() {
      if ( typeof errorMessage === 'string') {
      return  <ErrorModal message = {errorMessage}/>
      }
    }

    return (
        <div>
          <h1 className="text-center page-layout weather-heading">Get Weather</h1>
          <WeatherForm onSearch = {this.handleSearch}/>
          {renderMessage()}
          {renderError()}
        </div>
      );
  }
});

module.exports = Weather;
