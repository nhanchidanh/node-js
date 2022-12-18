import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRouter from './route/web'
// import connection from './configs/connectDB';

require('dotenv').config();

const app = express()
const port = process.env.PORT || 8080;

//setup view engine
configViewEngine(app);

//init web route
initWebRouter(app);

app.listen(port, () => {
    console.log(`Exampple app listening at port: http://localhost:${port}`);
})