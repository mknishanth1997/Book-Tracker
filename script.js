let currentBookIndex = null;

// Form Reference
const form = document.querySelector('form');

// Input Filed Reference
const bookName = document.getElementById('book-name');
const authourName = document.querySelector("#authour-name");
const totalPages = document.querySelector("#total-pages");
const pagesRead = document.querySelector("#pages-read");
const readStatus = document.querySelector("#read-status");
const quote = document.querySelector("#fav-quote");

// Book Array
const books = [];


form.addEventListener("submit", sumbitTheFormLocally);
let isInEditMode = false;

function sumbitTheFormLocally()
{
    let a;
    if (isInEditMode === false)
    {
        if (form.checkValidity() === true)
            {
                event.preventDefault();
                const pagesAlreadyRead = fillThePagesRead();
                const randomQuotesFromObject = fillTheQuotes();
                const newBook = new CreateBookObject(bookName.value, 
                    authourName.value, (+totalPages.value), (+pagesAlreadyRead),
                    readStatus.checked, randomQuotesFromObject
                )
                a = books.push(newBook);
                addTheBookToTheMain((a - 1));
                updateTheTabularData();
                form.reset();
                // console.log("submmited=locally");
            }
        isInEditMode = false;
    }
    else if (isInEditMode === true)
    {
        event.preventDefault();
        submitTheEditedBook();
        updateTheTabularData();
        isInEditMode = false;
    }
}

// Book Object Constructor: 

function CreateBookObject(bookName, authourName, totalPages, pagesRead, readStatus, quote)
{
    this.bookName = bookName;
    this.authourName = authourName;
    this.totalPages = totalPages;
    this.pagesRead = pagesRead;
    this.readStatus = readStatus;
    this.quote = quote;
}


// Function to fill the Pages Read if it's left empty
function fillThePagesRead()
{
    if (pagesRead.value === "")
    {
        return 0;
    }
    else if ( pagesRead.value > (+totalPages.value) )
    {
        return (+totalPages.value);
    }
    else if (pagesRead.value <= (+totalPages.value))
    {
        return (+pagesRead.value);
    }
}

function fillTheQuotes()
{
    if (quote.value === "")
    {
        const randomQuote = quotesFromBooks.chooseRandomQuote();
        return randomQuote;
    }
    else 
    {
        return quote.value;
    }
}

let quotesFromBooks = {
    quote1: "There is some good in this world, and its worth fighting for.",
    quote2: "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    quote3: "I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. Its when you know youre licked before you begin but you begin anyway and you see it through no matter what. You rarely win, but sometimes you do.",
    quote4: "A man, after he has brushed off the dust and chips of his life, will have left only the hard, clean questions: Was it good or was it evil? Have I done well — or ill?",
    quote5: "The only way out of the labyrinth of suffering is to forgive.", 
    quote6: "This above all: To thine own self be true, And it must follow, as the night the day, Thou canst not then be false to any man.", 
    quote7: "Generally, by the time you are Real, most of your hair has been loved off, and your eyes drop out and you get loose in the joints and very shabby. But these things dont matter at all, because once you are Real you cant be ugly, except to people who dont understand.", 
    quote8: "Whatever our souls are made of, his and mine are the same.",
    quote9: "There are years that ask questions and years that answer.", 
    quote10: "Who controls the past controls the future. Who controls the present controls the past", 
    chooseRandomQuote: function ()
                        {
                            const randomIndex = Math.floor(Math.random() * 10);
                            const quoteKeys = Object.keys(this);
                            const randomQuoteKey = quoteKeys[randomIndex];
                            return this[randomQuoteKey];
                        }
}


