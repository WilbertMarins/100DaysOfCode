/* const http = require('http');

const hostname ='127.0.0.1';
const port = 3000;

const server = http.createServer((req,res)=>{
    res.stutusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Faaala, sou Wilbert Marins, mas pode me chamar de Wil');
});

server.listen(port,hostname,()=>{
    console.log("O servidor tá ON !");
})
*/

const express = require('express')
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'))
})
router.get('/sobre', function(req,res){
    res.sendFile(path.join(__dirname+'/sobre.html'))
})

app.use('/',router);

app.listen(process.env.port||3000);
console.log("O servidor tá ON !")