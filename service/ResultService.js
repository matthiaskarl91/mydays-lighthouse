const Report = require('../entity/report');
const Audit = require('../entity/audits');
const Performance = require('../entity/performance');

class ResultService
{
    constructor() {
        this.report = new Report();
    }

    mapResult(result)
    {
        const audits = result.map(audit => this.mapAudit(audit));
        this.report.setAudits(audits);

        return this.report;
    }

    mapAudit(item)
    {
        const audit = new Audit();
        const performance = this.mapPerformance(item);
        audit.setUrl(item.finalUrl).setPerformance(performance);
        return audit;
    }

    mapPerformance(resultItem)
    {
        const {categories, audits} = resultItem;
        const performance = new Performance();
        performance.setScore(categories.performance.score);
        performance.setTitle(categories.performance.title);
        const auditData = categories.performance.auditRefs.map(ref => audits[ref.id]);
        performance.setAudits(auditData);

        return performance;
    }
}

module.exports = ResultService;