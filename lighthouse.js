const lighthouse = require('lighthouse');
const BrowserService = require('./services/BrowserService');
const AuditService = require('./services/AuditService');

const fs = require('fs');

let result = [];
const urls = [
    'https://www.mydays.de',
    'https://www.mydays.de/erlebnisgeschenke/kulinarische-geschenke'
]
async function startFunction()
{
    const opts = {
        chromeFlags: ['--show-paint-rects']
    };
      
    const auditOptions = {
        url: 'https://www.mydays.de',
        config: null
    };
    const auditService = await new AuditService();
    const result = await auditService.startAudit(auditOptions);

    const bla = 1;
    /*let resu = urls.map((url) => {
        return launchChromeAndRunLighthouse(url, opts).then(results => {
            return mapResult(results);
        }).then(res => {
            return res;
        });
    });
    console.log(resu);*/
}
/*
function mapResult({categories, finalUrl})
{
    const {performance, seo} = categories;
    return {
        [finalUrl]: {
            "performance": {
                id: performance.id,
                score: performance.score
            },
            "seo": {
                id: seo.id,
                score: seo.score
            }
        }
    };
}

function launchChromeAndRunLighthouse(url, opts, config = null) {
    return chromeLauncher.launch({chromeFlags: opts.chromeFlags}).then(chrome => {
      opts.port = chrome.port;
      return lighthouse(url, opts, config).then(results => {
        // use results.lhr for the JS-consumeable output
        // https://github.com/GoogleChrome/lighthouse/blob/master/typings/lhr.d.ts
        // use results.report for the HTML/JSON/CSV output as a string
        // use results.artifacts for the trace/screenshots/other specific case you need (rarer)
        return chrome.kill().then(() => results.lhr)
      });
    });
}*/
module.exports = startFunction;
