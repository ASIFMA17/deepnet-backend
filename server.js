// Entry point ===========================================>
    const dotenv = require('dotenv') ; //import env file
//require('dotenv').config();
const PORT = process.env.PORT || 1700 ;
const app = require('./index') ;  //app import on index.js page
const databaseConnecton = require('./config/databaseConnection');
dotenv.config({path:'./config/.env'}) ; //path of env file

databaseConnecton() ;

app.listen(PORT , () => {
    console.log(`Server is running on port ${process.env.PORT}`) ;
});