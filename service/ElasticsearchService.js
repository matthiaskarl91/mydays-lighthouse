const ElasticsearchClient = require('../clients/elasticsearch');
const ElasticQueryMapper = require('./ElasticQueryMapper');
const uuid = require('uuid/v1');


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
        "renderBlockingResourcesData": [{ "type": "text"}],
        "usesResponsiveImages": { "type": "float" },
        "usesResponsiveImagesData": [{ "type": "text"}],
        "offscreenImages": { "type": "float" },
        "offscreenImagesData": [{ "type": "text"}],
        "unminifiedCss": { "type": "float" },
        "unminifiedCssData": [{ "type": "text"}],
        "unminifiedJS": { "type": "float" },
        "unminifiedJSData": [{ "type": "text"}],
        "unusedCssRules": { "type": "integer" }, //save displayValue
        "unusedCssRulesData": [{ "type": "text"}],
        "usesOptimizedImages": { "type": "integer"}, //save displayValue
        "usesOptimizedImagesData": [{ "type": "text"}],
        "usesWebpImages": { "type": "integer" },
        "usesRelPreconnect": { "type": "float" },
        "timeToFirstByte": { "type": "float" },
        "totalByteWeight": { "type": "float" }, //save displayValue
        "totalByteWeightData": [{ "type": "text"}],
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
            //await this.client.putMapping(this.indexName, this.doctypeName, this.doctype);
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