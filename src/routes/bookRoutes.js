const express = require("express");
const booksRouter = express.Router(); 

var router = (nav)=>{

    var books = [
        {
            title: 'Tom & Jerry',
            author: 'Joseph Barbera',
            genre: 'Cartoon',
            img: 'http://api.randomuser.me/portraits/thumb/men/58.jpg'
        }, 
        {
            title: 'Harry Potter',
            author: 'J K Rowling',
            genre: 'Fantasy',
            img: 'http://api.randomuser.me/portraits/thumb/men/59.jpg'
        }, 
        {
            title: 'Tom & Jerry',
            author: 'Joseph Barbera',
            genre: 'Cartoon',
            img: 'http://api.randomuser.me/portraits/thumb/men/58.jpg'
        }
    ]
    
    booksRouter.get('/',(req,res)=>{
        res.render('books',
        {
            nav,
            title: 'Books',
            books
        });
    }); 
    
    booksRouter.get('/:id',(req,res)=>{
        res.render('book',{
            nav,
            title: 'Books',
            book: books[req.params.id]
    
        })
    });

    return booksRouter;

}


module.exports = router;


