class Category
{
    constructor(){
        
    }

    setScore(score)
    {
        this.score = score;

        return this;
    }

    getScore()
    {
        return this.score;
    }

    setTitle(title)
    {
        this.title = title;

        return this;
    }

    getTitle()
    {
        return this.title;
    }

    setAudits(audits)
    {
        this.audits = audits;

        return this;
    }

    getTitle()
    {
        return this.title;
    }
}

module.exports = Category;