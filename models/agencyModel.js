const mongoose = require('mongoose');


const agencySchema = new mongoose.Schema(
    {
        address: {
            type: String,
            rerequired: [true, 'Please provide address']
        },
        districtID: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"District"
        }
        
    },

);


const Agency = mongoose.model('Agency', agencySchema);
module.exports = Agency;