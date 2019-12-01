let counter = document.querySelector(".counter");
const addCount = document.querySelector("#addCountBtn");
const lowerCount = document.querySelector("#lowerCountBtn");

let count = 0;


addCount.addEventListener("click", () => {
    count++;
    counter.innerHTML = count;
    counterColor();
    counterAnimation();
})

lowerCount.addEventListener("click", () => {
    count--;
    counter.innerHTML = count;
    counterColor();
    counterAnimation();
})

const counterAnimation = () => {
    counter.animate([{opacity: 0.2}, {opacity: 1.0}],
    {duration: 1000, fill: "forwards"})
}

const counterColor = () => {
    if (counter.innerHTML > 0) {
        counter.style.color = "green"
    }
    else if (counter.innerHTML < 0) {
        counter.style.color = "red"
    }
    else {counter.style.color = "white"}
}