
const express = require('express');
const path = require('path');
const app = express();
const host = '127.0.0.1';
const port = 8000;

//Enter public static file using path module.
const staticPath = path.join(__dirname, "../public");

//Use static path
// app.use(express.static(staticPath));

// Use pug template engine
// app.set('view engine', 'pug')

// app.get('/',(req, res)=>{
//     res.render('index')
//   });


// //Use hbs template engine
app.set('view engine', 'hbs')

app.get('/',(req, res)=>{
    res.render('index')
  });
  app.get('/about',(req,res)=>{
      res.render('about')
  });


app.get("/", (req,res)=>{
    // res.send(`<h1>This my first express app created my mithun</h1>`)
});
app.listen(port,()=>{
    console.log(`Web server running at  http://${host}:${port}/`)
});