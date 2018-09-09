class Report
{
    constructor()
    {
        this.setTimestamp();
    }

    setTimestamp(timestamp = new Date())
    {
        this.timestamp = timestamp;

        return this;
    }

    getTimestamp()
    {
        return this.timestamp;
    }

    setAudits(audits)
    {
        this.audits = audits;

        return this;
    }

    getAudits()
    {
        return this.audits;
    }
}

module.exports = Report;