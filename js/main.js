var quotesList=["“Be yourself; everyone else is already taken.” <br> ― Oscar Wilde","“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” <br> ― Albert Einstein","“A room without books is like a body without a soul.” <br> ― Marcus Tullius Cicero","“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” <br> ― Dr. Seuss","“You only live once, but if you do it right, once is enough.” <br> ― Mae West","“Be the change that you wish to see in the world.” <br> ― Mahatma Gandh"];
var storeQuote="";

function generateRandomQuote(){ /* src:https://www.w3schools.com/js/js_math.asp */
    var randomNum=Math.floor(Math.random()*quotesList.length);

    while(quotesList[randomNum]===storeQuote){
        randomNum=Math.floor(Math.random()*quotesList.length); /* src:https://stackoverflow.com/questions/57791265/how-not-to-make-two-consecutive-same-numbers-come-in-math-random */
    }

    var randomQuote=quotesList[randomNum];
    storeQuote=randomQuote;
    document.getElementById("quotes").innerHTML=randomQuote;
}
document.getElementById("btn").addEventListener("click",generateRandomQuote);
generateRandomQuote();