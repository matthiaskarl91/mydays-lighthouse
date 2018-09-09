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

    setCategories(categories)
    {
        this.categories = categories;

        return this;
    }

    getCategories()
    {
        return this.categories;
    }
}


module.exports = Audits;