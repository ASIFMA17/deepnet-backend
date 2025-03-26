const mongoose = require('mongoose');  //import mongoose
const validator = require('validator');

const iteamSchema = new mongoose.Schema({    //create structure in one document
    name: {
        type: String,
        required: [true, "Please enter name"],
    },
    price: {
        type: String,
        required: [true, "Please enter price"],
    },
    category: {
        type: String,
        required: [true, "Please enter category"]
    },
    description: {
        type: String,
        required: [true, "Please enter small description"]
    }

})

module.exports = mongoose.model('iteam', iteamSchema);