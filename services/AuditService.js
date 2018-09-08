const lighthouse = require('lighthouse');
const BrowserService = require('./BrowserService');

class AuditService{
    constructor()
    {
        this.opts = {
            chromeFlags: ['--show-paint-rects']
        };
        return (async () => {
            try {
                this.browserHandler = await new BrowserService();
            } catch (e){
                console.log(e);
            }
            this.opts.port = this.browserHandler.browser.port;
            return this; // when done
        })();
    }

    async startAudit({url, config})
    {
        try {
            const result = await lighthouse(url, this.opts, config);
        } catch(e) {
            console.log(e);
        }

        return result;
    }
}

module.exports = AuditService;