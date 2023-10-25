let quote = document.querySelector(".quote");
let nextQuote = document.querySelector("#new-quote");
let person = document.querySelector(".person");
const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    person: "Oscar Wilde"
  },
  {
    quote:
      "Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.",
    person: "Marilyn Monroe"
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    person: "Marcus Tullius Cicero"
  },
  {
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    person: "Bernard M. Baruch"
  }
];
nextQuote.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quotes.length);
  setTimeout(() => {
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
  }, 1000);
});
