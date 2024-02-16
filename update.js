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
        const Email=formData.email;   
        const password=formData.password;
      
        console.log(Email);
        console.log(password);
        
    // await collection.findOne({ fr:from, to: to})
    // .then((user) => {
    //   if (!user) {
    //     console.log('User not found');
    //     res.end("failed");
    //   } else {
        collection.findOneAndUpdate({Email:Email},{$set:{password:password}}).then((result)=>
        {
          if(!result){
            throw err;
          }
          else{
              console.log("updated");
          }
        })
        res.end("user signed in successfully");

});
  }
   else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
      not correct
    `);
  }
});

server.listen(6210, () => {
  console.log('Server running on port 3010');
});