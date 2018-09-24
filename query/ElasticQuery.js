class ElasticQuery {
    constructor(){}

    /**
     * @param {Date} timestamp 
     */
    setTimestamp(timestamp) {
        this.timestamp = timestamp;
    }
    getTimestamp() {
        return this.timestamp;
    }

    /**
     * @param {string} userAgent 
     */
    setUserAgent(userAgent) {
        this.userAgent = userAgent;
    }
    getUserAgent() {
        return this.userAgent;
    }

    /**
     * @param {string} page 
     */
    setPage(page) {
        this.page = page;
    }
    getPage() {
        return this.page;
    }

    /**
     * PERFORMANCE BLOCK
     */

    /**
     * @param {float} performance 
     */
    setPerformance(performance) {
        this.performance = performance;
    }

    /**
     * @param {float} firstContentfullPaint 
     */
    setFirstContentfulPaint(firstContentfulPaint) {
        this.firstContentfulPaint = firstContentfulPaint; 
    }

    /**
     * @param {float} firstMeaningfullPaint 
     */
    setFirstMeaningfulPaint(firstMeaningfullPaint) {
        this.firstMeaningfullPaint = firstMeaningfullPaint;
    }

    /**
     * @param {float} speedIndex 
     */
    setSpeedIndex(speedIndex) {
        this.speedIndex = speedIndex;
    }

    /**
     * @param {float} interactive 
     */
    setInteractive(interactive) {
        this.interactive = interactive;
    }

    /**
     * @param {float} firstCPUIdle 
     */
    setFirstCPUIdle(firstCPUIdle) {
        this.firstCPUIdle = firstCPUIdle;
    }

    /**
     * @param {float} estInputLatency 
     */
    setEstimatedInputLatency(estInputLatency) {
        this.estimatedInputLatency = estInputLatency;
    }

    /**
     * @param {float} renderBlockingResources 
     */
    setRenderBlockingResources(renderBlockingResources) {
        this.renderBlockingResources = renderBlockingResources;
    }

    /**
     * @param {array} renderBlockingResourcesData 
     */
    setRenderBlockingResourcesData(renderBlockingResourcesData) {
        this.renderBlockingResourcesData = renderBlockingResourcesData;
    }

    /**
     * @param {float} usesResponsiveImages 
     */
    setUsesResponsiveImages(usesResponsiveImages) {
        this.usesResponsiveImages = usesResponsiveImages;
    }

    /**
     * @param {array} usesResponsiveImagesData 
     */
    setUsesResponsiveImagesData(usesResponsiveImagesData) {
        this.usesResponsiveImagesData = usesResponsiveImagesData;
    }

    /**
     * @param {float} offscreenImages 
     */
    setOffscreenImages(offscreenImages) {
        this.offscreenImages = offscreenImages;
    }

    /**
     * @param {array} offscreenImagesData 
     */
    setOffscreenImagesData(offscreenImagesData) {
        this.offscreenImagesData = offscreenImagesData;
    }

    /**
     * @param {float} unminifiedCss 
     */
    setUnminifiedCss(unminifiedCss) {
        this.unminifiedCss = unminifiedCss;
    }

    /**
     * @param {array} unminifiedCssData 
     */
    setUnminifiedCssData(unminifiedCssData) {
        this.unminifiedCssData = unminifiedCssData;
    }

    /**
     * @param {float} unminifiedJS 
     */
    setUnminifiedJS(unminifiedJS) {
        this.unminifiedJS = unminifiedJS;
    }

    /**
     * @param {array} unminifiedJSData 
     */
    setUnminifiedJSData(unminifiedJSData) {
        this.unminifiedJSData = unminifiedJSData;
    }

    /**
     * @param {float} unusedCssRules 
     */
    setUnusedCssRules(unusedCssRules) {
        this.unusedCssRules = unusedCssRules;
    }

    /**
     * @param {array} unusedCssRulesData 
     */
    setUnusedCssRulesData(unusedCssRulesData) {
        this.unusedCssRulesData = unusedCssRulesData;
    }

    /**
     * @param {float} usesOptimizedImages 
     */
    setUsesOptimizedImages(usesOptimizedImages) {
        this.usesOptimizedImages = usesOptimizedImages;
    }

    /**
     * @param {array} usesOptimizedImagesData 
     */
    setUsesOptimizedImagesData(usesOptimizedImagesData) {
        this.usesOptimizedImagesData = usesOptimizedImagesData;
    }

    /**
     * @param {float} usesWebpImages 
     */
    setUsesWebpImages(usesWebpImages) {
        this.usesWebpImages = usesWebpImages;
    }

    /**
     * @param {float} usesRelPreconnect 
     */
    setUsesRelPreconnect(usesRelPreconnect) {
        this.usesRelPreconnect = usesRelPreconnect;
    }

    /**
     * @param {float} timeToFirstByte 
     */
    setTimeToFirstByte(timeToFirstByte) {
        this.timeToFirstByte = timeToFirstByte;
    }

    /**
     * @param {float} totalByteWeight 
     */
    setTotalByteWeight(totalByteWeight) {
        this.totalByteWeight = totalByteWeight;
    }

    /**
     * @param {float} totalByteWeightData 
     */
    setTotalByteWeightData(totalByteWeightData) {
        this.totalByteWeightData = totalByteWeightData;
    }

    /**
     * @param {float} domSize 
     */
    setDomSize(domSize) {
        this.domSize = domSize;
    }

    /**
     * @param {float} bootupTime 
     */
    setBootupTime(bootupTime) {
        this.bootupTime = bootupTime;
    }

    /**
     * @param {float} mainthreadWorkBreakdown 
     */
    setMainThreadWorkBreakdown(mainthreadWorkBreakdown) {
        this.mainthreadWorkBreakdown = mainthreadWorkBreakdown;
    }

    /**
     * BEST PRACTICE BLOCK
     */

    /**
     * @param {float} bestpractice 
     */
    setBestPractice(bestpractice) {
        this.bestPractice = bestpractice;
    }

    setUsesPassiveEventListeners(usesPassiveEventListeners) {
        this.usesPassiveEventListeners = usesPassiveEventListeners;
    }

    setUsesPassiveEventListenersData(usesPassiveEventListenersData) {
        this.usesPassiveEventListenersData = usesPassiveEventListenersData;
    }

    setNoDocumentWrite(noDocumentWrite) {
        this.noDocumentWrite = noDocumentWrite;
    }

    setNoDocumentWriteData(noDocumentWriteData) {
        this.noDocumentWriteData = noDocumentWriteData;
    }

    setExternalAnchorsUseRelNoopener(externalAnchorsUseRelNoopener) {
        this.externalAnchorsUseRelNoopener = externalAnchorsUseRelNoopener;
    }

    setExternalAnchorsUseRelNoopenerData(externalAnchorsUseRelNoopenerData) {
        this.externalAnchorsUseRelNoopenerData = externalAnchorsUseRelNoopenerData;
    }

    setGeolocationOnStart(geolocationOnStart) {
        this.geolocationOnStart = geolocationOnStart;
    }

    setNoVulnerableLibraries(noVulnerableLibraries) {
        this.noVulnerableLibraries = noVulnerableLibraries;
    }

    setNoVulnerableLibrariesData(noVulnerableLibrariesData) {
        this.noVulnerableLibrariesData = noVulnerableLibrariesData;
    }

    setNotificationOnStart(notificationOnStart) {
        this.notificationOnStart = notificationOnStart;
    }

    setDeprecations(deprecations) {
        this.deprecations = deprecations;
    }

    setDeprecationsData(deprecationsData) {
        this.deprecationsData = deprecationsData;
    }

    setErrorsInConsole(errorsInConsole) {
        this.errorsInConsole = errorsInConsole;
    }

    setErrorsInConsoleData(errorsInConsoleData) {
        this.errorsInConsoleData = errorsInConsoleData;
    }

    /**
     * SEO BLOCK
     */

    /**
     * @param {float} seo 
     */
    setSeo(seo) {
        this.seo = seo; 
    }

    setViewport(viewport) {
        this.viewport = viewport;
    }

    setDocumentTitle(documentTitle) {
        this.documentTitle = documentTitle;
    }

    setMetaDescription(metaDescription) {
        this.metaDescription = metaDescription;
    }

    setHttpStatusCode(httpStatusCode) {
        this.httpStatusCode = httpStatusCode;
    }

    setLinkText(linkText) {
        this.linkText = linkText;
    }

    setLinkTextData(linkTextData) {
        this.linkTextData = linkTextData;
    }

    setIsCrawlable(isCrawlable) {
        this.isCrawlable = isCrawlable;
    }

    setRobotsTxt(robotsTxt) {
        this.robotsTxt = robotsTxt;
    }

    setHreflang(hreflang) {
        this.hreflang = hreflang;
    }

    setCanonical(canonical) {
        this.canonical = canonical;
    }

    setFontsize(fontsize) {
        this.fontsize = fontsize;
    }

    setFontsizeData(fontsizeData) {
        this.fontsizeData = fontsizeData;
    }

    /**
     * ACCESSIBILITY BLOCK
     */

    setAccessibility(accessibility) {
        this.accessibility = accessibility;
    }

    setDuplicateId(duplicateId) {
        this.duplicateId = duplicateId;
    }

    setDuplicateIdData(duplicateIdData) {
        this.duplicateIdData = duplicateIdData;
    }
}

module.exports = ElasticQuery;