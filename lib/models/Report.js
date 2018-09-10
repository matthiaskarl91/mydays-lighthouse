const mongoose = require('mongoose');

const reportSchema = mongoose.Schema({
    createDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Report', reportSchema);