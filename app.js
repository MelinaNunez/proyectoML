const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 4000

app.listen(4000, () => console.log('Servidor corriendo'));



app.use('/public', express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/home.html'));
})
app.get('/login',(req,res)=> {
    res.sendFile(path.join(__dirname,'/views/login.html'))
})
app.get('/registro',(req,res)=> {
    res.sendFile(path.join(__dirname,'/views/registro.html'))
})