class ElasticQuery {
    constructor(){}

    setTimestamp(timestamp) {
        this.timestamp = timestamp;

        return this;
    }
    getTimestamp() {
        return this.timestamp;
    }

    setUserAgent(userAgent) {
        this.userAgent = userAgent;

        return this;
    }
    getUserAgent() {
        return this.userAgent;
    }

    setPage(page) {
        this.page = page;

        return this;
    }
    getPage() {
        return this.page;
    }

    setPerformance(performance) {
        this.performance = performance;

        return this;
    }
    getPerformance() {
        return this.performance;
    }
}

module.exports = ElasticQuery;