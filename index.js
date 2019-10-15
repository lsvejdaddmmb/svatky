const http = require('http');

const PORT = 8888;

function zpracujPozadavek(req, res) {

}

let srv = http.createServer(zpracujPozadavek);
srv.listen(PORT);
console.log("Server bezi na adrese http://localhost:"+PORT);