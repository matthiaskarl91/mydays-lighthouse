const ElasticsearchClient = require('../clients/elasticsearch');
const doctype = {
    "mappings": {
        "doc": {
            "properties": {
                "timestamp": {
                    "type":   "date", 
                    "format": "strict_date_optional_time||epoch_millis"
                },
                "userAgent": { "type": "text" },
                "page": [{
                    "properties": {
                        "route": { "type": "text" },
                        "performance": {
                            "properties": {
                                "score": { "type": "float" },
                                "title": { "type": "text" },
                                "auditItems": { "type": "nested" }
                                /*"auditItems": [
                                    {
                                        "id": { "type": "text" },
                                        "score": { "type": "float" },
                                        "title": { "type": "text" },
                                        "description": { "type": "text" },
                                        "rawValue": { "type": "float" },
                                    }
                                ]*/
                            }
                        }
                    }
                }]
            }
        }
    }
};

class ElasticsearchService {
    constructor() {
        this.indexName = 'lighthouse';
        this.client = new ElasticsearchClient();
    }

    async init() {
        if (!await this.client.indexExist(this.indexName)) {
            await this.client.createIndex(this.indexName);
            await this.client.putMapping(this.indexName, doctype, {});
        }
    }

    async save(mappedResult) {
        const body = {
            "timestamp": mappedResult.timestamp,
            "userAgent": mappedResult.userAgent,
            "page": audits.map((audit) => ({
                "route": audit.url,
                "performance": {
                    "score": audit.performance.score,
                    "title": audit.performance.title,
                    "auditItems": audit.performance.audits
                }
            }))
        };

        await this.client.addDocument(this.indexName, doctype, body);
    } 
}

module.exports = ElasticsearchService;