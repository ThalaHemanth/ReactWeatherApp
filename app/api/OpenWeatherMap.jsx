// Using axious library to perform http requests and retrieving data
var axios = require('axios');

// using owm url for finding weather with my personal generated key
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=52ee9987e553d450adb8a4249eef7888&units=metric';

// API KEY 52ee9987e553d450adb8a4249eef7888

// we are sending location temperature through this getTemp function

module.exports = {
  // we receive the location enterted by the user using getTemp function
  getTemp : function (location) {
    // if we put location directly into &q={} when the white space is created it will create error so we use encodeURIComponent function
    // to avoid whitespaces and put our location into that and receive it with encodedLocation variable.
    var encodedLocation = encodeURIComponent(location);
    // #READ THIS FIRST AFTER ENTERING FUNCTION create var requestedUrl to store the actual url and append our custom location `` is used as template url so that we can append our own
    // variables with url "${}"  is used to insert url and custom url variables
    var requestedUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    // axious.get fetches url and then performs PROMISE Which takes two functions as parameters one for success and other for failure

  return  axios.get(requestedUrl).then(function (res) {
        
       if(res.data.cod && res.data.message) {
         throw new Error(res.data.message);
       } else {
        return res.data.main.temp;
       }
    }, function (res) {
      throw new Error(res.data.message);
    });

  }
}
