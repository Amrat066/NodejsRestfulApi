const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {  // The property name should be 'content', not 'Content'
        type: String,
        required: true,
    },
    user: {
         type: mongoose.Schema.Types.ObjectId, 
         ref: 'User' 
    },
    category: {
         type: mongoose.Schema.Types.ObjectId,
          ref: 'Category'
     },
    created_At:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Post', postSchema);
