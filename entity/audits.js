class Audit
{
    constructor(){}

    setUrl(url) {
        this.url = url;
        
        return this;
    }

    getUrl() {
        return this.url;
    }

    setPerformance(performance) {
        this.performance = performance;

        return this;
    }

    getPerformance() {
        return this.performance;
    }

    setBestPractice(bestPractice) {
        this.bestPractice = bestPractice;

        return this;
    }

    getBestPractice() {
        return this.bestPractice;
    }

    setSeo(seo) {
        this.seo = seo;

        return this;
    }

    getSeo() {
        return this.seo;
    }

    setAccessibility(accessibility) {
        this.accessibility = accessibility;

        return this;
    }

    getAccessibility() {
        return this.accessibility;
    }
}


module.exports = Audit;