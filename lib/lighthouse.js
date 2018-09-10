const AuditService = require('./service/AuditService');
const ResultService = require('./service/ResultService');
const ReportRepository = require('./repository/ReportRepository');

class Controller {
    constructor() {
        this.resultService = new ResultService();
    }

    async start() {
        try {
            const result = await AuditService.performAudits();
            const mappedResult = this.resultService.mapResult(result);
            const reportRepository = new ReportRepository();
            const persist = await reportRepository.createReport(mappedResult);
            const bla = 1;
            process.exit();
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new Controller();