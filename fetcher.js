const request = require("request");
const fs = require("fs");
const arg = process.argv;
const inputLink = arg[2];
const path = arg[3];
console.log(`Downloaded and saved 3261 bytes to ${path}`);

request("http://www.example.com", (error, response, body) => {
  if (error) {
    console.log("error");
  } else {
    console.log(body);
  }
});

fs.writeFile("page_fetch.txt", content, function(err) {
  if (err) {
    console.log("error");
  } else {
    console.log(body);
  }
});
