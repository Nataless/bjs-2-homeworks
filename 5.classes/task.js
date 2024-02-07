// Задача №1

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	fix() {
		this.state *= 1.5;
	}
	set state(newState) {
		if (newState <= 0) {
			this._state = 0;
		} else if (newState >= 100) {
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
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
	}
	type = "magazine";
}

class Book extends Magazine {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
	}
	type = "book";
}

class NovelBook extends Book {
	type = "novel";
}
class FantasticBook extends Book {
	type = "fantastic";
}
class DetectiveBook extends Book {
	type = "detective";
}

// Задача №2

class Library {
	books = [];

	constructor(name) {
		this.name = name;
	}

	addBook(book) {
		(book.state > 30) ? this.books.push(book): this.books.push(null);
	}

	findBookBy(type, value) {
		const findResult = this.books.find((item) => item[type] === value);
		return findResult || null;
	   }

	   giveBookByName(bookName) {
		const book = this.findBookBy("name", bookName);
		if (!book) return null;
		this.books = this.books.filter((item) => item.name !== bookName);
		return book;
	  }
	}


// Задача №3

class Student {
	constructor(name) {
	  this.name = name;
	  this.marks = {};
	}
  
	addMark(mark, subject) {
	  if (this.marks?.[subject] === undefined && mark >= 2 && mark <= 5) {
		this.marks[subject] = [];
		this.marks[subject].push(mark);
	  } else if (this.marks.hasOwnProperty(subject) && mark >= 2 && mark <= 5) {
		this.marks[subject].push(mark);
	  }
	}
  
	getAverageBySubject(subject) {
		if (this.marks.hasOwnProperty(subject) === false) {
		  return 0;
		}
		const averageScore = this.marks[subject].reduce((acc, mark, index, arr) => {
		  acc += mark;
		  if (index === arr.length - 1) {
			return acc / arr.length;
		  }
		  return acc;
		}, 0);
		return averageScore;
	  }

	getAverage() {
	  let length = 0;
	  let sum = 0;
	  for (let key in this.marks) {
		sum += this.marks[key].reduce((acc, item) => acc += item);
		length += this.marks[key].length;
	  }
	  return sum / length  || 0;
	}
  
	exclude(reason) {
	  delete this.marks;
	  this.excluded = reason;
	  console.log(reason);
	}
  }