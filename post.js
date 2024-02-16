const http = require('http');
const qs = require('querystring');
const collection=require("./mongoose")
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end',async () => {
      const formData = qs.parse(body);
      const data={
        fname:formData.firstName,   
        lname:formData.lastName,
        Email:formData.email,
        password:formData.password,
        Phone:formData.phone,
        DateofBirth:formData.dob

      }
      await collection.insertMany([data]);
      console.log("success");
      res.writeHead(600, {'Content-Type': 'text/html'});
      console.log(`Name: ${formData.firstName}\nlName: ${formData.lastName}\nEmail: ${formData.email}\npassword: ${formData.password}\nPhone: ${formData.phone}\nDateofBirth: ${formData.dob} `);
      res.end(`Name: ${formData.firstName}\nlName: ${formData.lastName}\nEmail: ${formData.email}\npassword: ${formData.password}\nPhone: ${formData.phone}\nDateofBirth: ${formData.dob} `);
    });
  }
   else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
      not correct
    `);
  }
});

server.listen(3765, () => {
  console.log('Server running on port 3010');
});