function createTheBook(arrayIndex)
{
    // Creation of Books: 
const createdBook1 = document.createElement("div");
const createdBookName = document.createElement("h1");
const createdAuthourName = document.createElement("h4");
const createdTotalPages = document.createElement("p");
const createdTotalPagesCompleted = document.createElement("p");
const createdFavQuotes = document.createElement("p");
const createdDivForProgressBar = document.createElement("div");
const createdLabelForProgressBar = document.createElement("label");
const createdActualProgressBar = document.createElement("progress");
const createdLastone = document.createElement("div");
const createdEditButton = document.createElement("button");
const createdRemoveButton = document.createElement("button");
const createdSubDivOfTheLastOne = document.createElement("div");
const createdSubDivLabel = document.createElement("label");
const createdSubDivInput = document.createElement("input");
const createdApe = document.createElement("div");

// Adding Class to the Crateion of books:

createdBook1.classList.add('book-1');
createdBookName.classList.add('book-titl3');
createdAuthourName.classList.add('authour-name');
createdTotalPages.classList.add('total-pages');
createdTotalPagesCompleted.classList.add('total-pages-completed');
createdFavQuotes.classList.add('fav-quote');
createdDivForProgressBar.classList.add('progress-bar');
createdLabelForProgressBar.classList.add('filee');
createdLastone.classList.add('last-one');
createdEditButton.classList.add('edit');
createdRemoveButton.classList.add('edit');
createdSubDivLabel.classList.add('lasflsa');
createdSubDivInput.classList.add('completed-toggle');
createdApe.classList.add('ape');

// Setting Attribues to the cration of books: 
createdLabelForProgressBar.setAttribute("for", "file");
createdActualProgressBar.setAttribute("id", "file");
createdActualProgressBar.setAttribute("value", "");
createdActualProgressBar.setAttribute("max", "");
createdSubDivLabel.setAttribute("for", "lasdkj");
createdSubDivInput.setAttribute("type", "checkbox");
createdSubDivInput.setAttribute("id", "lasdkj");

// Appending 
// appendign to the last sub div
createdSubDivOfTheLastOne.appendChild(createdSubDivLabel);
createdSubDivOfTheLastOne.appendChild(createdSubDivInput);
createdSubDivOfTheLastOne.appendChild(createdApe);

// lat one
createdLastone.appendChild(createdEditButton);
createdLastone.appendChild(createdRemoveButton);
createdLastone.appendChild(createdSubDivOfTheLastOne);

// Progress Bar
createdDivForProgressBar.appendChild(createdLabelForProgressBar);
createdDivForProgressBar.appendChild(createdActualProgressBar);


// Appendig to Book-1
createdBook1.appendChild(createdBookName);
createdBook1.appendChild(createdAuthourName);
createdBook1.appendChild(createdTotalPages);
createdBook1.appendChild(createdTotalPagesCompleted);
createdBook1.appendChild(createdFavQuotes);
createdBook1.appendChild(createdDivForProgressBar);
createdBook1.appendChild(createdLastone);

// Adding the Content to the createion of books

createdBookName.innerText = books[arrayIndex].bookName;
createdAuthourName.innerText = `Authour: ${books[arrayIndex].authourName}`;
createdTotalPages.innerText = `Total Pages: ${books[arrayIndex].totalPages}`;
createdTotalPagesCompleted.innerText = `Pages Read: ${books[arrayIndex].pagesRead}`;
createdFavQuotes.innerText = `${books[arrayIndex].quote}`;
createdEditButton.innerText = "Edit";
createdRemoveButton.innerText = "Remove";
createdSubDivLabel.innerText = "Read:";
createdLabelForProgressBar.innerText = "Progress:";
createdActualProgressBar.value = `${books[arrayIndex].pagesRead}`;
createdActualProgressBar.max = `${books[arrayIndex].totalPages}`;
createdSubDivInput.checked = books[arrayIndex].readStatus;
createdSubDivInput.addEventListener("click", () => changeTheReadStatus(createdSubDivInput.checked, createdTotalPagesCompleted, arrayIndex,createdActualProgressBar ));
createdRemoveButton.addEventListener("click",() => removeTheBook(createdBook1, arrayIndex));
createdEditButton.addEventListener("click", () => 
    editTheBook(arrayIndex,
        createdBook1,
        createdBookName, 
        createdAuthourName,
        createdTotalPages,
        createdTotalPagesCompleted,
        createdFavQuotes,
        createdEditButton,
        createdRemoveButton,
        createdActualProgressBar,
        createdSubDivInput
    ));


// Setting Colors: 
createdApe.style.background = assingApeColor(arrayIndex);
createdBookName.style.color = assingTextColor(arrayIndex);
return createdBook1;
}

function changeTheReadStatus (readStatus, createdTotalPages, arrayIndex, progressBar)
{
    if(readStatus === true)
    {
        books[arrayIndex].readStatus = true;
        books[arrayIndex].pagesRead = books[arrayIndex].totalPages;
        createdTotalPages.innerText = `Pages Read: ${books[arrayIndex].pagesRead}`;
        progressBar.value = books[arrayIndex].totalPages;
        updateTheTabularData();
    }
    else if(readStatus === false)
    {
        books[arrayIndex].readStatus = false;
        books[arrayIndex].pagesRead = 0;
        createdTotalPages.innerText = `Pages Read: ${books[arrayIndex].pagesRead}`;
        progressBar.value = 0;
        updateTheTabularData();
    }
    updateTheTabularData();
}
// Addition of Books: 

