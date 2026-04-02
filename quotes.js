const quotes = [
  { q: "Be kind whenever possible. It is always possible.", a: "Dalai Lama" },
  { q: "Kindness is a language which the deaf can hear and the blind can see.", a: "Mark Twain" },
  { q: "No act of kindness, no matter how small, is ever wasted.", a: "Aesop" },
  { q: "Carry out a random act of kindness, with no expectation of reward.", a: "Princess Diana" },
  { q: "Kindness begins with the understanding that we all struggle.", a: "Charles Glassman" },
  { q: "A warm smile is the universal language of kindness.", a: "William Arthur Ward" },
  { q: "Wherever there is a human being, there is an opportunity for kindness.", a: "Lucius Annaeus Seneca" },
  { q: "Kindness can transform someone’s dark moment with a blaze of light.", a: "Amy Leigh Mercree" },
  { q: "Act with kindness, but do not expect gratitude.", a: "Confucius" },
  { q: "Unexpected kindness is the most powerful, least costly, and most underrated agent of human change.", a: "Bob Kerrey" }
];

// Get container
const container = document.getElementById("quotes-container");

// Loop through quotes
for (let i = 0; i < quotes.length; i++) {

  // Create card div
  const card = document.createElement("div");
  card.classList.add("quote-card");

  // Create quote text
  const quoteText = document.createElement("p");
  quoteText.textContent = `"${quotes[i].q}"`; // wrapped in quotes

  // Create author
  const author = document.createElement("p");
  author.textContent = `– ${quotes[i].a}`; // dash before name
  author.classList.add("author");

  // Append elements
  card.appendChild(quoteText);
  card.appendChild(author);

  container.appendChild(card);
}