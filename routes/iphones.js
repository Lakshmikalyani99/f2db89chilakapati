var express = require('express'); 
const iphone_controlers= require('../controllers/Iphone'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', iphone_controlers.iphone_view_all_Page ); 
module.exports = router; 