function addTheBookToTheMain(arrayIndex)
{
    const a = createTheBook(arrayIndex);
    const mainBody = document.querySelector(".main-body");
    mainBody.appendChild(a);
}


// Removing The Book from the DOM:
function removeTheBook(book, arrayIndex) {
    const mainBody = document.querySelector(".main-body");
    mainBody.removeChild(book);
    books.splice(arrayIndex, 1);
    console.log("Book removed. Updated books array:", books);
    updateTheTabularData();
    console.log("Tabular data updated.");
}

function editTheBook (arrayIndex,createdBook1, createdAuthourName,
    createdTotalPages,
    createdTotalPagesCompleted,
    createdFavQuotes,
    createdEditButton,
    createdRemoveButton,
    createdActualProgressBar,
    createdSubDivInput)
{
    isInEditMode = true; 
    bookName.value = books[arrayIndex].bookName;
    authourName.value = books[arrayIndex].authourName;
    totalPages.value = books[arrayIndex].totalPages;
    pagesRead.value = books[arrayIndex].pagesRead;
    readStatus.checked = books[arrayIndex].readStatus;
    quote.value = books[arrayIndex].quote;
    currentBookIndex = arrayIndex;
}




function submitTheEditedBook()
{
    event.preventDefault();
    console.log(bookName.value);
    books[currentBookIndex].bookName = bookName.value;
    books[currentBookIndex].authourName = authourName.value;
    books[currentBookIndex].totalPages = totalPages.value;
    books[currentBookIndex].pagesRead = pagesRead.value;
    books[currentBookIndex].readStatus = readStatus.checked;
    books[currentBookIndex].quote = quote.value;

        // Update the DOM elements
        const bookDOM = document.querySelectorAll('.book-1')[currentBookIndex];
        bookDOM.querySelector('.book-titl3').innerText = books[currentBookIndex].bookName;
        bookDOM.querySelector('.authour-name').innerText = `Authour: ${books[currentBookIndex].authourName}`;
        bookDOM.querySelector('.total-pages').innerText = `Total Pages: ${books[currentBookIndex].totalPages}`;
        bookDOM.querySelector('.total-pages-completed').innerText = `Pages Read: ${books[currentBookIndex].pagesRead}`;
        bookDOM.querySelector('.fav-quote').innerText = books[currentBookIndex].quote;
        bookDOM.querySelector('progress').value = books[currentBookIndex].pagesRead;
        bookDOM.querySelector('.completed-toggle').checked = books[currentBookIndex].readStatus;
        form.reset();
        console.log("Edited book submitted locally");
        isInEditMode = false;
        updateTheTabularData();
}



// Tabular Data: 

// Getting Reference: 

const tabTotalBooks = document.querySelector(".ad1");
const tabTotalBooksCompleted = document.querySelector(".ad2");
const tabunreadBooks = document.querySelector(".ad3");
const tabTotalPages = document.querySelector(".ad4");
const tabTotalPagesRead = document.querySelector(".ad5");


function updateTheTabularData()
{
    if(books.length > 0)
    {
        let totalPages = books.reduce((acc, curr) => acc + Number(curr.totalPages), 0);
        let totalPagesRead = books.reduce((acc, curr) => acc + Number(curr.pagesRead), 0);      
        let totalBooks = books.length;
        let totalBooksRead = books.filter((book) => book.readStatus === true);
        let totalBooksUnread = books.filter((book) => book.readStatus === false);
    
    
        tabTotalBooksCompleted.innerText = totalBooksRead.length;
        tabunreadBooks.innerText = totalBooksUnread.length;
        tabTotalPages.innerText = totalPages;
        tabTotalPagesRead.innerText = totalPagesRead;
        tabTotalBooks.innerText = books.length; 
        console.log("Updating The tabular data");
        console.log(books.length);
    }
    else 
    {
        tabTotalBooksCompleted.innerText = 0;
        tabunreadBooks.innerText = 0;
        tabTotalPages.innerText = 0;
        tabTotalPagesRead.innerText = 0;
        tabTotalBooks.innerText = 0; 
        console.log("No books available. Resetting tabular data.");
        console.log(books.length);
    }
}


// Adding function to the buttons

const removeAllBtn = document.querySelector(".remove-All");
const displayAllBtn = document.querySelector(".display-All");
const readAllBtn = document.querySelector(".read-All");
const unreadAllBtn = document.querySelector(".unread-All");
const ascendAllBtn = document.querySelector(".ascend-All");
const descendAllBtn = document.querySelector(".descend-All");

