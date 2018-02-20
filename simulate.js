const api = require('./api.js');
const geo = require('./lib/geo.js');
const messages = require('./messages.json');

const HOST = process.argv[2]

if (!HOST) {
  console.log("Please, inform the host. Example: yarn start https://ancient-shelf-11063.herokuapp.com/api");
  process.exit(1);
}

//
// messages.forEach(message => {
//   setTimeout(() => {
//     api.postMessage(message, (data) => {
//       console.log("Message created! Creating the nearby messages");
//
//       [20, 40, 60, 80, 100].forEach(radius => {
//         let randomGeoPoints = geo.generateRandomPoints({'lat':message.latitude, 'lng':message.longitude}, radius, Math.floor(radius/10));
//         randomGeoPoints.forEach(point => {
//           let content = `I am a nearby message to ${message.latitude}:${message.longitude} located at ${point.lat}:${point.lng}`;
//           let randomMessage = JSON.stringify({"content": content, "latitude": point.lat, "longitude": point.lng});
//           console.log(`Random message ${randomMessage}`)
//           // Uncomment this case you want to add random messages around the message location
//           // api.postMessage(message, null);
//         });
//       });
//
//     });
//     //console.log(message);
//   }, Math.floor(Math.random() * 10001));
// });
//
// setTimeout(() => {
//   // api.getMessagesNearby(52.45097, 13.46139, 1);
// }, Math.floor(Math.random() * 10001));
//

setTimeout(() => {
  api.getNearestMessage(HOST, 52.54124, 13.400241);
}, Math.floor(Math.random() * 10001));
