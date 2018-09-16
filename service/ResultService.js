const Report = require('../entity/report');
const Audit = require('../entity/audits');
const Performance = require('../entity/performance');
const BestPractice = require('../entity/bestPractice');
const SEO = require('../entity/seo');
const Accessibility = require('../entity/accessibility');

class ResultService
{
    constructor() {
        this.report = new Report();
    }

    mapResult(result) {
        const audits = result.map(audit => this.mapAudit(audit));
        this.report.setAudits(audits);
        this.report.setConfig(result[0].configSettings);
        this.report.setUserAgent(result[0].userAgent);

        return this.report;
    }

    mapAudit(item) {
        const audit = new Audit();
        const {categories, audits} = item;
        const performance = this.mapPerformance(categories, audits);
        const bestPractice = this.mapBestPractice(categories, audits);
        const seo = this.mapSEO(categories, audits);
        const accessibility = this.mapAccessibility(categories, audits);

        audit
            .setUrl(item.finalUrl)
            .setPerformance(performance)
            .setBestPractice(bestPractice)
            .setSeo(seo)
            .setAccessibility(accessibility);

        return audit;
    }

    mapPerformance({performance}, audits) {
        const myPerformance = new Performance();
        myPerformance.setScore(performance.score);
        myPerformance.setTitle(performance.title);
        const auditData = performance.auditRefs.map(ref => audits[ref.id]);
        myPerformance.setResults(auditData);

        return myPerformance;
    }

    mapBestPractice({"best-practices": bestPractices}, audits) {
        const bestPractice = new BestPractice();
        bestPractice.setScore(bestPractices.score);
        bestPractice.setTitle(bestPractices.title);
        const auditData = bestPractices.auditRefs.map(ref => audits[ref.id]);
        bestPractice.setResults(auditData);

        return bestPractice;
    }

    mapSEO({seo}, audits) {
        const mySeo = new SEO();
        mySeo.setScore(seo.score);
        mySeo.setTitle(seo.title);
        const auditData = seo.auditRefs.map(ref => audits[ref.id]);
        mySeo.setResults(auditData);

        return mySeo;
    }

    mapAccessibility({accessibility}, audits) {
        const myAccessibility = new Accessibility();
        myAccessibility.setScore(accessibility.score);
        myAccessibility.setTitle(accessibility.title);
        const auditData = accessibility.auditRefs.map(ref => audits[ref.id]);
        myAccessibility.setResults(auditData);

        return myAccessibility;
    }
}

module.exports = ResultService;