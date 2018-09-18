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
            const query = this.createQuery(timestamp, userAgent, audit);
            body.push({ create: { "_index" : this.indexName, "_type" : this.doctypeName, "_id": uuid() } });
            body.push(query);
        });

        await this.client.addDocuments(body);
    }

    createQuery(timestamp, userAgent, audit){
        const {performance, bestPractice, seo} = audit;
        const {results: perfResults} = performance;
        const query = new ElasticQuery();
        query.setTimestamp(timestamp);
        query.setUserAgent(userAgent);
        query.setPage(audit.url);
        query.setPerformance(performance.score);
        query.setBestPractice(bestPractice.score);
        query.setSeo(seo.score);
        query.setFirstContentfulPaint(perfResults[0].rawValue);
        query.setFirstMeaningfulPaint(perfResults[1].rawValue);
        query.setSpeedIndex(perfResults[2].rawValue);
        query.setInteractive(perfResults[3].rawValue);
        query.setFirstCPUIdle(perfResults[4].rawValue);
        query.setEstimatedInputLatency(perfResults[5].rawValue);
        query.setRenderBlockingResources(perfResults[6].rawValue);
        query.setRenderBlockingResourcesData(perfResults[6].details.items);
        query.setUsesResponsiveImages(perfResults[7].displayValue[1]);
        query.setUsesResponsiveImagesData(perfResults[7].details.items);
        query.setOffscreenImages(perfResults[8].displayValue[1]);
        query.setOffscreenImagesData(perfResults[8].details.items);
        query.setUnminifiedCss(perfResults[9].rawValue);
        query.setUnminifiedCssData(perfResults[9].details.items);
        query.setUnminifiedJS(perfResults[10].displayValue[1]);
        query.setUnminifiedJSData(perfResults[10].details.items);
        query.setUnusedCssRules(perfResults[11].displayValue[1]);
        query.setUnusedCssRulesData(perfResults[11].details.items);
        query.setUsesOptimizedImages(perfResults[12].displayValue[1]);
        query.setUsesOptimizedImagesData(perfResults[12].displayValue[1]);
        query.setUsesWebpImages(perfResults[13].displayValue[1]);
        query.setUsesRelPreconnect(perfResults[15].rawValue);
        query.setTimeToFirstByte(perfResults[16].rawValue);
        query.setTotalByteWeight(perfResults[20].displayValue[1]);
        query.setTotalByteWeightData(perfResults[20].details.items);
        query.setDomSize(perfResults[22].rawValue);
        query.setBootupTime(perfResults[27].rawValue);
        query.setMainThreadWorkBreakdown(perfResults[29].rawValue);

        return query;
    }
}

module.exports = ElasticsearchService;