const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const assert = require('assert');
const ObjectId = mongoose.Schema.ObjectId;

class ReportRepository
{
    constructor()
    {
        this.db = mongoose.connect('mongodb://localhost:27017/audit-manager');
        this.reportSchema = mongoose.Schema({
            _id: ObjectId,
            timestamp: {type: Date},
            //audits: [{type: ObjectId, ref: 'Audit'}]
        });
        this.auditSchema = mongoose.Schema({
            _report: {type: Number, ref: 'Report'},
            url: {type: String},
            categories: {type: Array}
        });

        this.Report = mongoose.model('Report', this.reportSchema);
        this.Audit = mongoose.model('Audit', this.auditSchema);
    }

    async createReport(reportData)
    {
        //const report = await this.Report.create({timestamp:reportData.timestamp, _id: new mongoose.Types.ObjectId()})
        const report = new this.Report({
            timestamp: new Date(),
            _id: new mongoose.Types.ObjectId(),
            //audits: []
        });
        try {
            let newReport = await report.save();
        } catch (e) {
            console.log(e);
        }
/*
        //const auditPromises = report.getAudits().map(audit => this.createAudit(audit, report._id));
        const auditPromises = report.getAudits().map(async audit => {
            return await this.Audit.create({_report: report._id, url: 'bla', categories: []});
        });

        const audits = await Promise.all(auditPromises);
*/
        //const report = await this.Report.create(report);
        //const audit = await this.Audit.create(auditData);
        assert.equal(null, newReport);
        console.info('New report added');
        this.db.disconnect();
        return report;
    }

    async createAudit(audit, reportId)
    {
        return await this.Audit.create({...audit, _report: reportId});
    }
}

module.exports = ReportRepository;