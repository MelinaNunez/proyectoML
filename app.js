const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 2100

app.listen(port, () => console.log(`Abriendo servidor en https://localhost:${port}`));



app.use('/public', express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/home.html'));
})
app.get('/login',(req,res)=> {
    res.sendFile(path.join(__dirname,'/views/login.html'))
})
app.get('/register',(req,res)=> {
    res.sendFile(path.join(__dirname,'/views/register.html'))
})