const AuditService = require('./service/AuditService');
const ResultService = require('./service/ResultService');
const ElasticSearchService = require('./service/ElasticsearchService');
const winston = require('winston');

class Controller
{
    constructor()
    {
        this.resultService = new ResultService();
        this.logger = winston.createLogger({
            transports: [
                new winston.transports.File({ filename: 'logs/prod.log'})
            ]
        });
    }

    async start()
    {
        try {
            const result = await AuditService.performAudits();
            const mappedResult = this.resultService.mapResult(result);
            
            const elasticSearchService = new ElasticSearchService();
            await elasticSearchService.init();
            await elasticSearchService.save(mappedResult);
            
            this.logger.info('Success');
            process.exit();
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new Controller();
