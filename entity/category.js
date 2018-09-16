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

    setResults(results)
    {
        this.results = results;

        return this;
    }

    getResults()
    {
        return this.results;
    }
}

module.exports = Category;