


function newQuote() {
    var randomQuote = qoutes[Math.floor(Math.random() * qoutes.length)];    
    qouteElement.innerHTML= randomQuote.qoute;
    authorElement.innerHTML= randomQuote.author;

}

var qoutes = [
    {
        qoute:"“Be yourself; everyone else is already taken.”",
        author:"Oscar Wilde"
    },

     {
        qoute:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        author:"Marilyn Monroe"
    },

     {
        qoute:"“So many books, so little time.”",
        author:"Frank Zappa"
    },

     {
        qoute:"“A room without books is like a body without a soul.”",
        author:"Marcus Tullius Cicero"
    },

     {
        qoute:"“You only live once, but if you do it right, once is enough.”",
        author:"Mae West"
    },

     {
        qoute:"“In the end, it's not the years in your life that count. It's the life in your years.”",
        author:"Abraham Lincoln"
    }
]

   
 var qouteElement = document.getElementById('quote');
 var authorElement = document.getElementById('author');

