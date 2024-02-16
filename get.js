
var http = require('http')
var url = require('url')
var querystring = require('querystring')
var port = 4011;

http.createServer((req, res) => {
    // var path = url.parse(req.url).pathname;
    // console.log('path recieved ' + path)
    var query = url.parse(req.url).query;
    console.log(query);
    var name = querystring.parse(query)["email"];
    var pass = querystring.parse(query)["pass"];
    res.write('hello ' + name + ' your email is ' + pass);
    res.end()

}).listen(port, (error) => {
    if (error) {
        console.log("error")
    }
    else {
        console.log("server running on " + port);
    }
})