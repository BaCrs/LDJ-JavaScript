const backgroundColors = ["aliceblue", "beige", "lavender", "coral", "darkslategray"];
const text = ["Antoine", "Lucie", "Joseph", "Margot", "Arnaud"];

function getRandomElement(array, previousValue = null) {
    let res;
    do {
        res = array[Math.floor(Math.random()*array.length)];
    } while (res == previousValue);
    return res;
}

window.addEventListener("load", function() {
    let bg = document.querySelector("body");
    let btn = document.querySelector("button");
    let list = document.getElementById("list");

    btn.addEventListener("click", function() {
        // Change background color
        bg.style.backgroundColor = getRandomElement(backgroundColors, bg.style.backgroundColor);

        // Add text to list
        let entry = document.createElement('li');
        entry.appendChild(document.createTextNode(getRandomElement(text)));
        list.appendChild(entry);
        setInterval(function(){ 
            entry.innerHTML = getRandomElement(text, entry.innerHTML);
        }, 5000, entry);
    })
});