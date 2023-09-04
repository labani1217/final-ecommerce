const express = require('express');
const User = require('../models/User');
const passport = require('passport');
const router = express.Router() //mini instance

//to show the form of signup
router.get('/register' , (req, res)=>{
    res.render('auth/signup');
})

//actually want to register a user in DB
router.post('/register' , async(req,res)=>{
    try{
        let {email,password, username , role} = req.body;
        const user = new User({email,username,role})
        const newUser = await User.register(user , password);
       // res.redirect('/login');
       req.login( newUser, function(err){
        if(err){return next(err)}
        req.flash('success' , 'welcome , you are registerd succesfully');
        return res.redirect('/products');
       })

    }
   catch(e){
    req.flash('error' , e.message);
    return res.redirect('/signup');
   }
})


//to get login form
router.get('/login' , (req, res)=>{
    res.render('auth/login');
})


//to actually login via DB
router.post('/login' , 
    passport.authenticate('local', {   
        failureRedirect: '/login', 
        failureMessage: true
    }),
(req,res)=>{
    //console.log(req.user);
    req.flash('success' , 'welcome Back')
    res.redirect('/products');
})

//logout
router.get('/logout' , (req , res)=>{
    ()=>{
        req.logout();
    }
    req.flash('success' , 'Goodby shopping , see you again')
    res.redirect('/login');

})

module.exports = router;