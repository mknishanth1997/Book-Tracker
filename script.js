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


function sumbitTheFormLocally()
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
        books.push(newBook);
        form.reset();
        console.log("submmited=locally");
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


// Getting refernce to the main body: 
const mainBody = document.querySelector(".main-body");
mainBody.appendChild(createdBook1);
mainBody.appendChild(createdBook1);
mainBody.appendChild(createdBook1);

console.log(mainBody);







