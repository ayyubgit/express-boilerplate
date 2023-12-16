const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const middlewares = require('./middlewares');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/public', express.static(path.join(__dirname, '/../public')));
app.set('view engine', 'pug')

const appRoutes = []

const router = require('./lib/router.class')

function route(prefix){
    return prefix ? new router(appRoutes).prefix(prefix) : new router(appRoutes)
}

require('./routes')(route)
require('./routeHandler')(appRoutes,app)

// app.get('/', (req, res) => {
//     res.json({
//         message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
//     });
// });

// app.get('/home', (req, res) => {
//     const fromRoute = "This text comes from route!"

//     res.render('home', { fromRoute });
// })

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);


const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";

module.exports = app;
