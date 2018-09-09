const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const assert = require('assert');
const ObjectId = mongoose.Schema.ObjectId;
const ReportModel = require('../models/Report');
const AuditModel = require('../models/Audits');

class ReportRepository
{
    constructor()
    {
        this.db = mongoose.connect('mongodb://localhost:27017/audit-manager');
    }

    async createReport(reportData)
    {
        
        const report = await this.saveReport();
        const audits = await this.saveAudits(reportData.getAudits(), report);
        /*const auditPromises = reportData.getAudits().map(async audit => {
            const auditObj = new AuditModel({
                _report: report._id,
                url: audit.getUrl(),
                categories: 'todos'
            });;
            try {
                return await auditObj.save();
            } catch (e) {
                console.log(e);
            }
        });
        const audits = await Promise.all(auditPromises);*/

        console.info('New report added');
        mongoose.connection.close();
        return report;
    }

    async saveReport() {
        const report = new ReportModel({
            createDate: new Date().getTime()
            //audits: auditArray
        });
        try {
            return await report.save();
        } catch (e) {
            console.log(e);
        }
    }

    async saveAudits(audits, {id}) {
        const auditPromises = await audits.map(async audit => {
            const auditObj = new AuditModel({
                _report: id,
                url: audit.getUrl(),
                categories: 'todos'
            });;
            try {
                return await auditObj.save();
            } catch (e) {
                console.log(e);
            }
        });

        return await Promise.all(auditPromises);
    }
}

module.exports = ReportRepository;