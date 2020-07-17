const express = require("express");
const addBookRouter = express.Router(); 

var router = (nav)=>{

    addBookRouter.get('/',(req, res)=>{
        res.render('addbook',{
            nav, 
            title: 'Add New Book'
        })
    });

    return addBookRouter;

}

module.exports = router;