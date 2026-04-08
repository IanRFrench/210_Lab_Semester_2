const quotes = [
  { q: "Be yourself; everyone else is already taken.", a: "Oscar Wilde" },
  { q: "The only way to do great work is to love what you do.", a: "Steve Jobs" },
  { q: "In the middle of difficulty lies opportunity.", a: "Albert Einstein" },
  { q: "Do what you can, with what you have, where you are.", a: "Theodore Roosevelt" },
  { q: "Happiness depends upon ourselves.", a: "Aristotle" },
  { q: "Turn your wounds into wisdom.", a: "Oprah Winfrey" },
  { q: "Dream big and dare to fail.", a: "Norman Vaughan" },
  { q: "What we think, we become.", a: "Buddha" },
  { q: "Act as if what you do makes a difference. It does.", a: "William James" },
  { q: "Success is not final, failure is not fatal.", a: "Winston Churchill" }
];

const container = document.getElementById("quotes-container");

// loop through quotes
for (let i = 0; i < quotes.length; i++) {

  // create card
  const card = document.createElement("div");
  card.classList.add("quote-card");

  // quote text (with quotation marks)
  const quoteText = document.createElement("p");
  quoteText.textContent = `"${quotes[i].q}"`;

  // author (italic + dash)
  const author = document.createElement("p");
  author.textContent = `– ${quotes[i].a}`;
  author.classList.add("author");

  // append elements
  card.appendChild(quoteText);
  card.appendChild(author);
  container.appendChild(card);
}