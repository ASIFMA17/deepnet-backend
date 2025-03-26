const express = require('express') ;
const cors = require('cors') ;  //import 'cors'(npm i cors)
const cookieParser = require('cookie-parser') ;  //import cookie-parser(npm i cookie-parser) 
const bodyParser = require('body-parser') ;   // import body-parser(npm i body-parser)  
const app = express() ;

app.use(cors({
    origin:true,
    credentials:true
}));  //using 'cors'
app.use(cookieParser());  //Receving cookie in frontend to backend from the method using cookieParser
app.use(bodyParser.json());  //Middleware to parse incoming request bodies as JSON

app.use(express.urlencoded({extended:true}));   //Receving data in frontend to backend from the method
app.use(express.json());  //(Receving data) convert in json format in backend 

const iteamRoutes = require('./routes/iteamRoutes') ;

app.use(iteamRoutes) ;

//app.use('/public' , express.static('public'));   //send to static files in backend

function appMiddleware(req , res , next) {
    console.log('Application Level Middleware');
    console.log('Hello world');
    next();
}

app.use((req , res , next) => {
    appMiddleware(req , res , next) ;
}) ;

module.exports = app ;