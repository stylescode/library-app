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

// toggle for read status
Book.prototype.changeReadStatus = function() {
  (this.read === true) ? false : true;
}



// MODAL elements
const inputModal = document.querySelector('.input-modal');
const addBookBtn = document.querySelector('.add-book');
const exitFormBtn = document.querySelector('.close-form');
const form = document.querySelector('form');
const successModal = document.querySelector('.success-modal');
const closeSuccessModal = document.querySelector('.close-success');

// generate user form on click with listener
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
  resetForm();
  successModal.showModal();
})

closeSuccessModal.addEventListener('click', function() {
  successModal.close();
  // run display library function

});


// func (or prototype?) to display a book/create a book card
function makeCard(object) {
  console.log(object.title)


  // add button for read status toggle
}


// loop through library and display each book
function displayLibrary(array) {
  // iterate thru array
    // turn each object in the lib into a card
    // append card to container

}

function resetForm() {
  document.querySelector('form').reset();
}


// populate example books
let book1 = new Book('Murder on the Orient Express', 'Agatha Christie', 1934, 256, true);
let book2 = new Book('The Maltese Falcon', 'Dashiell Hammett', 1930, 217, false);
let book3 = new Book('Mr. Mercedes', 'Stephen King', 2014, 436, true);
myLibrary.push(book1, book2, book3);

