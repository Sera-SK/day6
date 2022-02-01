const { response } = require('express');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const port = '3000';
const app = express();


//server setup

app.set('view engine', 'ejs');


const dbURI = 'mongodb://krupa:hiii@cluster0.6cobp.mongodb.net/cms?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {

        console.log('database connected');

    })
    .catch(err => {
        console.log(err);
    })




app.listen(port);
console.log('server running at ' + port);

app.use(morgan('dev'))
//static
app.use(express.static('public'));

//homepage //all blogs----------------------
app.get('/', (req, res) => {

    let blogarray = [

        { heading: 'heading1', body:'body1', author:'me' },
        { heading: 'heading1', body:'body1', author:'me' },
        { heading: 'heading1', body:'body1', author:'me' },
        { heading: 'heading1', body:'body1', author:'me' },
    ]
    res.render('index', { title: 'home', blogs: blogarray });  
});



//blog page //single blog ------------------------
app.get('/blog', (req, res) => {
    let blogarray = [

        { heading: 'heading1', body:'body1', author:'me' },
        { heading: 'heading1', body:'body1', author:'me' },
        { heading: 'heading1', body:'body1', author:'me' },
        { heading: 'heading1', body:'body1', author:'me' },
    ]
    res.render('blog', { title: 'blog', blogs:blogarray });
});


//create page
app.get('/create', (req, res) => {
    res.render('create', { title: 'create' });

});

//editor page
app.get('/editor', (req, res) => {
    let blogarray = [

        { heading: 'heading1', body:'body1', author:'me' },
        { heading: 'heading1', body:'body1', author:'me' },
        { heading: 'heading1', body:'body1', author:'me' },
        { heading: 'heading1', body:'body1', author:'me' },
    ]
    res.render('editor', { title: 'editor', blogs:blogarray });
});



//TEST //all blogs----------------------
app.get('/test', (req, res) => {
    const blog = {
        heading: 'heading1',
        body: 'something',
        author: 'name',

    }


    res.render('test', { title: 'test', blog: blog });
});



//middleware
app.use((req, res) => {
    res.send('oops!')
})