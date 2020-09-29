const express = require('express');


const app = express();

app.get('/', (req, res) =>{
    res.send("I Know how to open Node...YAY");
})

app.listen(3000, () => console.log('listening to port 3000'));