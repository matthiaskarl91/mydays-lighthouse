const AuditService = require('./service/AuditService');

class Controller
{
    constructor()
    {}

    async start()
    {
        const result = await AuditService.performAudits();
        const bla = 1;
    }
}

function startFunction()
{

    AuditService.performAudits();

}

module.exports = new Controller();
