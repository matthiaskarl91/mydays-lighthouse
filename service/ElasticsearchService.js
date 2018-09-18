const ElasticsearchClient = require('../clients/elasticsearch');
const ElasticQuery = require('../query/ElasticQuery');
const uuid = require('uuid/v1');
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
        "performance":{ "type": "float" },
        "bestpractice": { "type": "float" },
        "seo": { "type": "float" },
        "performance-first-contentful-paint": { "type": "float" },
        "performance-first-meaningful-paint": { "type": "float" },
        "performance-speed-index": { "type": "float" },
        "performance-interactive": { "type": "float" },
        "performance-first-cpu-idle": { "type": "float" },
        "performance-estimated-input-latency": { "type": "float" },
        "performance-render-blocking-resources": { "type": "float" },
        "performance-render-blocking-resources-data": { "type": "array" },
        "performance-uses-responsive-images": { "type": "float" },
        "performance-uses-responsive-images-data": { "type": "array" },
        "performance-offscreen-images": { "type": "float" },
        "performance-offscreen-images-data": { "type": "array" },
        "performance-unminified-css": { "type": "float" },
        "performance-unminified-css-data": { "type": "array" },
        "performance-unminified-js": { "type": "float" },
        "performance-unminified-js-data": { "type": "array" },
        "performance-unused-css-rules": { "type": "integer" }, //save displayValue
        "performance-unused-css-rules-data": { "type": "array" },
        "performance-uses-optimized-images": { "type": "integer"}, //save displayValue
        "performance-uses-optimized-images-data": { "type": "array"},
        "performance-uses-webp-images": { "type": "integer" },
        "performance-uses-rel-preconnect": { "type": "float" },
        "performance-time-to-first-byte": { "type": "float" },
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
        const body = [];
        audits.forEach((audit) => {
            const query = new ElasticQuery();
            query.setTimestamp(timestamp);
            query.setUserAgent(userAgent);
            query.setPage(audit.url);
            query.setPerformance(audit.performance.score);
            body.push({ create: { "_index" : this.indexName, "_type" : this.doctypeName, "_id": uuid() } });
            body.push(query);
        });

        await this.client.addDocuments(body);
    } 
}

module.exports = ElasticsearchService;