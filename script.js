const myLibrary = [];

// create a book obj
function Book(title, author, year, pages, read) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.read = read;
}


// take user input, create book and add to library
function addBookToLibrary() {
  // give user form to fill out
  // use form info for parameters
  // create Book
  // add the book to library

}


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
  // capture input
  event.preventDefault();
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let year = document.getElementById('year').value;
  let pages = document.getElementById('pages').value;
  let read = document.querySelector('input[type="checkbox"]:checked');
  read = (read) ? true : false;
  let bookToAdd = new Book(title, author, year, pages, read);
  console.log(bookToAdd);
  inputModal.close();
  successModal.showModal();
})

closeSuccessModal.addEventListener('click', successModal.close());


// func to display a book


// loop through library and display each book


// populate example books
