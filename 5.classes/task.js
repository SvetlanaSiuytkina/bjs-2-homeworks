class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name,
        this.releaseDate = releaseDate,
        this.pagesCount = pagesCount,
        this.state = state,
        this.type = type;
    }
    
    fix() {
        this.state *= 1.5;
    }
    
    set state(newState) {
        if (newState < 0) {
            this._state = 0; 
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type, author) {
        super(name, releaseDate, pagesCount, state, type, author);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, state, type, author) {
        super(name, releaseDate, pagesCount, state, type, author);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, state, type, author) {
        super(name, releaseDate, pagesCount, state, type, author);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, state, type, author) {
        super(name, releaseDate, pagesCount, state, type, author);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        if (!this.books) {
            return null;
        } else {
            return this.books;
        }
    }

    //giveBookByName(bookName) {
      //  if (bookName) {
        //    this.books.splice(1);
          //  return 
       // }
    //}
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(subject, mark) {
        if (mark < 2 || mark > 5) {
            return false;
        }

        if (!this.marks[subject]) {
            this.marks[subject] = [];
        }

        this.marks[subject].push.mark;
    }

    getAverageBySubject(subject) {
        if (!this.marks[subject]) {
            return 0;
        }

        return marks.reduce((sum, mark) => sum + mark, 0) / marks.length;
    }

    getAverage() {
        Object.keys(subject)
    }
}