const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const assert = require('assert');
const ObjectId = mongoose.Schema.ObjectId;

class ReportRepository
{
    constructor()
    {
        this.db = mongoose.connect('mongodb://localhost:27017/contact-manager');
        this.reportSchema = mongoose.Schema({
            timestamp: {type: Date},
            audits: {type: ObjectId, ref: this.auditSchema}
        });
        this.auditSchema = mongoose.Schema({
            url: {type: String},
            categories: {type: Array}
        });

        this.Report = mongoose.model('Report', this.reportSchema);
        this.Audit = mongoose.model('Audit', this.auditSchema);
    }

    createReport(report)
    {
        this.Report.create(report, (err) => {
            assert.equal(null, err);
            console.info('New contact added');
            this.db.disconnect();
        })
    }
}

module.exports = ReportRepository;