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
  displayLibrary(myLibrary);
});


// func (or prototype?) to display a book/create a book card
function makeCard(object) {
  // create html element for card
  let bookCard = document.createElement('div');
  bookCard.classList.add('book-card');
  // create inner elements
  let cardTitle = document.createElement('div');
  cardTitle.classList.add('card-title');
  let cardAuthor = document.createElement('div');
  cardAuthor.classList.add('card-author');
  let cardYear = document.createElement('div');
  cardYear.classList.add('card-year');
  let cardPages = document.createElement('div');
  cardPages.classList.add('card-pages');
  // append inner elements to card element
  bookCard.append(cardTitle, cardAuthor, cardYear, cardPages);
  cardTitle.textContent = object.title;
  cardAuthor.textContent = object.author;
  cardYear.textContent = `Published: ${object.year}`;
  cardPages.textContent = `Pages: ${object.pages}`;
  // add button for read status toggle (this may need to be function)
  return bookCard;
}

function makeReadButton(status) {

}

// loop through library and display each book
function displayLibrary(array) {
  let container = document.querySelector('.container');
  // iterate thru array
  container.textContent = '';
  array.forEach(function(bookObj) {
    let bookCard = makeCard(bookObj);
    container.appendChild(bookCard);
  })
}

function resetForm() {
  document.querySelector('form').reset();
}


// populate example books
let book1 = new Book('Murder on the Orient Express', 'Agatha Christie', 1934, 256, true);
let book2 = new Book('The Maltese Falcon', 'Dashiell Hammett', 1930, 217, false);
let book3 = new Book('Mr. Mercedes', 'Stephen King', 2014, 436, true);
myLibrary.push(book1, book2, book3);

displayLibrary(myLibrary);
