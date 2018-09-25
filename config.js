const config = {
    INDEX_NAME: 'lighthouse',
    DOCTYPE_NAME: 'mydays_audits',
    URLS: [
        'https://www.mydays.de',
        'https://www.mydays.de/erlebnisgeschenke/kulinarische-geschenke',
        'https://www.mydays.de/geschenkidee/darkdinner-muenchen-schlosswirtschaft',
        'https://www.mydays.de/serp/well?searchLocation=München,%20Deutschland&lat=48.1351253&long=11.581980499999986',
        'https://www.mydays.de/warenkorb',
        'https://www.mydays.de/erlebnisse/Schweben-gleiten',
        'https://www.mydays.de/geschenkideen/ballonfahrt',
        'https://www.mydays.de/erlebnis/ballonfahrt'
    ],
    LIGHTHOUSE_CONFIG: {
        chromeFlags: ['--show-paint-rects', '--no-sandbox'],
        disableDeviceEmulation: true,
        enableNetworkThrottling: false,
        throttling: {
            cpuSlowdownMultiplier: 1
        }
    }
};

module.exports = config;