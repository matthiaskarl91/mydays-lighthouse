class Audits
{
    constructor(){}

    getScore()
    {
        return this.score;
    }

    setScore(score)
    {
        this.score = score;
    }

    getAudits()
    {
        return this.audits;
    }

    setAudits(audits)
    {
        this.audits = audits;
    }
}


module.exports = Audits;