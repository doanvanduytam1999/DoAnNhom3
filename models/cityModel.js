const mongoose = require('mongoose');


const citySchema = new mongoose.Schema(
    {
        cityName: {
            type: String,
            rerequired: [true, 'Please provide city time']
        }
    },

);

citySchema.virtual('districts', {
    ref: 'District',
    localField: '_id', 
    foreignField: 'cityID',
});


const City = mongoose.model('City', citySchema);

module.exports = City;