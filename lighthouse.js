const AuditService = require('./service/AuditService');
const ResultService = require('./service/ResultService');
const ReportRepository = require('./repository/ReportRepository');
const ElasticSearchClient = require('./clients/elasticsearch');
const ElasticSearchService = require('./service/ElasticsearchService');

class Controller
{
    constructor()
    {
        this.resultService = new ResultService();
    }

    async start()
    {
        try {
            const result = await AuditService.performAudits();
            const mappedResult = this.resultService.mapResult(result);
            //const reportRepository = new ReportRepository();
            //const persist = await reportRepository.createReport(mappedResult);
            /*var elasticSearchClient = new ElasticSearchClient();
            if (!await elasticSearchClient.indexExist('lighthouse')) {
                await elasticSearchClient.
            }*/
            const elasticSearchService = new ElasticSearchService();
            await elasticSearchService.init();
            await elasticSearchService.save(mappedResult);
            const bla = 1;
            process.exit();
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new Controller();
