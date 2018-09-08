const chromeLauncher = require('chrome-launcher');

class BrowserService
{
    constructor() {
        return (async () => {
            // All async code here
            try {
                this.browser = await chromeLauncher.launch({chromeFlags: ['--show-paint-rects']});
            } catch (e) {
                console.log(e);
            }

            return this; // when done
        })();
    }
}

module.exports = BrowserService;