const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');

function startFunction()
{
    const opts = {
        chromeFlags: ['--show-paint-rects']
    };
      
    // Usage:
    launchChromeAndRunLighthouse('https://www.mydays.de', opts).then(results => {
        fs.writeFile("./result.json", JSON.stringify(results), (err) => {
            if(err) {
                return console.log(err);
            }
        
            console.log("The file was saved!");
        })
    });
}


function launchChromeAndRunLighthouse(url, opts, config = null) {
    return chromeLauncher.launch({chromeFlags: opts.chromeFlags}).then(chrome => {
      opts.port = chrome.port;
      return lighthouse(url, opts, config).then(results => {
        // use results.lhr for the JS-consumeable output
        // https://github.com/GoogleChrome/lighthouse/blob/master/typings/lhr.d.ts
        // use results.report for the HTML/JSON/CSV output as a string
        // use results.artifacts for the trace/screenshots/other specific case you need (rarer)
        return chrome.kill().then(() => results.report)
      });
    });
}
module.exports = startFunction;
