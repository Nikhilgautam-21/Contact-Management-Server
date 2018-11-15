const mongoose = require('mongoose')
const Schema =  mongoose.Schema;

const ContactSchema =  new Schema({

    name:{
        type:String
    },
    
    phone:{
        type:String
    },
    email:{

        type:String
        
    },

    address:{

        type:String
    }
 


       
});

const Contact = mongoose.model('contact',ContactSchema);

module.exports = Contact;