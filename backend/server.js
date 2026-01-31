const http= require('http');
//  this is import  app in this server
const app = require('./app');
// this is use app
const server = http.createServer(app);

server.listen(3000,()=>{
    console.log('server is runing on 3000' );
});