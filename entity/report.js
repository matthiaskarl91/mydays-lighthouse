class Report
{
    constructor() {
        this.setTimestamp();
    }

    setTimestamp(timestamp = new Date().getTime()) {
        this.timestamp = timestamp;

        return this;
    }

    getTimestamp() {
        return this.timestamp;
    }

    setAudits(audits) {
        this.audits = audits;

        return this;
    }

    getAudits() {
        return this.audits;
    }

    setConfig(config) {
        this.config = config;

        return this;
    }

    getConfig() {
        return this.config;
    }

    setUserAgent(userAgent) {
        this.userAgent = userAgent;

        return this;
    }

    getUserAgent() {
        return this.userAgent;
    }

    setAccessibility(accessibility) {
        this.accessibility = accessibility;

        return this;
    }

    getAccessibility() {
        return this.accessibility;
    }
}

module.exports = Report;