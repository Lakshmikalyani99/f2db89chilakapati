var Iphone = require("../models/Iphone") 
// List of all Costumes 
exports.iphone_list = async function(req, res) { 
    try{ 
        theIphones = await Iphone.find(); 
        res.send(theIphones); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific iphone. 
exports.iphone_detail = async function(req, res) { 
  
    console.log("detail"  + req.params.id) 
    try { 
        result = await Iphone.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    }
}; 
 
 
// Handle iphone create on POST. 
exports.iphone_create_post =async function(req, res) { 
    console.log(req.body) 
    let document = new Iphone(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.model = req.body.model; 
    document.color = req.body.color; 
    document.price = req.body.price; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": "Please enter valid details"}`); 
    }   
}; 
 
// Handle iphone delete form on DELETE. 
exports.iphone_delete =async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Iphone.findByIdAndDelete(req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle iphone update form on PUT. 
exports.iphone_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Iphone.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.model)  
               toUpdate.model = req.body.model; 
        if(req.body.color) toUpdate.color = req.body.color; 
        if(req.body.price) toUpdate.price = req.body.price; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 


exports.iphone_view_all_Page = async function(req, res) { 
    try{ 
        theIphones = await Iphone.find(); 
        res.render('iphones', { title: 'Iphone Search Results', results: theIphones }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
exports.iphone_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Iphone.findById( req.query.id) 
        res.render('iphonedetail',  
{ title: 'iphone Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

exports.iphone_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('iphonecreate', { title: 'Iphone Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{"error": "Please enter valid details"}`); 
    } 
}; 

exports.iphone_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Iphone.findById(req.query.id) 
        res.render('iphoneupdate', { title: 'Iphone Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

exports.iphone_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Iphone.findById(req.query.id) 
        res.render('iphonedelete', { title: 'Iphone Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 