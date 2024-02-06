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
		let bookIndex = this.books.findIndex((item) => item[type] === value);
		return this.books[bookIndex] = (bookIndex != -1) ? this.books[bookIndex] : null;
	}

	giveBookByName(bookName) {
		let bookIndex = this.books.findIndex((item) => item.name === bookName);
		if (bookIndex != -1) {
			let currentBook = this.books[bookIndex];
			this.books.splice([bookIndex], [1]);
			return currentBook;
		} else {
			return null;
		}
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
	  if (this.marks[subject] != undefined || this.marks[subject].length > 0) {
		let sum = this.marks[subject].reduce((acc, item) => acc += item);
		return sum / this.marks[subject].length
	  } else if (this.marks[subject] != undefined || this.marks[subject].length === 0) {
		return console.log('Нет оценок дя расчета');
	  } else {
		return 0;
	  }
	}
  
	getAverage() {
	  let length = 0;
	  let sum = 0;
	  for (let key in this.marks) {
		sum += this.marks[key].reduce((acc, item) => acc += item);
		length += this.marks[key].length;
	  }
	  return sum / length
	}
  
	exclude(reason) {
	  delete this.marks;
	  this.excluded = reason;
	  console.log(reason);
	}
  }