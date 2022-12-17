import express from 'express';
import configViewEngine from './configs/viewEngine';
// import { join } from 'path';

const app = express()
const port = 3000

configViewEngine(app);

app.get('/', (req, res) => {
    // res.sendFile(join(__dirname, './index.html'))
    res.render('index.ejs')
})
app.get('/about', (req, res) =>{
    res.send('toi la Danh')
})

app.listen(port, () => {
    console.log(`Exampple app listening at port: http://localhost:${port}`);
})