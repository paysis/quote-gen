const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

// Fetch quote from API
async function fetchQuote(){
    const apiUrl = "https://api.quotable.io/quotes/random";
    try {
        const response = await fetch(apiUrl);
        apiQuote = (await response.json())[0];
        if ("content" in apiQuote && "author" in apiQuote) {
            quoteText.innerText = apiQuote.content;
            authorText.innerText = apiQuote.author;

        }
    }catch (error) {
        console.log(error);
    }
}

newQuoteBtn.onclick = fetchQuote;
window.onload = () => fetchQuote();
