const request = require('request');
let args = process.argv.slice(2);
request('https://api.thecatapi.com/v1/breeds/search?q=' + args, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    const data = JSON.parse(body);
    console.log(data[0].description);
    console.log(typeof data);
  }
});
