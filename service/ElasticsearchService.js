const ElasticsearchClient = require('../clients/elasticsearch');
const ElasticQueryMapper = require('./ElasticQueryMapper');
const uuid = require('uuid/v1');
const config = require('../config');

const doctype = {
    properties: {
        "timestamp": { "type": "date", "format": "epoch_millis" },
        "userAgent": { "type": "text" },
        "page": { "type": "text" },
        "performance":{ "type": "float" },
        "bestpractice": { "type": "float" },
        "seo": { "type": "float" },
        "firstContentfulPaint": { "type": "float" },
        "firstMeaningfulPaint": { "type": "float" },
        "speedIndex": { "type": "float" },
        "interactive": { "type": "float" },
        "firstCPUIdle": { "type": "float" },
        "estimatedInputLatency": { "type": "float" },
        "renderBlockingResources": { "type": "float" },
        "renderBlockingResourcesData": {
            "type": "nested",
            "properties": {
                "totalBytes": { "type": "integer" },  
                "url": { "type": "text" },
                "wastedMs": { "type": "integer" }
            }
        },
        "usesResponsiveImages": { "type": "float" },
        "usesResponsiveImagesData": {
            "type": "nested",
            "properties": {
                "totalBytes": { "type": "integer" },  
                "url": { "type": "text" },
                "wastedBytes": { "type": "integer" },
                "wastedPercent": { "type": "float" }
            }
        },
        "offscreenImages": { "type": "float" },
        "offscreenImagesData": {
            "type": "nested",
            "properties": {
                "totalBytes": { "type": "integer" },  
                "url": { "type": "text" },
                "wastedBytes": { "type": "integer" }
            }
        },
        "unminifiedCss": { "type": "float" },
        "unminifiedCssData": {
            "type": "nested",
            "properties": {
                "totalBytes": { "type": "integer" },  
                "url": { "type": "text" },
                "wastedBytes": { "type": "integer" },
                "wastedPercent": { "type": "float" }
            }
        },
        "unminifiedJS": { "type": "float" },
        "unminifiedJSData": {
            "type": "nested",
            "properties": {
                "totalBytes": { "type": "integer" },  
                "url": { "type": "text" },
                "wastedBytes": { "type": "integer" },
                "wastedPercent": { "type": "float" }
            }
        },
        "unusedCssRules": { "type": "integer" }, //save displayValue
        "unusedCssRulesData": {
            "type": "nested",
            "properties": {
                "totalBytes": { "type": "integer" },  
                "url": { "type": "text" },
                "wastedBytes": { "type": "integer" },
                "wastedPercent": { "type": "float" }
            }
        },
        "usesOptimizedImages": { "type": "integer"}, //save displayValue
        "usesOptimizedImagesData": {
            "type": "nested",
            "properties": {
                "fromProtocol": { "type": "boolean" },  
                "isCrossOrigin": { "type": "boolean" },
                "totalBytes": { "type": "integer" },
                "url": { "type": "text" },
                "wastedBytes": { "type": "integer" }
            }
        },
        "usesWebpImages": { "type": "integer" },
        "usesRelPreconnect": { "type": "float" },
        "timeToFirstByte": { "type": "float" },
        "totalByteWeight": { "type": "float" }, //save displayValue
        "totalByteWeightData": {
            "type": "nested",
            "properties": {
                "totalBytes": { "type": "integer" },  
                "url": { "type": "text" },
                "totalMs": { "type": "float" }
            }
        },
        "domSize": { "type": "integer" },
        "bootupTime": { "type": "float" },
        "mainthreadWorkBreakdown": { "type": "float" },
        "fontsizeData": {
            "type": "nested",
            "properties": {
                "coverage": { "type": "text" },
                "fontSize": { "type": "text" },
                "selector": { "type": "text" },
                "source": { "type": "text" },
            }
        }
    }
};

class ElasticsearchService {
    constructor() {
        this.indexName = config.INDEX_NAME;
        this.client = new ElasticsearchClient();
        this.doctype = doctype;
        this.doctypeName = config.DOCTYPE_NAME;
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
            const queryMapper = new ElasticQueryMapper();
            queryMapper.setData(timestamp, userAgent, audit);
            queryMapper.setPerformanceData(audit);
            queryMapper.setBestPracticeData(audit);
            queryMapper.setSEO(audit);
            queryMapper.setAccessibility(audit);
            const query = queryMapper.getQuery();

            body.push({ create: { "_index" : this.indexName, "_type" : this.doctypeName, "_id": uuid() } });
            body.push(query);
        });

        await this.client.addDocuments(body);
    }
}

module.exports = ElasticsearchService;