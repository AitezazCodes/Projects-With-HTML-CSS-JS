let obj = {
    "Nelson Mandela" : "The greatest glory in living lies not in never falling, but in rising every time we fall.",

    "Steve Jobs" : "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma, which is living with the results of other people's thinking.",

    "Oprah Winfrey" : "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",

    "John Lennon" : "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one."
}

document.querySelector("#btn").addEventListener("click", function(){

    let authors = Object.keys(obj);
    let index = [Math.floor(Math.random() * authors.length)];
    let author = authors[index]
    let quote = obj[author];

    document.querySelector(".quote").innerHTML = quote;
    document.querySelector(".author").innerHTML = author;
});