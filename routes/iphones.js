var express = require('express'); 
const iphone_controlers= require('../controllers/Iphone'); 
var router = express.Router(); 
 
/* GET costumes */ 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
router.get('/', iphone_controlers.iphone_view_all_Page ); 
router.get('/detail', iphone_controlers.iphone_view_one_Page); 
router.get('/create',secured, iphone_controlers.iphone_create_Page); 
router.get('/update',secured, iphone_controlers.iphone_update_Page); 

router.get('/delete',secured, iphone_controlers.iphone_delete_Page); 
module.exports = router; 