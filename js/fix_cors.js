var http = require('http');
 
const PORT = process.env.PORT || 3000;
 
var httpServer = http.createServer(function (request, response) {
    // Setting up Headers
    response.setHeader('Access-Control-Allow-origin', 'https://feeds.library.caltech.edu/'); // 모든 출처(orogin)을 허용
    // response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // 모든 HTTP 메서드 허용
    // response.setHeader('Access-Control-Allow-Credentials', 'true'); // 클라이언트와 서버 간에 쿠키 주고받기 허용
 
    // ...
 
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('ok');
});
 
httpServer.listen(PORT, () => {
    console.log('Server is running at port 3000...');
});


// const express = require('express');
// const request = require('request');

// const app = express();

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

// app.get('/people/Goddard-W-A-III/article.json', (req, res) => {
//   request(
//     { url: 'https://feeds.library.caltech.edu/people/Goddard-W-A-III/article.json' },
//     (error, response, body) => {
//       if (error || response.statusCode !== 200) {
//         return res.status(500).json({ type: 'error', message: err.message });
//       }

//       res.json(JSON.parse(body));
//     }
//   )
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`listening on ${PORT}`));