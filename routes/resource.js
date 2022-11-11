var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var iphone_controller = require('../controllers/Iphone'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/iphone', iphone_controller.iphone_create_post); 
 
// DELETE request to delete iphone. 
router.delete('/iphone/:id', iphone_controller.iphone_delete); 
 
// PUT request to update iphone. 
router.put('/iphone/:id', iphone_controller.iphone_update_put); 
 
// GET request for one iphone. 
router.get('/iphone/:id', iphone_controller.iphone_detail); 
 
// GET request for list of all iphone items. 
router.get('/iphone', iphone_controller.iphone_list); 
 
module.exports = router; 
 