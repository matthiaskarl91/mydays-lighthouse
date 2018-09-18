class ElasticQuery {
    timestamp;
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

    setBestPractice(bestpractice) {
        this.bestPractice = bestpractice;

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
        return this;
    }

    setFirstContentfulPaint(firstContentfullPaint) {
        this.firstContentfullPaint = firstContentfullPaint;

        return this;
    }

    setFirstMeaningfulPaint(firstMeaningfullPaint) {
        this.firstMeaningfullPaint = firstMeaningfullPaint;

        return this;
    }

    setSpeedIndex(speedIndex) {
        this.speedIndex = speedIndex;

        return this;
    }

    setInteractive(interactive) {
        this.interactive = interactive;

        return this;
    }

    setFirstCPUIdle(firstCPUIdle) {
        this.firstCPUIdle = firstCPUIdle;

        return this;
    }

    setEstimatedInputLatency(estInputLatency) {
        this.estimatedInputLatency = estInputLatency;

        return this;
    }

    setRenderBlockingResources(renderBlockingResources) {
        this.renderBlockingResources = renderBlockingResources;

        return this;
    }

    setRenderBlockingResourcesData(renderBlockingResourcesData) {
        this.renderBlockingResourcesData = renderBlockingResourcesData;

        return this;
    }

    setUsesResponsiveImages(usesResponsiveImages) {
        this.usesResponsiveImages = usesResponsiveImages;

        return this;
    }

    setUsesResponsiveImagesData(usesResponsiveImagesData) {
        this.usesResponsiveImagesData = usesResponsiveImagesData;

        return this;
    }

    setOffscreenImages(offscreenImages) {
        this.offscreenImages = offscreenImages;

        return this;
    }

    setOffscreenImagesData(offscreenImagesData) {
        this.offscreenImagesData = offscreenImagesData;

        return this;
    }

    setUnminifiedCss(unminifiedCss) {
        this.unminifiedCss = unminifiedCss;

        return this;
    }

    setUnminifiedCssData(unminifiedCssData) {
        this.unminifiedCssData = unminifiedCssData;

        return this;
    }

    setUnminifiedJS(unminifiedJS) {
        this.unminifiedJS = unminifiedJS;

        return this;
    }

    setUnminifiedJSData(unminifiedJSData) {
        this.unminifiedJSData = unminifiedJSData;

        return this;
    }

    setUnusedCssRules(unusedCssRules) {
        this.unusedCssRules = unusedCssRules;

        return this;
    }

    setUnusedCssRulesData(unusedCssRulesData) {
        this.unusedCssRulesData = unusedCssRulesData;

        return this;
    }

    setUsesOptimizedImages(usesOptimizedImages) {
        this.usesOptimizedImages = usesOptimizedImages;

        return this;
    }

    setUsesOptimizedImagesData(usesOptimizedImagesData) {
        this.usesOptimizedImagesData = usesOptimizedImagesData;

        return this;
    }

    setUsesWebpImages(usesWebpImages) {
        this.usesWebpImages = usesWebpImages;

        return this;
    }

    setUsesRelPreconnect(usesRelPreconnect) {
        this.usesRelPreconnect = usesRelPreconnect;
        
        return this;
    }

    setTimeToFirstByte(timeToFirstByte) {
        this.timeToFirstByte = timeToFirstByte;

        return this;
    }

    setTotalByteWeight(totalByteWeight) {
        this.totalByteWeight = totalByteWeight;

        return this;
    }

    setTotalByteWeightData(totalByteWeightData) {
        this.totalByteWeightData = totalByteWeightData;

        return this;
    }

    setDomSize(domSize) {
        this.domSize = domSize;

        return this;
    }

    setBootupTime(bootupTime) {
        this.bootupTime = bootupTime;

        return this;
    }

    setMainThreadWorkBreakdown(mainthreadWorkBreakdown) {
        this.mainthreadWorkBreakdown = mainthreadWorkBreakdown;

        return this;
    }
}

module.exports = ElasticQuery;