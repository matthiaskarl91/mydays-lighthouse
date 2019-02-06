const ElasticQuery = require("../query/ElasticQuery");

class ElasticQueryMapper {
  constructor() {
    this.query = new ElasticQuery();
  }

  getQuery() {
    return this.query;
  }

  setData(timestamp, userAgent, { url }) {
    this.query.setTimestamp(timestamp);
    this.query.setUserAgent(userAgent);
    this.query.setPage(url);
    this.query.setAverageAnalyticsTime(0);
    this.query.setIsMobile();
  }

  setPerformanceData({ performance }) {
    const { results } = performance;
    this.query.setPerformance(performance.score);
    this.query.setFirstContentfulPaint(results[0].rawValue);
    this.query.setFirstMeaningfulPaint(results[1].rawValue);
    this.query.setSpeedIndex(results[2].rawValue);
    this.query.setInteractive(results[3].rawValue);
    this.query.setFirstCPUIdle(results[4].rawValue);
    this.query.setEstimatedInputLatency(results[5].rawValue);
    this.query.setRenderBlockingResources(results[6].rawValue);
    this.query.setRenderBlockingResourcesData(results[6]);
    this.query.setUsesResponsiveImages(results[7]);
    this.query.setUsesResponsiveImagesData(results[7]);
    this.query.setOffscreenImages(results[8]);
    this.query.setOffscreenImagesData(results[8]);
    this.query.setUnminifiedCss(results[9].rawValue);
    this.query.setUnminifiedCssData(results[9]);
    this.query.setUnminifiedJS(results[10]);
    this.query.setUnminifiedJSData(results[10]);
    this.query.setUnusedCssRules(results[11]);
    this.query.setUnusedCssRulesData(results[11]);
    this.query.setUsesOptimizedImages(results[12]);
    this.query.setUsesOptimizedImagesData(results[12]);
    this.query.setUsesWebpImages(results[13]);
    this.query.setUsesRelPreconnect(results[15].rawValue);
    this.query.setTimeToFirstByte(results[16].rawValue);
    this.query.setTotalByteWeight(results[20]);
    this.query.setTotalByteWeightData(results[20]);
    this.query.setDomSize(results[22].rawValue);
    this.query.setBootupTime(results[27].rawValue);
    this.query.setMainThreadWorkBreakdown(results[29].rawValue);
  }

  setBestPracticeData({ bestPractice }) {
    const { results } = bestPractice;
    this.query.setBestPractice(bestPractice.score);
    this.query.setUsesPassiveEventListeners(results[4].rawValue);
    this.query.setUsesPassiveEventListenersData(results[4]);
    this.query.setNoDocumentWrite(results[5].rawValue);
    this.query.setNoDocumentWriteData(results[5].details.items);
    this.query.setExternalAnchorsUseRelNoopener(results[6].rawValue);
    this.query.setExternalAnchorsUseRelNoopenerData(results[6]);
    this.query.setGeolocationOnStart(results[7].rawValue);
    this.query.setNoVulnerableLibraries(results[9].rawValue);

    this.query.setNoVulnerableLibrariesData(results[9]);
    this.query.setNotificationOnStart(results[10].rawValue);
    this.query.setDeprecations(results[11].rawValue);
    this.query.setDeprecationsData(results[11].details.items);
    this.query.setErrorsInConsole(results[13].rawValue);
    this.query.setErrorsInConsoleData(results[13].details.items);
  }

  setSEO({ seo }) {
    const { results } = seo;
    this.query.setSeo(seo.score);
    this.query.setViewport(results[0].rawValue);
    this.query.setDocumentTitle(results[1].rawValue);
    this.query.setMetaDescription(results[2].rawValue);
    this.query.setHttpStatusCode(results[3].rawValue);
    this.query.setLinkText(results[4].rawValue);
    this.query.setIsCrawlable(results[5].rawValue);
    this.query.setRobotsTxt(results[6].rawValue);
    this.query.setHreflang(results[7].rawValue);
    this.query.setCanonical(results[8].rawValue);
    this.query.setFontsize(results[9].rawValue);
    this.query.setFontsizeData(results[9]);
  }

  setAccessibility({ accessibility }) {
    const { results } = accessibility;
    this.query.setSeo(accessibility.score);
    this.query.setDuplicateId(results[15].rawValue);
    this.query.setDuplicateId(results[15]);
  }
}

module.exports = ElasticQueryMapper;
