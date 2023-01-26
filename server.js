const fs = require('fs');

const txt = fs.readFileSync("content/subfolder/read.txt", 'utf-8');
console.log(txt);



// const http = require("http");
// const url = require("url");
// const fs = require('fs');
// const data = fs.readFileSync("data.json", 'utf-8');
// // console.log(data);
// const productData = JSON.parse(data);
// console.log(productData);

// http.createServer(function (req, res) {
//     const path = req.url;
//     // console.log(1, path);

//     if(path==='/api'){
//       console.log("I read the path");
//           // console.log(productData);
//           res.writeHead(200, {'Content-Type': 'application/json'});
//           res.end(data);
//     }
// }).listen(8080);

