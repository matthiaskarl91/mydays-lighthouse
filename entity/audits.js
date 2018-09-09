class Audits
{
    constructor(){}

    setUrl(url)
    {
        this.url = url;
        
        return this;
    }

    getUrl()
    {
        return this.url;
    }

    setPerformance(performance)
    {
        this.performance = performance;

        return this;
    }

    getPerformance()
    {
        return this.performance;
    }
}


module.exports = Audits;