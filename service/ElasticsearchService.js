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
        "firstContentfullPaint": { "type": "float" },
        "firstMeaningfullPaint": { "type": "float" },
        "speedIndex": { "type": "float" },
        "interactive": { "type": "float" },
        "firstCPUIdle": { "type": "float" },
        "estimatedInputLatency": { "type": "float" },
        "renderBlockingResources": { "type": "float" },
        "renderBlockingResourcesData": { "type": "array" },
        "usesResponsiveImages": { "type": "float" },
        "usesResponsiveImagesData": { "type": "array" },
        "offscreenImages": { "type": "float" },
        "offscreenImagesData": { "type": "array" },
        "unminifiedCss": { "type": "float" },
        "unminifiedCssData": { "type": "array" },
        "unminifiedJS": { "type": "float" },
        "unminifiedJSData": { "type": "array" },
        "unusedCssRules": { "type": "integer" }, //save displayValue
        "unusedCssRulesData": { "type": "array" },
        "usesOptimizedImages": { "type": "integer"}, //save displayValue
        "usesOptimizedImagesData": { "type": "array"},
        "usesWebpImages": { "type": "integer" },
        "usesRelPreconnect": { "type": "float" },
        "timeToFirstByte": { "type": "float" },
        "totalByteWeight": { "type": "float" }, //save displayValue
        "totalByteWeightData": { "type": "array" },
        "domSize": { "type": "integer" },
        "bootupTime": { "type": "float" },
        "mainthreadWorkBreakdown": { "type": "float" },
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