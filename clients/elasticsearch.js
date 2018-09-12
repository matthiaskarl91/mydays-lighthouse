const elasticsearch = require('elasticsearch');

class ElasticsearchClient {
    
    client;

    constructor() {
        this.client = new elasticsearch.Client({
            host: 'localhost:9200',
            log: 'trace'
        });
    }

    async ping() {
        try {
            await this.client.ping({
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
            res.status(200);

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
            res.status(200);

            return res;
        } catch(e) {
            throw new Error(e);
        }
    }

    async addDocument(index, type, body) {
        try {
            const res = await this.client.index({
                index,
                type,
                body
            });
            res.status(200);

            return res;
        } catch(e) {
            throw new Error(e);
        }
    }
}

module.exports = ElasticsearchClient;