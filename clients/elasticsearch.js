const elasticsearch = require('elasticsearch');


class ElasticsearchClient {
    
    //client;

    constructor() {
        this.client = new elasticsearch.Client({
            host: 'localhost:9200',
            log: 'trace'
        });
    }

    async ping() {
        try {
            const res = await this.client.ping({
                requestTimeout: 30000,
            });

            return true;
        } catch(e) {
            throw new Error(e);
        }
    }

    async createIndex(index) {
        try {
            const res = await this.client.indices.create({
                index
            });

            return res;
        } catch(e) {
            throw new Error(e);
        }
    }

    async indexExist(index) {
        try {
            const res = await this.client.indices.exists({
                index
            })

            return res;
        } catch(e) {
            throw new Error(e);
        }
    }

    async putMapping(index, type, body) {
        try {
            const res = await this.client.indices.putMapping({
                index,
                type,
                body
            });

            return res;
        } catch(e) {
            throw new Error(e);
        }
    }

    async addDocuments(index, type, body) {
        try {
            const request = [];
            body.forEach((item, i) => {
                request.push({ create: { "_index" : index, "_type" : type, "_id" : i } });
                request.push(item);
            });

            const res = await this.client.bulk({
                "body": request
            })
        } catch(e) {
            throw new Error(e);
        }
    }
}

module.exports = ElasticsearchClient;