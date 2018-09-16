const AuditService = require('./service/AuditService');
const ResultService = require('./service/ResultService');
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
            
            const elasticSearchService = new ElasticSearchService();
            await elasticSearchService.init();
            await elasticSearchService.save(mappedResult);
            process.exit();
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new Controller();
