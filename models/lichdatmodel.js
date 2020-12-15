const mongoose = require('mongoose');


const lichDatSchema = new mongoose.Schema(
    {
        time: {
            type: String,
            required: [true, 'Please provide service time']
        },
        serviceID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Service"
        },
        cityID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "City"
        },
        districtID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "District"
        },
        agencyID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Agency"
        },
        cunstomerID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserCustomerSchema"
        },
        note: String,
        status: String
    },

);


const LichDat = mongoose.model('LichDat', lichDatSchema);

module.exports = LichDat;