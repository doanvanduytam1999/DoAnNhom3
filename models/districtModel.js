const mongoose = require('mongoose');


const districtSchema = new mongoose.Schema(
    {
        districtName: {
            type: String,
            rerequired: [true, 'Please provide district time']
        },
        cityID:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "City"
        },
    },

);
districtSchema.virtual('agencys', {
    ref: 'Agency',
    localField: '_id', 
    foreignField: 'districtID',
})


const District = mongoose.model('District', districtSchema);

module.exports = District;