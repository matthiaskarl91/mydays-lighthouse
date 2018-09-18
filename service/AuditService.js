const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

class AuditService
{
    constructor() {
        this.urls = [
            'https://www.mydays.de',
            'https://www.mydays.de/erlebnisgeschenke/kulinarische-geschenke'
        ];
        this.opts = {
            chromeFlags: ['--show-paint-rects'],
            disableDeviceEmulation: true,
            enableNetworkThrottling: false,
            throttling: {
                cpuSlowdownMultiplier: 1
            }
        };
    }

    async performAudits()
    {
        const promises = this.urls.map(url => this.runAudit(url, this.opts));
        const result = await Promise.all(promises).catch(e => {
            new Error(e); 
            process.exit();
        });
    
        return result;
    }

    async runAudit(url, opts) {
        const result = await this.launchChromeAndRunLighthouse(url, opts);

        return result;
    }

    async launchChromeAndRunLighthouse(url, opts, config = null) {
        return await chromeLauncher.launch({chromeFlags: opts.chromeFlags}).then(chrome => {
            opts.port = chrome.port;
            return lighthouse(url, opts, config).then(results => {
            // use results.lhr for the JS-consumeable output
            // https://github.com/GoogleChrome/lighthouse/blob/master/typings/lhr.d.ts
            // use results.report for the HTML/JSON/CSV output as a string
            // use results.artifacts for the trace/screenshots/other specific case you need (rarer)
                return chrome.kill().then(() => results.lhr);
            })/*.catch(() => chrome.kill().catch());*/
        });
    }
}

module.exports = new AuditService();