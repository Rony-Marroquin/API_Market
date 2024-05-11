const express = require('express')
const mongoose = require("mongoose")
const morgan = require('morgan');
const cors = require('cors');
const app = express();



const port = process.env.PORT || 3000;

app.set('json spaces', 2);


//rutas
app.get('/', (req,res)=>{
    res.send('conexion con server')
})

//conexion con mongoDB

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://ronymarroquin4991:DwfUVPsnq9L4KdKB@cluster0.h4iqkbw.mongodb.net/').then(db => console.log('conexion exitosa a mongoDB Atlas'))
    .catch(error => console.log('error: ', error))



// inicializar el puerto
app.listen(port, () => {
    console.log('Server listening on port',port)


})


//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

//rutas

app.use(require('../src/routes/products'))




