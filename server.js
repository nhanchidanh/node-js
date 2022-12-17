const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!!')
})
app.get('/about', (req, res) =>{
    res.send('toi la Danh')
})

app.listen(port, () => {
    console.log(`Exampple app listening at port: http://localhost:${port}`);
})