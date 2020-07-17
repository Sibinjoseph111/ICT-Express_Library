const express = require("express");
const authorsRouter = express.Router(); 

var router = (nav)=>{

    var authors = [
        {
            name: 'Joseph Barbera',
            img: 'http://api.randomuser.me/portraits/thumb/men/58.jpg'
        }, 
        {
            name: 'J K Rowling',
            img: 'http://api.randomuser.me/portraits/thumb/men/59.jpg'
        }, 
        {
            name: 'Joseph Barbera',
            img: 'http://api.randomuser.me/portraits/thumb/men/58.jpg'
        }
    ]

    authorsRouter.get('/',(req,res)=>{
        res.render('authors',{
            authors,
            title: 'Authors',
            nav
        });
    });

    return authorsRouter;

}

module.exports = router;