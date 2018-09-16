jest.mock('lighthouse');
const lighthouse = require('lighthouse');

jest.mock('chrome-launcher');
const chromeLauncher = require('chrome-launcher');

const AuditService = require('../service/AuditService');

test('Check for the lighthouse result', async () => {
    getLighthouseMock();
    getChromeLauncherMock();
    //expect.assertions(1);
    
    const data = await AuditService.performAudits();
    expect(data.length).toBe(2);
});

function getLighthouseMock() {
    return lighthouse.mockReturnValue(Promise.resolve({}));
}

function getChromeLauncherMock() {
    return chromeLauncher.launch.mockReturnValue(Promise.resolve({
        kill: function(){return Promise.resolve()}
    }));
}