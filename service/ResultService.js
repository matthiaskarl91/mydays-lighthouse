const Report = require('../entity/report');
const Audit = require('../entity/audits');

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
        audit.setUrl(item.finalUrl).setCategories(item.categories);

        return audit;
    }
}

module.exports = ResultService;