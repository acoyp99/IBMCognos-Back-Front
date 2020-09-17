const express = require('express');
const app = express();
const morgan = require('morgan');
const { post } = require('request');

app.set('port', process.env.PORT || 3000);

// 
app.use(require('./session'));
//app.use(require('/'))

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});