const ElasticsearchClient = require('../clients/elasticsearch');
const ElasticQuery = require('../query/ElasticQuery');
/*const doctype = {
    "mappings": {
        "doc": {
            "properties": {
                "timestamp": {
                    "type":   "date", 
                    "format": "epoch_millis"
                },
                "userAgent": { "type": "text" },
                "page": [{
                    "properties": {
                        "route": { "type": "text" },
                        "performance": {
                            "properties": {
                                "score": { "type": "float" },
                                "title": { "type": "text" },
                                //"auditItems": { "type": "nested" }
                                "auditItems": [{
                                    "properties": {
                                        "id": { "type": "text" },
                                        "score": { "type": "float" },
                                        "title": { "type": "text" },
                                        "description": { "type": "text" },
                                        "rawValue": { "type": "float" },
                                    }
                                }]
                            }
                        }
                    }
                }]
            }
        }
    }
};*/

const doctype = {
    properties: {
        "timestamp": { "type": "date", "format": "epoch_millis" },
        "userAgent": { "type": "text" },
        "page": { "type": "text" },
        "performance":{ "type": "float" }
    }
};

class ElasticsearchService {
    constructor() {
        this.indexName = 'lighthouse';
        this.client = new ElasticsearchClient();
        this.doctype = doctype;
        this.doctypeName = 'mydays_audits';
    }

    async init() {
        if (!await this.client.indexExist(this.indexName)) {
            await this.client.createIndex(this.indexName);
            await this.client.putMapping(this.indexName, this.doctypeName, this.doctype);
        }
    }

    async save({timestamp, userAgent, audits}) {
        const body = audits.map((audit) => {
            const query = new ElasticQuery();
            query.setTimestamp(timestamp);
        })



        const body = audits.map((audit) => ({
            timestamp,
            userAgent,
            "page": audit.url,
            "performance": audit.performance.score
        }));

        await this.client.addDocuments(
            this.indexName, this.doctypeName, body);
    } 
}

module.exports = ElasticsearchService;