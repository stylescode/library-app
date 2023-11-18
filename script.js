const myLibrary = [];

// create a book obj
function Book(title, author, year, pages, read) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // use user input to create book
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let year = document.getElementById('year').value;
  let pages = document.getElementById('pages').value;
  let read = document.querySelector('input[type="checkbox"]:checked');
  read = (read) ? true : false;
  let book = new Book(title, author, year, pages, read);
  console.log(book);
  // push new book into library
  myLibrary.push(book);
}

// maybe create prototype methods for book? like to create a

/*
Book.prototype.changeReadStatus = function() {
  (this.read === true) ? false : true;
}

*/


// generate user form on click with listener
const inputModal = document.querySelector('.input-modal');
const addBookBtn = document.querySelector('.add-book');
const exitFormBtn = document.querySelector('.close-form');
const form = document.querySelector('form');
const successModal = document.querySelector('.success-modal');
const closeSuccessModal = document.querySelector('.close-success');

addBookBtn.addEventListener('click', function() {
  inputModal.showModal();
});

exitFormBtn.addEventListener('click', function() {
  inputModal.close();
});

form.addEventListener('submit', function() {
  event.preventDefault();
  addBookToLibrary();
  inputModal.close();
  // reset form
  resetForm();
  successModal.showModal();
})

closeSuccessModal.addEventListener('click', function() {
  successModal.close();
  // run display library function

});


// func to display a book


// loop through library and display each book
function displayLibrary(array) {
  // turn each object in the lib
}

function resetForm() {
  document.querySelector('form').reset();
}


// populate example books
