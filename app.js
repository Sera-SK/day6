const { response } = require('express');
const express = require('express');
const morgan = require('morgan')

const port = '3000';
const app = express();


//server setup

app.set('view engine', 'ejs');


app.listen(port);
console.log('server running at ' + port);

app.use(morgan('dev'))


//homepage //all blogs----------------------
app.get('/', (req, res) => {

    let bloggarray = [

        { heading: 'heading1', body:'body1', author:'me' },
        { heading: 'heading1', body:'body1', author:'me' },
        { heading: 'heading1', body:'body1', author:'me' },
        { heading: 'heading1', body:'body1', author:'me' },
    ]
    res.render('index', { title: 'home', blogs: bloggarray });  
});



//blog page //single blog ------------------------
app.get('/blog', (req, res) => {
    res.render('blog', { title: 'blog' });
});


//create page
app.get('/create', (req, res) => {
    res.render('create', { title: 'create' });

});

//editor page
app.get('/editor', (req, res) => {
    res.render('editor', { title: 'editor' });

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