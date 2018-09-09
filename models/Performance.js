const mongoose = require('mongoose');

const auditSchema = mongoose.Schema({
    score: Number,
    title: String,
    //audits: {type:Array},
    audits: [{
        description: String,
        //details: String,
        errorMessage: String,
        explanation: String,
        id: String,
        rawValue: Number,
        score: Number,
        scoreDisplayMode: String,
        title: String,
        warnings: String
    }],
    _audit: {type: mongoose.Schema.Types.ObjectId, ref: 'Audit'}
});

module.exports = mongoose.model('Performance', auditSchema);