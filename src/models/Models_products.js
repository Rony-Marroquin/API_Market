const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productsSchema = new Schema({
  
 id:{
    type: String,
    trim: true,
},
name:{
    type: String,
    trim: true,
},
 category:{
    type: String,
    trim: true,
},
price:{
    type: String,
    trim: true,
},
image:{
    type: String,
    trim: true,

},

 stock:{
type: String,
trim: true,
},
});

module.exports = mongoose.model('Product', productsSchema);