removeAllBtn.addEventListener("click", removeAllBooks);
displayAllBtn.addEventListener("click",displayallTheBooks);
readAllBtn.addEventListener("click", displayOnlyReadBooks);
unreadAllBtn.addEventListener("click", displayOnlyUnReadBooks);
ascendAllBtn.addEventListener("click", doAscendingOrder);
descendAllBtn.addEventListener("click", doDescendingOrder);

function removeAllBooks()
{
    const mainBody = document.querySelector(".main-body");
    mainBody.innerHTML = '';
    console.log("Main got Cleared");
    books.length = 0;
    updateTheTabularData();
    console.log(books);
}

function displayOnlyReadBooks()
{
    const readBooksOnly = books.filter((book) => book.readStatus === true);
    const mainBody = document.querySelector(".main-body");
    mainBody.innerHTML = '';
   
    for (let index = 0; index < readBooksOnly.length; index++) {
        const newBook = yetAnotherCreationOfBooks(readBooksOnly[index], index);
        const mainBody = document.querySelector(".main-body");
        mainBody.appendChild(newBook);
    }
}

function displayOnlyUnReadBooks()
{
    const readBooksOnly = books.filter((book) => book.readStatus === false);
    const mainBody = document.querySelector(".main-body");
    mainBody.innerHTML = '';
   
    for (let index = 0; index < readBooksOnly.length; index++) {
        const newBook = yetAnotherCreationOfBooks(readBooksOnly[index], index);
        const mainBody = document.querySelector(".main-body");
        mainBody.appendChild(newBook);
    }
}

function displayallTheBooks()
{
    const mainBody = document.querySelector(".main-body");
    mainBody.innerHTML = '';
    for (let index = 0; index < books.length; index++) {
        const newBook = yetAnotherCreationOfBooks(books[index], index);
        const mainBody = document.querySelector(".main-body");
        mainBody.appendChild(newBook);
    }
}

function doAscendingOrder()
{
    books.sort((a, b) => a.bookName.localeCompare(b.bookName));
    const mainBody = document.querySelector(".main-body");
    displayallTheBooks();
}

function doDescendingOrder()
{
    books.sort((a, b) => b.bookName.localeCompare(a.bookName));
    const mainBody = document.querySelector(".main-body");
    displayallTheBooks();
    console.log("descend Function");
}

// Ape Background Color

function assingApeColor(arrayIndex)
{
    let copiedArrayIndex = arrayIndex;
    const arrayOfColors = [
        "linear-gradient(45deg, #FFE066, #F8C846)",
        "linear-gradient(45deg, #FF9C7A, #E67349)",
        "linear-gradient(45deg, #A89285, #7F6C65)",
        "linear-gradient(45deg, #6FC765, #489646)",
        "linear-gradient(45deg, #58C7E3, #3698AF)",
        "linear-gradient(45deg, #4482C3, #285A88)",
        "linear-gradient(45deg, #8A9DC0, #61758A)",
        "linear-gradient(45deg, #A57DBE, #744C88)",
        "linear-gradient(45deg, #FF5BAA, #D33C82)"
    ];

    if(copiedArrayIndex > 8)
    {
        copiedArrayIndex = 0;
    }

    return arrayOfColors[copiedArrayIndex];
}

function assingTextColor(arrayIndex)
{
    let copiedArrayIndex = arrayIndex;
    const arrayOfColors = [
        "#FFF00",
        "#FF8D33",
        "#FFC233",
        "#FFEB33",
        "#D4FF33",
        "#33FF57",
        "#33FFBD",
        "#33D4FF",
        "#3357FF"
    ];

    if(copiedArrayIndex > 8)
    {
        copiedArrayIndex = 0;
    }

    return arrayOfColors[copiedArrayIndex];
}



function createBookObject(bookName, authourName, totalPages, pagesRead, readStatus, quote)
{
    this.bookName = bookName;
    this.authourName = authourName;
    this.totalPages = totalPages;
    this.pagesRead = pagesRead;
    this.readStatus = readStatus;
    this.quote = quote;
}


