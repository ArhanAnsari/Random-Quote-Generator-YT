const quotes = [
	    "The best way to predict the future is to invent it.",
	    "Life is 10% what happens to us and 90% how we react to it.",
	    "Your time is limited, don't waste it living someone else's life.",
	    "The only way to do great work is to love what you do.",
	    "If you can dream it, you can achieve it.",
	    "We cannot solve problems with the kind of thinking we employed when we came up with them.",
	    "Learn as if you will live forever, live like you will die tomorrow."
];

function generateQuote() {
	const randomIndex = Math.floor(Math.random() * quotes.length);
	document.getElementById('quote').innerHTML = quotes[randomIndex];
}