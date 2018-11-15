const Contact = require('../models/contact')
const express=  require('express');

const router = express.Router();    


router.get('/contact', function(req, res) {
  
  
    Contact.find({}).then(eachOne=>{
    res.json( eachOne  );
  })

});



router.post('/addcontact',function(req,res){

      Contact.create(req.body).then(function(con){
      //Contact.findOne({_id:req.params.id}).then(function(contact){
        res.send(con);
    
    })
})


router.delete('/delete/:id',function(req,res){

  Contact.findByIdAndRemove({_id:req.params.id}).then(function(contact){
    res.status(200).send( contact)
  }).catch(function(err){
    res.status(400).send(err)
  })
})



router.put('/update/:id',function(req,res){

  Contact.findOneAndUpdate({_id:req.params.id},req.body,{new:true}).then(function(contact){

    res.send(contact) 
  })
})

module.exports= router;