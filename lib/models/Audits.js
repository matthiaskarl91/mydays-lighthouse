const mongoose = require('mongoose');

const auditSchema = mongoose.Schema({
    _report: { type: mongoose.Schema.Types.ObjectId, ref: 'Report' },
    url: String
});

module.exports = mongoose.model('Audit', auditSchema);