const http = require('http');
const fs = require('fs');

const PORT = 8888;

function zpracujPozadavek(req, res) {
    if (req.url === "/") {
        fs.readFile("index.html", (err, data) => {
            res.writeHead(200, {"Content-type":"text/html"});
            res.end(data);
        })
    }
}

let srv = http.createServer(zpracujPozadavek);
srv.listen(PORT);
console.log("Server bezi na adrese http://localhost:"+PORT);