const mongoose = require('mongoose');


const TypeServiceSchema = new mongoose.Schema(
    {
        typeServiceName: {
            type: String,
            required: [true, 'Please provide type service']
        },
        
    }
);
TypeServiceSchema.virtual('services', {
    ref: 'Service',
    localField: '_id', 
    foreignField: 'typeServiceID',
})

const TypeService = mongoose.model('TypeService', TypeServiceSchema);
module.exports = TypeService;