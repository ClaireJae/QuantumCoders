let index = 0;

const textContainer = document.querySelector("#textContainer")
const prevButton = document.querySelector("#prevButton")
const nextButton = document.querySelector("#nextButton")

const texts = [
    "Slide to the left!",
    "Slide to the right!"
]

function updateText() {
    textContainer.innerText = texts[index]
}

prevButton.addEventListener("click", function() {
    if(index > 0){
        index--;
    }else{
        index = texts.length - 1
    }
    updateText();
})

nextButton.addEventListener("click", function() {
    if (index < texts.length - 1) {
        index++;
    } else {
        index = 0;
    }
    updateText();
});

updateText();