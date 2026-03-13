class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }

    set state(value){
        if(value < 0){
            this._state = 0;
        }
        else if(value > 100){
            this._state = 100;
        }
        else{
            this._state = value;
        }
    }

    get state(){
        return this._state;
    }

    fix(){
        this.state = this.state * 1.5;
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount)
        this.type = "magazine"
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount)
    this.type = "book"
    this.author = author
    }
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
    super(author, name, releaseDate, pagesCount)
    this.type = "novel";
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
    super(author, name, releaseDate, pagesCount)
    this.type = "fantastic";
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
    super(author, name, releaseDate, pagesCount)
    this.type = "detective";
    }
}

class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if(book.state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        for(let i in this.books){
            if(this.books[i][type] == value){
                return this.books[i];
            }
        }
        return null;
    }

    giveBookByName(bookName){
        for(let i in this.books){
            if(this.books[i]["name"] == bookName){
                const book = this.books[i];
                this.books.splice(i, 1);
                return book;
            }
        }
        return null;
    }
  
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);

library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);

library.addBook(
  new NovelBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);

library.addBook(
  new NovelBook(
    "Вирджиния Вулф",
    "День и ночь",
    1919,
    544
  )
);

console.log(library.findBookBy("releaseDate", 1919));
const picnic = library.giveBookByName("Пикник на обочине");
picnic.state = 30;
picnic.fix();
library.addBook(picnic);