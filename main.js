class Media{
    constructor(title){
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = []
    }
    get title(){
        return this._title;
    }
    get isCheckedOut(){
        return this._isCheckedOut;
    }
    set isCheckedOut(isCheckedOut){
        this._isCheckedOut = isCheckedOut;
    }
    get ratings(){
        return this._ratings;
    }
    toggleCheckOutStatus(){
        if(this._isCheckedOut === true){
            this._isCheckedOut = false;
        }else if(this._isCheckedOut === false){
            this._isCheckedOut = true;
        }
    }
    getAverageRating(){
        let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0)/this._ratings.length;
        return ratingsSum;
    }
    addRating(inputValue){
        this.ratings.push(inputValue);
    }
};

class Book extends Media{
    constructor(title,author, pages){
        super(title)
        this._title = title;
        this._author = author;
        this._pages = pages;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get author(){
        return this._author;
    }
    get pages(){
        return this._pages;
    }
}

class Movie extends Media{
    constructor(director, title, runTime){
        super(title)
        this._title = title;
        this._director = director;
        this._runTime = runTime;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get director(){
        return this._director;
    }
    get runTime(){
        return this._runTime;
    }
};

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)

historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckedOut)

historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)

historyOfEverything.getAverageRating()
console.log(historyOfEverything.getAverageRating())

const speed = new Movie('Jan De Bont', 'Speed', 116)

speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut)

speed.addRating(1)
speed.addRating(1)
speed.addRating(5)

speed.getAverageRating()
console.log(speed.getAverageRating())