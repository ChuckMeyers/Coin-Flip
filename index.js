const url = require('url');
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const path = require('path');

const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);

    let filePath = path.join(__dirname, 'public', req.url === "/" ? 'index.html' : req.url);
    let extname = path.extname(filePath);
    console.log(filePath);
    console.log(page);
    console.log(extname);

    let contentType = 'text/html';

switch (extname) {
     case '.js' :
          contentType = 'text/javascript';
          break;
     case '.css' :
          contentType = 'text/css';
          break;
     case '.json' :
          contentType = 'application/json';
          break;
     case '.png' :
          contentType = 'img/png';
          break;
      case '.jpg' :
          contentType = 'img/jpg';
          break;
} 

    fs.readFile(filePath, (err,data) => {
        if(err) {
          if(err.code == 'ENOENT'){
            //Page not found
            fs.readFile(path.join(__dirname, 'public', '404.html', (err, data) => {
              res.writeHead(200, {'Content-Type': 'text/html'});
              res.end(data, 'utf8');
            }))
          } else {
            //Some server error
            res.writeHead(500);
            res.end(`Server Error: ${err.code}`);
          }
        } else {
          // Success
          res.writeHead(200, {'Content-Type': contentType});
          res.write(data, 'utf8')
          res.end()
        }
      });

}); 

const PORT = process.env.PORT || 8000;


server.listen(PORT, () => console.log(`Server running on port ${PORT}`));