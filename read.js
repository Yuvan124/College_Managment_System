
const http = require('http');
const qs = require('querystring');
const path=require("path");
const collections=require("./mongoose")
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end',async () => {
      const formData = qs.parse(body);
            const Email=formData.email;
            const password=formData.password;
           
      await collections.findOne({
        Email:Email,
        password:password
      }).then((user) => {
        if (!user) {
          console.log('User not found');
          res.end("failed");
        } else {
          res.end("user signed in successfully");
          console.log(user)
        }
      })
      .catch((error) => {
        console.log('Error finding user:', error);
        res.end("invalid email password");
      });


  
    });
  }
   else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
      not correct
    `);
  }
});

server.listen(4106, () => {
  console.log('Server running on port 3010');
});
