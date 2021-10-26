const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const port = 3000;
var path = require('path');
const app = express();

app.use(session({secret: 'wilzinhbrabo'}));

//acesso os dados enviados via POST
app.use(bodyParser.urlencoded({extend:true}));


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname,'public')));
app.set('views',path.join(__dirname, '/views'));

var login = "admin";
var senha = "123"; 


app.post('/',(req,res)=>{
    //console.log(req.body.login);

    if(req.body.login==login && req.body.password==senha){
        //logado com sucesso
        //console.log("fé q logou mestre");
        
        req.session.login = login;
        //res.redirect('/');
        res.render('logado',{login:login});
    }
    else{
        res.render('index');
    }


})

app.get('/',(req,res)=>{
    if(req.session.login){
        res.render('logado',{login:login});
        console.log("O meu usuário logado é:"+req.session.login);
    }
    else{
        res.render('index');
    }
})

app.get('/vamos',(req,res)=>{
        res.render('teste');
})

app.listen(port,()=>{
    console.log('servidor rodando');
})