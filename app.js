const { response } = require('express');
const express = require('express');

const port='3000';
const app = express();
app.listen(port);
console.log('server running at ' + port);
app.get('/',(req,res)=>{
res.send('halo there');



})