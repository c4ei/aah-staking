// npm init -y 
// npm install express cors
// node server.js

const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
var cors = require('cors');
app.use(cors());


app.use('/', express.static( path.join(__dirname, 'client/build') ))
app.get('/', function(req,resp){
  resp.sendFile( path.join(__dirname, 'client/build/index.html') )
}) 

// app.use( '/', express.static( path.join(__dirname, './client/build') ))

// app.use( '/react', express.static( path.join(__dirname, 'react-project/build') ))

// app.get('/react', function(req,resp){
//   resp.sendFile( path.join(__dirname, 'react-project/build/index.html') )
// })

//이 코드는 항상 가장 하단에 놓아야 잘됩니다. 
// app.get('*', function (req, resp) {
//   resp.sendFile(path.join(__dirname, '/index.html'));
// });


app.listen(3001, function () {
  console.log('listening on 3001')
}); 
