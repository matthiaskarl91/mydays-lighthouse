jest.mock('lighthouse');
const lighthouse = require('lighthouse');

jest.mock('chrome-launcher');
const chromeLauncher = require('chrome-launcher');

const AuditService = require('../service/AuditService');

test('Check for the lighthouse result', async () => {
    getLighthouseMock();
    getChromeLauncherMock();
    //expect.assertions(1);
    const opts = {
        chromeFlags: ['--show-paint-rects'],
        disableDeviceEmulation: true,
        enableNetworkThrottling: false,
        throttling: {
            cpuSlowdownMultiplier: 1
        }
    };

    const data = await AuditService.runAudit('https://www.test.de', opts);
    console.log(data);
    expect(data.length).toBe(2);
});

function getLighthouseMock() {
    return lighthouse.mockReturnValue(Promise.resolve({
        'data': 0
    }));
}

function getChromeLauncherMock() {
    return chromeLauncher.launch.mockReturnValue(Promise.resolve({
        kill: function(){return Promise.resolve()}
    }));
}