const mongoose = require('mongoose');

const thoiGianDaDatSchema = new  mongoose.Schema(
    {
        times: [Date]
    }
);

const ThoiGianDaDat = mongoose.model('ThoiGianDaDat', thoiGianDaDatSchema);
module.exports = ThoiGianDaDat;