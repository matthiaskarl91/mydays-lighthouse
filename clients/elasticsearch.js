const elasticsearch = require('elasticsearch');


class ElasticsearchClient {
    
    //client;

    constructor() {
        this.client = new elasticsearch.Client({
            host: '10.0.70.127:9200',
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

    async addDocuments(body) {
        try {
            

            const res = await this.client.bulk({
                body
            })
        } catch(e) {
            throw new Error(e);
        }
    }
}

module.exports = ElasticsearchClient;
