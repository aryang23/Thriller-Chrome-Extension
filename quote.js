let quoteBtn = document.getElementById("btn");
let output = document.getElementById("output");

let quotes=[
    "The way to get started is to quit talking and begin doing. -Walt Disney",
    "When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
    "Life is what happens when you're busy making other plans. -John Lennon",
    "Don't judge each day by the harvest you reap but by the seeds that you plant. -Robert Louis Stevenson",
    "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin",
    "It is during our darkest moments that we must focus to see the light. -Aristotle",
    "Whoever is happy will make others happy too. -Anne Frank",
    "Only a life lived for others is a life worthwhile. -Albert Einstein",
    "The purpose of our lives is to be happy. -Dalai Lama",
    "You only live once, but if you do it right, once is enough. -Mae West",
    "May you live all the days of your life. -Jonathan Swift",
    "Life is either a daring adventure or nothing at all. -Helen Keller",
    
];

quoteBtn.addEventListener("click",function(){
    var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    output.innerHTML = randomQuote;
})

