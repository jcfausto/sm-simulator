const axios = require("axios")

function postMessage(host, message, callBack) {
  axios.post(`${host}/messages`, message)
    .then(function (response) {
      console.log(response.data);
      if (callBack) {
        callBack(response.data);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

function getMessagesNearby(host, latitude, longitude, radius = 100) {
  console.log(`Getting messages around latitude=${latitude} and longitude=${longitude}`);

  axios.get(`${host}/messages?type=nearby&latitude=${latitude}&longitude=${longitude}&radius=${radius}`)
  .then(function (response) {
    console.log(response.data.result);
  })
  .catch(function (error) {
    console.log(error);
  });
}

function getNearestMessage(host, latitude, longitude) {
  console.log(`Getting the closest message to latitude=${latitude} and longitude=${longitude}`);

  axios.get(`${host}/messages?type=nearest&latitude=${latitude}&longitude=${longitude}`)
  .then(function (response) {
    console.log(response.data.result);
  })
  .catch(function (error) {
    console.log(error);
  });
}

module.exports = {
  postMessage,
  getMessagesNearby,
  getNearestMessage
}
