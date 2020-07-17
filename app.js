const express = require("express");

const nav = 
[
    {link: '/books', name: 'Books'},
    {link: '/authors', name: 'Authors'},
    {link: '/addbook',name: 'Add Book'}
]

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);
const addBookRouter = require('./src/routes/addBookRoutes')(nav);

const app = express();

app.use(express.static('./public'))
app.set("view engine", 'ejs')
app.set('views','./src/views')
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/addbook', addBookRouter);

app.get('/',(req,res)=>{
    res.render(`index`,
    {
        nav,
        title: 'Library'
    });
});



app.listen(3000,()=>{
    console.log('App started')
});