function yetAnotherCreationOfBooks(SingleObject, arrayIndex)
{
    // Creation of Books: 
    const createdBook1 = document.createElement("div");
    const createdBookName = document.createElement("h1");
    const createdAuthourName = document.createElement("h4");
    const createdTotalPages = document.createElement("p");
    const createdTotalPagesCompleted = document.createElement("p");
    const createdFavQuotes = document.createElement("p");
    const createdDivForProgressBar = document.createElement("div");
    const createdLabelForProgressBar = document.createElement("label");
    const createdActualProgressBar = document.createElement("progress");
    const createdLastone = document.createElement("div");
    const createdEditButton = document.createElement("button");
    const createdRemoveButton = document.createElement("button");
    const createdSubDivOfTheLastOne = document.createElement("div");
    const createdSubDivLabel = document.createElement("label");
    const createdSubDivInput = document.createElement("input");
    const createdApe = document.createElement("div");
    
    // Adding Class to the Crateion of books:
    
    createdBook1.classList.add('book-1');
    createdBookName.classList.add('book-titl3');
    createdAuthourName.classList.add('authour-name');
    createdTotalPages.classList.add('total-pages');
    createdTotalPagesCompleted.classList.add('total-pages-completed');
    createdFavQuotes.classList.add('fav-quote');
    createdDivForProgressBar.classList.add('progress-bar');
    createdLabelForProgressBar.classList.add('filee');
    createdLastone.classList.add('last-one');
    createdEditButton.classList.add('edit');
    createdRemoveButton.classList.add('edit');
    createdSubDivLabel.classList.add('lasflsa');
    createdSubDivInput.classList.add('completed-toggle');
    createdApe.classList.add('ape');
    
    // Setting Attribues to the cration of books: 
    createdLabelForProgressBar.setAttribute("for", "file");
    createdActualProgressBar.setAttribute("id", "file");
    createdActualProgressBar.setAttribute("value", "");
    createdActualProgressBar.setAttribute("max", "100");
    createdSubDivLabel.setAttribute("for", "lasdkj");
    createdSubDivInput.setAttribute("type", "checkbox");
    createdSubDivInput.setAttribute("id", "lasdkj");
    
    // Appending 
    // appendign to the last sub div
    createdSubDivOfTheLastOne.appendChild(createdSubDivLabel);
    createdSubDivOfTheLastOne.appendChild(createdSubDivInput);
    createdSubDivOfTheLastOne.appendChild(createdApe);
    
    // lat one
    createdLastone.appendChild(createdEditButton);
    createdLastone.appendChild(createdRemoveButton);
    createdLastone.appendChild(createdSubDivOfTheLastOne);
    
    // Progress Bar
    createdDivForProgressBar.appendChild(createdLabelForProgressBar);
    createdDivForProgressBar.appendChild(createdActualProgressBar);
    
    
    // Appendig to Book-1
    createdBook1.appendChild(createdBookName);
    createdBook1.appendChild(createdAuthourName);
    createdBook1.appendChild(createdTotalPages);
    createdBook1.appendChild(createdTotalPagesCompleted);
    createdBook1.appendChild(createdFavQuotes);
    createdBook1.appendChild(createdDivForProgressBar);
    createdBook1.appendChild(createdLastone);
    
    // Adding the Content to the createion of books
    
    createdBookName.innerText = SingleObject.bookName;
    createdAuthourName.innerText = `Authour: ${SingleObject.authourName}`;
    createdTotalPages.innerText = `Total Pages: ${SingleObject.totalPages}`;
    createdTotalPagesCompleted.innerText = `Pages Read: ${SingleObject.pagesRead}`;
    createdFavQuotes.innerText = `${SingleObject.quote}`;
    createdEditButton.innerText = "Edit";
    createdRemoveButton.innerText = "Remove";
    createdSubDivLabel.innerText = "Read:";
    createdLabelForProgressBar.innerText = "Progress:";
    createdActualProgressBar.value = `${SingleObject.pagesRead}`;
    createdSubDivInput.checked = SingleObject.readStatus;
    createdSubDivInput.addEventListener("click", () => changeTheReadStatus(createdSubDivInput.checked, createdTotalPagesCompleted, arrayIndex,createdActualProgressBar ));
    createdRemoveButton.addEventListener("click",() => removeTheBook(createdBook1, arrayIndex));
    createdEditButton.addEventListener("click", () => 
        editTheBook(arrayIndex,
            createdBook1,
            createdBookName, 
            createdAuthourName,
            createdTotalPages,
            createdTotalPagesCompleted,
            createdFavQuotes,
            createdEditButton,
            createdRemoveButton,
            createdActualProgressBar,
            createdSubDivInput
        ));
        // Setting Colors: 
createdApe.style.background = assingApeColor(arrayIndex);
createdBookName.style.color = assingTextColor(arrayIndex);
    return createdBook1;
}