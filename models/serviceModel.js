const mongoose = require('mongoose');
const { collection } = require('./userAdminModel');


const ServiceSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide service name']
        },
        unit: {
            type: String,
        },
        price: {
            type: String,
            required: [true, 'Please provide price']
        },
        guarantee: {
            type: String,
        },
        typeServiceID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "TypeService"
        }
    }, 
    
);


const Service = mongoose.model('Service', ServiceSchema);

module.exports = Service;