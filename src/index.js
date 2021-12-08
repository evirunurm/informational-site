const http = require('http');
const fs = require("fs");


const indexHTML = './index.html';
const aboutHTML = './about.html';
const contactMeHTML = './contact-me.html';
const NotFoundHTML = './404.html';


http.createServer( (req, res) => {
    switch (req.url) {
        case '/':
            renderHTML(indexHTML, req, res);
            break;
        case '/about':
            renderHTML(aboutHTML, req, res);
            break;
        case '/contact-me':
            renderHTML(contactMeHTML, req, res);
            break;
            default:
                renderHTML(NotFoundHTML, req, res);
    }
}).listen(8080);


// FACTORY FUNCTIONS
const renderHTML = (URL, req, res) => {
    fs.readFile(URL, (error, data) => {
        res.writeHead(res.statusCode, { "Content-Type" : "text/html" });
        if (error) { console.log(error); res.write(`Error ${ error.message }`);  res.end(); return;}
        res.write(data);
        res.end();
    });
}

